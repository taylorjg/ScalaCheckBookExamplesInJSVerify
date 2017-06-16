class Tree {
    constructor(size) {
        this.size = size;
    }
}

export class Leaf extends Tree {
    constructor(item) {
        super(1);
        this.item = item;
    }
    get [Symbol.toStringTag]() {
        return `Leaf(${this.item})`;
    }
}

export class Node extends Tree {
    constructor(children) {
        super(children.reduce((acc, child) => acc + child.size, 0));
        this.children = children;
    }
    get [Symbol.toStringTag]() {
        const children = this.children.map(child => child.toString()).join(', ');
        return `Node(List(${children}))`;
    }
}
