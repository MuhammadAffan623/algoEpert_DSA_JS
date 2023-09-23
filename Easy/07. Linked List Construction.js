class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.next = node;
    nodeToInsert.prev = node.prev;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.next = node.next;
    nodeToInsert.prev = node;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    let node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition < position) {
      node = node.next;
      currentPosition += 1;
    }
    if (node === null) {
      this.setTail(nodeToInsert);
    } else {
      this.insertBefore(node, nodeToInsert);
    }
  }

  removeNodeBindings(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.next = null;
    node.prev = null;
  }

  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      let nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value) {
    let node = this.head;
    console.log(`first node : value`, node.value);
    while (node !== null && node.value !== value) {
      console.log(`goes for second node`, node.value);
      node = node.next;
    }
    return node !== null;
  }

  allElementValues() {
    let values =[]
    let node = this.head;
    while (node && node.value) {
      values.push(node.value)
      node = node.next;
    }
    return values
  }
}
const doublyLinkedList = new DoublyLinkedList();

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);

doublyLinkedList.setHead(node1); // Doubly linked list: 1
doublyLinkedList.insertAfter(node1, node2); // Doubly linked list: 1 <-> 2
doublyLinkedList.insertAfter(node2, node3);
doublyLinkedList.insertAfter(node3, node4);
doublyLinkedList.insertAfter(node4, node5);  // 1 <-> 2 <-> 3 <-> 4 <-> 5

console.log("linklist values : ", doublyLinkedList.allElementValues());
doublyLinkedList.removeNodesWithValue(2);  // Remove nodes with value 2
console.log("linklist values after removing 2 with value method: ", doublyLinkedList.allElementValues());
doublyLinkedList.insertAtPosition(2,new Node(2))
console.log("after inseting node 2 at position 2: ",doublyLinkedList.allElementValues());

