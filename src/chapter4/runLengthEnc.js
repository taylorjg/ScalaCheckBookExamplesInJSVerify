export const runLengthEnc = function* (xs) {
    // Is it possible to trampoline a (recursive) generator ???
    const loop = function* (iter, currTuple) {
        const { value, done } = iter.next();
        if (done) return currTuple ? yield currTuple : undefined;
        if (currTuple) {
            const [count, previousValue] = currTuple;
            if (value === previousValue) return yield* loop(iter, [count + 1, value]);
            yield currTuple;
        }
        yield* loop(iter, [1, value]);
    };
    const iter = xs[Symbol.iterator]();
    yield* loop(iter);
};

export const runLengthDec = function* (r) {
    for (const [n, x] of r) yield* Array(n).fill(x);
};
