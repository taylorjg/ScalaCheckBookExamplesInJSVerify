import jsc from 'jsverify';

export const sample = arb => {
    const sampler = jsc.sampler(arb);
    const samples = sampler(10);
    samples.forEach((sample, index) => console.log(`samples[${index}]: ${samples[index]}`));
};
