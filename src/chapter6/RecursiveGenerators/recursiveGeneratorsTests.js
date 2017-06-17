import jsc from 'jsverify';
import { sample } from '../../extras';
import { Leaf, Node } from './recursiveGenerators';

describe('recursive generators', () => {

    const arbLeaf = arb => jsc.bless({
        generator: function(size) {
            const gen = arb.generator.map(item => new Leaf(item));
            return gen(size);
        }
    });

    const arbNode = arb => jsc.bless({
        generator: function(size) {
            const gen = jsc.array(arbTree(arb)).generator.map(children => new Node(children));
            return gen(size);
        }
    });

    const arbTree = arb => jsc.oneof([arbLeaf(arb), arbNode(arb)]);

    it('property test', () => {
        sample(arbTree(jsc.nat));
        sample(arbTree(jsc.asciinestring));
    });
});
