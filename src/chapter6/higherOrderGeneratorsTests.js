import jsc from 'jsverify';

describe('higher order generators', () => {

    it('jsc.tuple (Gen.sequence)', () => {
        const numbers = jsc.tuple([jsc.integer(1, 10), jsc.constant(20), jsc.constant(30)]);
        const sampler = jsc.sampler(numbers);
        const samples = sampler(10);
        samples.forEach((sample, index) => console.log(`samples[${index}]: ${samples[index]}`));
    });

    it('custom frequency combinator (Gen.frequency)', () => {
        // TODO
    });

    it('jsc.oneof (Gen.oneOf)', () => {
        // TODO
    });
});
