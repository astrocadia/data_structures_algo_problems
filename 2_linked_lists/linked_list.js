class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  add(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
    } else {
      let current = this.first;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  printList() {
    let current = this.first;
    console.log(current.value);
    while (current.next) {
      current = current.next;
      console.log(current.value);
    }
  }
}

module.exports = { LinkedList };
