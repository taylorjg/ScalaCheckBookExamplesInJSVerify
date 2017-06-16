import 'babel-polyfill';
import jsc from 'jsverify';
import { Leaf, Node } from './recursiveGenerators';

describe('recursive generators', () => {

    const sample = arb => {
        const sampler = jsc.sampler(arb);
        const samples = sampler(10);
        samples.forEach((sample, index) => console.log(`samples[${index}]: ${samples[index]}`));
    };

    const arbLeaf = arb => jsc.bless({
        generator: function(size) {
            const gen = arb.generator.map(n => new Leaf(n));
            return gen(size);
        }
    });

    const arbNode = arb => jsc.bless({
        generator: function(size) {
            const gen = arb.generator.map(n => new Node([new Leaf(n), new Leaf(n), new Leaf(n)]));
            return gen(size);
        }
    });

    const arbTree = arb => jsc.oneof([arbLeaf(arb), arbNode(arb)]);

    it('property test', () => {
        sample(arbTree(jsc.nat));
    });
});

// private static Gen<Tree<T>> GenNode<T>(Gen<T> genT)
// {
//     return Gen.Sized(size =>
//         from s in Gen.Choose(0, size)
//         let g = Gen.Resize(size / (s + 1), GenTree(genT))
//         from children in Gen.ListOf(s, g).Select(fsharpList => fsharpList.ToList())
//         select new Node<T>(children) as Tree<T>);
// }
