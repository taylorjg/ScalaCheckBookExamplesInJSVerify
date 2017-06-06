import 'babel-polyfill';
import jsc from 'jsverify';
import { runLengthEnc, runLengthDec } from './runLengthEnc';

describe('run length encoding', () => {

    const rleItem = jsc.tuple([jsc.integer(1, 20), jsc.asciichar]);

    const rleList = size => {
        if (size <= 1) return [rleItem.generator(size)];
        const tail = rleList(size - 1);
        const [[, c1],] = tail;
        const head = jsc.suchthat(rleItem, ([, c2]) => c2 !== c1).generator(size);
        const result = [head, ...tail];
        return result;
    };

    const arb = jsc.bless({ generator: rleList });

    const roundTrip = r => {
        const decoded = Array.from(runLengthDec(r));
        const encoded = Array.from(runLengthEnc(decoded));
        return jsc.utils.isApproxEqual(encoded, r);
    };

    jsc.property('round-trip property test', arb, roundTrip);
});
