import Tree, { Node } from './tree.js';

function initTree() {
    const tree = new Tree("A");
    const b = new Node("B");
    const c = new Node("C");
    const d = new Node("D");
    const e = new Node("E");
    const f = new Node("F");
    const g = new Node("G");
    const h = new Node("H");
    const i = new Node("I");
    const j = new Node("J");
    const k = new Node("K");
    const l = new Node("L");
    const m = new Node("M");
    const n = new Node("N");
    const o = new Node("O");
    const p = new Node("P");
    const q = new Node("Q");
    const r = new Node("R");
    const s = new Node("S");
    const t = new Node("T");
    const u = new Node("U");
    const v = new Node("V");
    const w = new Node("W");
    const x = new Node("X");
    const y = new Node("Y");
    const z = new Node("Z");

    tree.root.appendChild(b);
    tree.root.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    c.appendChild(f);
    c.appendChild(g);
    d.appendChild(h);
    d.appendChild(i);
    e.appendChild(j);
    e.appendChild(k);
    f.appendChild(l);
    f.appendChild(m);
    g.appendChild(n);
    g.appendChild(o);
    h.appendChild(p);
    h.appendChild(q);
    i.appendChild(r);
    i.appendChild(s);
    j.appendChild(t);
    j.appendChild(u);
    k.appendChild(v);
    k.appendChild(w);
    l.appendChild(x);
    l.appendChild(y);
    m.appendChild(z);

    tree.dump();
    return tree;
}

function testFindValue() {
    const tree = initTree();
    console.log(tree.findValue("Z"));
}

function testRemoveValue() {
    const tree = initTree();
    tree.removeValue("B");
    tree.dump();
    tree.removeValue("C");
    tree.dump();
 
}

//testRemoveValue();
//testFindValue();
initTree();