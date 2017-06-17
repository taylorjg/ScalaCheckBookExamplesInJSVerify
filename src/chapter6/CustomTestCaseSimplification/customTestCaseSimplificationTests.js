import jsc from 'jsverify';
import { frequency, sample } from '../../extras';
import { Const, Add, Mul } from './customTestCaseSimplification';

describe('custom test case simplification', () => {

    const genConst = jsc.bless({
        generator: function (size) {
            const gen = jsc.integer(0, 10).generator.map(n => new Const(n));
            return gen(size);
        }
    });

    const genAdd = jsc.bless({
        generator: function(size) {
            const e1 = genExpr.generator(size);
            const e2 = genExpr.generator(size);
            return new Add(e1, e2);
        }
    });

    const genMul = jsc.bless({
        generator: function(size) {
            const e1 = genExpr.generator(size);
            const e2 = genExpr.generator(size);
            return new Mul(e1, e2);
        }
    });

    const genExpr = frequency([
        [11, genConst],
        [4, genAdd],
        [4, genMul]
    ]);

    it('sample', () => {
        sample(genExpr);
    });
});
