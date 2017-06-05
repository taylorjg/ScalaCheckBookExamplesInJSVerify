export const runLengthEnc = function* (xs) {
    let currTuple = null;
    for (const x of xs) {
        if (!currTuple) {
            currTuple = [1, x];
            continue;
        }
        if (currTuple[1] === x) {
            currTuple[0]++;
            continue;
        }
        yield currTuple;
        currTuple = [1, x];
    }
    if (currTuple) yield currTuple;
};

export const runLengthDec = function* (r) {
    for (const [n, x] of r) yield* Array(n).fill(x);
};
