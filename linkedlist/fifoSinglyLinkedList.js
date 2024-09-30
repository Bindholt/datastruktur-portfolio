export default class SinglyLinkedList {
    head = null;
    tail = null;

    constructor(nodes){
        if(!!nodes) {
            nodes.forEach(node => {
                this.add(node);
            });
        }
    }

    add(data) {
        const node = new Node(data, null);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    getFirstNode() {
        return this.head;
    }

    getNextNode(node) {
        return node.next;
    }

    setFirstNode(node) {
        this.head = node;
    }

    removeFirstNode() {
        if(!!this.head) {
            this.head = this.head.next;
        }
    }

    getLastNode() {
        return this.tail;
    }

    size() {
        let current = this.head;
        let count = 0;
        
        while(!!current) {
            count++;
            current = current.next;
        }
        return count;
    }

    clear() {
        this.head = null;
    }


    dumpList(){
        if(this.head) {
            let current = this.head;
            while(current) {
                console.log(current.data);
                current = current.next;
            }
        }
    }
}

class Node {
    next = null;
    data = null;

    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}