import 'babel-polyfill';
import jsc from 'jsverify';
import { runLengthEnc, runLengthDec } from './runLengthEnc';

describe('run length encoding', () => {

    const alphaNumChar = jsc.suchthat(jsc.asciichar, ch => /[A-Za-z0-9]/.test(ch));
    const rleItem = jsc.tuple([jsc.integer(1, 20), alphaNumChar]);

    const rleList = size => {
        if (size <= 1) return [rleItem.generator(size)];
        const tail = rleList(size - 1);
        const [[, c1],] = tail;
        const head = jsc.suchthat(rleItem, ([, c2]) => c2 !== c1).generator(size);
        return [head, ...tail];
    };

    const arb = jsc.bless({
        generator: rleList,
        shrink: a => jsc.shrink.array(rleItem.shrink)(a)
    });

    it('property test', () => {
        const prop = r => {
            const decoded = Array.from(runLengthDec(r));
            const encoded = Array.from(runLengthEnc(decoded));
            return jsc.utils.isApproxEqual(encoded, r);
        };
        return jsc.check(jsc.forall(arb, prop));
    });
});
