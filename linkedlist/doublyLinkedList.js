
export default class DoublyLinkedList {
    head = null;
    tail = null;

    constructor(...nodes) {
        if (nodes.length > 0) {
            this.head = nodes[0]
            this.tail = nodes[0]
            for (let i = 1; i < nodes.length; i++) {
                nodes[i].prev = this.tail;
                this.tail.next = nodes[i];
                this.tail = nodes[i];
            }
        }
    }

    addNodeLast(node) {
        if(!!this.head) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }

    }

    addLast(data) {
        const node = new Node(data);
        this.addNodeLast(node);
    }

    removeLast() {
        if (!this.tail) return;

        const removed = this.tail.data;

        if (this.head === this.tail) {
            this.resetList();
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    
        return removed;
    }

    addNodeFirst(node) {
        if(!!this.head) {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
            this.tail = node;
        }

    }

    addFirst(data) {
        const node = new Node(data);
        this.addNodeFirst(node);
    }

    removeFirst() {
        if(!this.head) return;

        const removed = this.head.data;

        if(this.head === this.tail) {
            this.resetList();
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        return removed;
    }

    insertBeforeNode(nodeNew, nodeAfter) {
        nodeNew.next = nodeAfter;
        if(this.head == nodeAfter) {
            this.head = nodeNew;
        } else {
            nodeNew.prev = nodeAfter.prev;
            nodeAfter.prev.next = nodeNew;
        }
    }

    insertAfterNode(nodeNew, nodeBefore) {
        nodeNew.prev = nodeBefore;
        nodeNew.next = nodeBefore.next;
        if(!nodeBefore.next) {
            this.tail = nodeNew;
        } else {
            nodeBefore.next.prev = nodeNew;
        }
        nodeBefore.next = nodeNew;
    }
    
    resetList() {
        this.head = null;
        this.tail = null;
    }

    removeNode(node) {
        const prev = node.prev;
        const next = node.next;

        if(!!prev) {
            prev.next = next;
        } else {
            this.head = next;
        }

        if(!!next) {
            next.prev = prev;
        } else {
            this.tail = prev;
        }
    }

    swapNodes(node1, node2) {
        const dataNode1 = node1.data
        node1.data = node2.data;
        node2.data = dataNode1;
    }

    size() {
        let length = 0;
        let node = this.head;
        while (!!node) {
            length++;
            node = node.next;
        }

        return length;
    }

    nodeAt(index) {
        let node = this.head;
        for (let i = 0; i < index; i++) {
            if(node == null) return;
            node = node.next;
        }

        return node;
    }

    dumpList() {
        let node = this.head;
        let listDump = (!!node) ? `Data: ${node.data}, prev: ${(node.prev) ? node.prev.data : ""}, next: ${(node.next) ? node.next.data : ""}\n` : "Nothing to see here!" 
        while(!!node) {
            if (node != this.head) {
                listDump += `Data: ${node.data}, prev: ${(node.prev) ? node.prev.data : ""}, next: ${(node.next) ? node.next.data : ""}\n`
            }
            node = node.next;
        }
        console.log(listDump);
    }
}

class Node {
    prev = null;
    next = null;
    data;

    constructor(data) {
        this.data = data;
    }
}