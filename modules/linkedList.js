import Node from "./node.js";

export default class LinkedList {
  constructor(...nodes) {
    this.head = null;
    this.tail = null;
    if (nodes.length > 0) {
      this.append(...nodes);
    }
  }

  append(...nodes) {
    nodes.forEach((data) => {
      const node = new Node(data);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
      }

      this.tail = node;
    });
  }

  prepend(...nodes) {
    nodes.forEach((data) => {
      const node = new Node(data);
      let temp = this.head;
      node.next = temp;
      this.head = node;
    });
  }

  size() {
    let cnt = 0;
    let node = this.head;
    while (node !== null) {
      cnt++;
      node = node.next;
    }
    return cnt;
  }

  getHead() {
    if (this.head === null) return undefined;
    return this.head.data;
  }

  getTail() {
    if (this.tail === null) return undefined;
    return this.tail.data;
  }

  at(index) {
    let cnt = 0;
    let node = this.head;
    while (cnt < index) {
      if (node === null) return undefined;
      cnt++;
      node = node.next;
    }
    return node.data;
  }

  pop() {
    if (this.head === null) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }

  contains(value) {
    let node = this.head;
    while (node !== null) {
      if (node.data === value) return true;
      node = node.next;
    }
    return false;
  }

  findIndex(value) {
    let index = 0;
    let node = this.head;
    while (node !== null) {
      if (node.data === value) return index;
      node = node.next;
      index++;
    }
    return -1;
  }

  toString(node = this.head) {
    let string = "";
    if (this.head === null) return string;

    if (node === null) return "null";
    string += `( ${node.data} ) -> `;
    string += this.toString(node.next);

    return string;
  }

  __getEnd() {
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }

  insertAt(index, ...values) {
    if (index < 0) {
      throw new RangeError("Wrong index");
    }
    if (index === 0) {
      this.prepend(...values);
      return;
    }

    let node = this.head;
    let cnt = 0;
    while (cnt < index - 1) {
      cnt++;
      node = node.next;
      if (node === null) {
        throw new RangeError("Wrong index");
      }
    }

    const beforeNode = node;
    const afterNode = node.next;
    let current = beforeNode;
    values.forEach((val) => {
      const newNode = new Node(val);
      current.next = newNode;
      current = newNode;
    });

    current.next = afterNode;

    if (afterNode === null) {
      this.tail = current;
    }
  }

  removeAt(index) {
    if (index < 0) {
      throw new RangeError("Wrong index");
    }
    if (index === 0) {
      this.pop();
      return;
    }

    let cnt = 0;
    let node = this.head;
    while (cnt < index - 1) {
      node = node.next;
      cnt++;
      if (node === null) {
        throw new RangeError("Wrong index");
      }
    }

    let beforeNode = node;
    let afterNode = node.next.next;
    beforeNode.next = afterNode;
  }
}
