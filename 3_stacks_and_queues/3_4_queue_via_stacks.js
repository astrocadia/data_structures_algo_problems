const { Stack } = require("./stack");

class myQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  isEmpty() {
    return this.s1.isEmpty() && this.s2.isEmpty();
  }

  add(value) {
    this.s1.push(value);
  }

  peek() {
    if (this.s2.isEmpty()) {
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.peek();
  }

  remove() {
    if (this.s2.isEmpty()) {
      while (!this.s1.isEmpty()) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }

  print() {
    console.log(this.s1);
    console.log(this.s2);
  }
}

const queue = new myQueue();

module.exports = { myQueue };
