class Stack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
  }

  pop() {
    if (this.data.length === 0) return "Oops, the stack is empty!";
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.data.length === 0;
  }

  // Find out how many items are in the stack
  size() {
    return;
  }
}

module.exports = { Stack };
