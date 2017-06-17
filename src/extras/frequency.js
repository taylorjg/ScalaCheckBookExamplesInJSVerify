import jsc from 'jsverify';

export const frequency = (xs0) => {
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
