import jsc from 'jsverify';

describe('throws', () => {

    // Dividing by zero in JavaScript results in Infinity rather than an exception.
    // https://stackoverflow.com/questions/8072323/best-way-to-prevent-handle-divide-by-0-in-javascript/8072369#8072369
    function notZero(n) {
        n = +n;  // Coerce to number.
        if (!n) {  // Matches +0, -0, NaN
            throw new Error('Invalid dividend ' + n);
        }
        return n;
    }

    it('property test', () => {
        return jsc.assert(jsc.forall("nat", n => jsc.throws(() => n / notZero(0))));
    });
});
