class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  display() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(result.join(' -> '));
  }

  removeByData(data) {
    if (this.head.value === data) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.value !== data) {
      currentNode = currentNode.next;
    }
    if (currentNode) {
      currentNode.next = currentNode.next.next;
    }
  }
}

const LL = new LinkedList();
LL.append(2);
LL.prepend(3);
LL.removeByData(2);
LL.prepend(4);
LL.append(5);
LL.display();
