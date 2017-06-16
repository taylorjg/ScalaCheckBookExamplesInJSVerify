import 'babel-polyfill';
import jsc from 'jsverify';
import { interleave, interleaveWithBug } from './interleaving';

describe('interleave', () => {

    const arbList = jsc.array(jsc.integer);

    it('property test', () => {
        const prop = (xs, ys) => {
            const res = interleave(xs, ys);
            return res.length === xs.length + ys.length;
        };
        return jsc.check(jsc.forall(arbList, arbList, prop));
    });

    it('property test (wuth bug)', () => {
        const prop = (xs, ys) => {
            const res = interleaveWithBug(xs, ys);
            return res.length === xs.length + ys.length;
        };
        return jsc.check(jsc.forall(arbList, arbList, prop));
    });
});
