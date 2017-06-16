import jsc from 'jsverify';

describe('higher order generators', () => {

    const sample = arb => {
        const sampler = jsc.sampler(arb);
        const samples = sampler(10);
        samples.forEach((sample, index) => console.log(`samples[${index}]: ${samples[index]}`));
    };

    it('jsc.tuple (Gen.sequence)', () => {
        const numbers = jsc.tuple([jsc.integer(1, 10), jsc.constant(20), jsc.constant(30)]);
        sample(numbers);
    });

    const frequency = (xs0) => {
        if (xs0.length === 0) {
            throw new Error('frequency used with empty list');
        }
        return jsc.bless({
            generator: function (size) {
                const tot = xs0.reduce((acc, [f]) => acc + f, 0);
                const pick = (n, [[k, x], ...xs]) => n <= k ? x : pick(n - k, xs);
                const gen = jsc.integer(1, tot).generator.flatMap(n => pick(n, xs0).generator);
                return gen(size);
            }
        });
    };

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
