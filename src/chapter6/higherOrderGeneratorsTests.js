import jsc from 'jsverify';
import { frequency, sample } from '../extras';

describe('higher order generators', () => {

    it('jsc.tuple (Gen.sequence)', () => {
        const numbers = jsc.tuple([jsc.integer(1, 10), jsc.constant(20), jsc.constant(30)]);
        sample(numbers);
    });

    it('custom frequency combinator (Gen.frequency)', () => {
        const evenNumbersGen = jsc.bless({
            generator: function (size) {
                const gen = jsc.integer(2, 100000).generator.map(n => 2 * n);
                return gen(size);
            }
        });
        const oddNumbersGen = jsc.bless({
            generator: function (size) {
                const gen = jsc.integer(2, 100000).generator.map(n => 2 * n + 1);
                return gen(size);
            }
        });
        const numbersGen = frequency([
            [1, oddNumbersGen],
            [2, evenNumbersGen],
            [4, jsc.constant(0)]
        ]);
        sample(numbersGen);
    });

    it('jsc.oneof and jsc.elements (Gen.oneOf)', () => {

        const genNotZero = jsc.oneof([jsc.integer(-10, -1), jsc.integer(1, 10)]);
        sample(genNotZero);

        const genVowel = jsc.elements(["a", "e", "i", "o", "u", "y"]);
        sample(genVowel);
    });
});
