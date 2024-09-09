import DoublyLinkedList from "./doublyLinkedList.js"

class Node {
    prev = null;
    next = null;
    data;

    constructor(data) {
        this.data = data;
    }
}




const node1 = new Node("C");
const node2 = new Node("A");
const node3 = new Node("T");

const list = new DoublyLinkedList(node1, node2, node3);

list.dumpList();

const node4 = new Node("R");

//list.insertBeforeNode(node4, node3);
list.insertAfterNode(node4, node3);

//list.removeNode(node1);
list.dumpList();

/*
//addNodeLast test
const node4 = new Node("S");
list.addNodeLast(node4);
list.dumpList();
*/

/*
//addNodeFirst test
const node5 = new Node("A");
list.addNodeFirst(node5);
list.dumpList();
*/

/*
//addFirst test
const list = new DoublyLinkedList();
list.dumpList();
list.addFirst("S");
list.addFirst("T");
list.addFirst("A");
list.addFirst("C");
list.dumpList();

//removeFirst test addon to addFirst test
list.removeFirst();
list.removeFirst();
list.removeFirst();
list.dumpList();
list.removeFirst();
list.dumpList();
*/
/*
//removeFirst test addon to two tests above
list.removeFirst();
list.dumpList();

list.addLast(list.removeLast());
list.dumpList();
*/

/*
//addLast test
const list = new DoublyLinkedList();
list.dumpList();
list.addLast("C");
list.addLast("A");
list.addLast("T");
list.addLast("S");
list.dumpList();
*/