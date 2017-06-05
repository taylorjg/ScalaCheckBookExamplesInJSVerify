import 'babel-polyfill';
import jsc from 'jsverify';
import { runLengthEnc, runLengthDec } from '../../src/chapter4/runLengthEnc';

describe('run length encoding', () => {

    const rleItem = jsc.tuple([jsc.integer(1, 20), jsc.asciichar]);
    const rleList = jsc.array(rleItem);
    const arb = jsc.small(rleList);

    const roundTrip = r => {
        const decoded = Array.from(runLengthDec(r));
        const encoded = Array.from(runLengthEnc(decoded));
        return jsc.utils.isApproxEqual(encoded, r);
    };

    jsc.property('round-trip property test', arb, roundTrip);
});
