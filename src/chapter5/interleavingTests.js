import 'babel-polyfill';
import jsc from 'jsverify';
import { interleave, interleaveWithBug } from './interleaving';

describe('interleave', () => {

    it('property test', () => {
        return jsc.checkForall("[nat]", "[nat]", (xs, ys) => {
            const res = interleave(xs, ys);
            return res.length === xs.length + ys.length;
        });
    });

    it('property test (wuth bug)', () => {
        return jsc.checkForall("[nat]", "[nat]", (xs, ys) => {
            const res = interleaveWithBug(xs, ys);
            return res.length === xs.length + ys.length;
        });
    });
});
