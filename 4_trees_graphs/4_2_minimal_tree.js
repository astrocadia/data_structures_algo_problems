const { inOrderTraversal } = require("./tree.js");

class Node {
  constructor(value, children = [null, null]) {
    this.value = value;
    this.children = children;
  }
}

const array = [2, 5, 6, 7, 10, 14, 18, 21, 45, 299, 1000, 5838];

function minTree(arr) {
  if (arr.length === 0) {
    return null;
  }
  const mid = Math.floor(arr.length / 2);
  const n = new Node(arr[mid]);
  n.children[0] = minTree(arr.slice(0, mid));
  n.children[1] = minTree(arr.slice(mid + 1, arr.length));

  return n;
}

inOrderTraversal(minTree(array));
