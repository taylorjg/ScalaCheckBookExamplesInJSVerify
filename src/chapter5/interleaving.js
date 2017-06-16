export const interleave = (xs, ys) =>
    xs.length === 0
        ? ys
        : (ys.length === 0
            ? xs
            : [
                xs[0],
                ys[0],
                ...interleave(xs.slice(1), ys.slice(1))
            ]);

export const interleaveWithBug = (xs, ys) =>
    xs.length === 0
        ? ys
        : (ys.length === 0
            ? xs
            : [
                xs[0],
                ys[0],
                ...interleave(xs.slice(1), xs.slice(1))
            ]);
