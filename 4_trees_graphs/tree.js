const { myQueue } = require("../3_stacks_and_queues/3_4_queue_via_stacks");

class Node {
  constructor(value, children = [null, null]) {
    this.value = value;
    this.children = children;
    this.visited = false;
  }
}

const n1 = new Node(1, [null, null]);
const n3 = new Node(3);
const n2 = new Node(2, [n1, n3]);
const n5 = new Node(5);
const n7 = new Node(7);
const n6 = new Node(6, [n5, n7]);
const n4 = new Node(4, [n2, n6]);
const n11 = new Node(11);
const n12 = new Node(12);
const n13 = new Node(13, [n12, n5, n7]);
n1.children = [n11];
n3.children = [n11];
n5.children = [n6];
n7.children = [n6, n13];
n11.children = [n1, n3];
n12.children = [n11, n3, n5, n13];

function inOrderTraversal(node) {
  if (node != null) {
    inOrderTraversal(node.children[0]);
    console.log(node.value);
    inOrderTraversal(node.children[1]);
  }
}

function preOrderTraversal(node) {
  if (node != null) {
    console.log(node.value);
    preOrderTraversal(node.children[0]);
    preOrderTraversal(node.children[1]);
  }
}

function postOrderTraversal(node) {
  if (node != null) {
    postOrderTraversal(node.children[0]);
    postOrderTraversal(node.children[1]);
    console.log(node.value);
  }
}

function dfSearch(node) {
  if (node === null) {
    return;
  }
  console.log(node.value);
  node.visited = true;
  node.children.forEach((n) => {
    if (n && n.visited === false) {
      dfSearch(n);
    }
  });
}

function bfSearch(node) {
  const q = new myQueue();
  node.visited = true;
  q.add(node);

  while (!q.isEmpty()) {
    nextNode = q.remove();
    console.log(nextNode.value);
    nextNode.children.forEach((n) => {
      if (n && !n.visited) {
        n.visited = true;
        q.add(n);
      }
    });
  }
}

function bfPath(node, node2) {
  const q = new myQueue();
  node.visited = true;

  q.add(node);

  while (!q.isEmpty()) {
    nextNode = q.remove();
    console.log(nextNode.value);
    nextNode.children.forEach((n) => {
      if (n && !n.visited) {
        n.visited = true;
        q.add(n);
      }
    });
    if (node2.visited) {
      console.log("path found");
      break;
    }
  }
}

// bfPath(n4, n12);

module.exports = { inOrderTraversal };
