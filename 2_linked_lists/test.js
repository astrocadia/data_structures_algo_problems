const { LinkedList } = require("./linked_list");

function removeDups(node) {
  let n = node;
  const node_values = new Set();
  while (n != null) {
    node_values.add(n.value);
    if (node_values.has(n.next?.value)) {
      n.next = n.next?.next;
    } else {
      n = n.next;
    }
  }
}

const list = new LinkedList();

list.add("1");
list.add("19");
list.add("8");
list.add("19");
list.add("3");
list.add("3");
list.add("3");
list.add("4");
list.add("3");
list.add("4");
list.add("10");

list.printList();
removeDups(list.first);
console.log("next");
list.printList();
