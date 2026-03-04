import LinkedList from "./modules/linkedList";

const emptyList = new LinkedList();

test("append should add a node to the linked list", () => {
  const list = new LinkedList(15);
  expect(list.head.data).toBe(15);
  expect(list.tail.data).toBe(15);
});

test("adding 3 elements", () => {
  const list = new LinkedList(15, 20, 25);
  expect(list.head.next.next.data).toBe(25);
});

test("prepend should add a node to the start of the list", () => {
  const list = new LinkedList(52, 25);
  list.prepend(17);
  expect(list.head.data).toBe(17);
});

test("size() should return the total numbers of nodes in the list", () => {
  const list = new LinkedList(101, 24, 82, 11);
  expect(list.size()).toBe(4);
});

test("getHead() should return the head of the list", () => {
  const list = new LinkedList(77, 23, 11, 43);
  expect(list.getHead()).toBe(77);
  expect(emptyList.getHead()).toBe(undefined);
});

test("getTail() should return the tail of the list", () => {
  const list = new LinkedList(237, 15);
  expect(list.getTail()).toBe(15);
  expect(emptyList.getTail()).toBe(undefined);
});

test("at(index) should return the element at the index that was passed in", () => {
  const list = new LinkedList(34, 25, 43, 22);
  expect(list.at(2)).toBe(43);
  expect(list.at(3)).toBe(22);
  expect(list.at(0)).toBe(34);
  expect(list.at(5)).toBe(undefined);
});

test("pop() should remove the head node from the list and return its value. If it’s used on an empty list, it should just return undefined", () => {
  const list = new LinkedList(43, 32, 11);
  expect(list.pop()).toBe(43);
  expect(emptyList.pop()).toBe(undefined);
});

test("contains(value) returns true if the passed in value is in the list and otherwise returns false", () => {
  const list = new LinkedList(54, 27, 28, "gg");
  expect(list.contains(54)).toBe(true);
  expect(list.contains("gg")).toBe(true);
  expect(list.contains(0)).toBe(false);
});

test("findIndex(value) returns the index of the node containing the given value. If the value can’t be found in the list, it should return -1", () => {
  const list = new LinkedList(55, 54, 27);
  expect(list.findIndex(55)).toBe(0);
  expect(list.findIndex(1111)).toBe(-1);
});

test("toString() represents the LinkedList objects as strings", () => {
  const list = new LinkedList(11);
  expect(list.toString()).toBe("( 11 ) -> null");
  const list2 = new LinkedList(522, 42, 33);
  expect(list2.toString()).toBe("( 522 ) -> ( 42 ) -> ( 33 ) -> null");

  expect(emptyList.toString()).toBe("");
});

test("insertAt(index, ...values) should insert new nodes with the given values at the given index", () => {
  const list = new LinkedList(224, 512, 42);
  list.insertAt(2, 15, 16);
  expect(list.head.next.next.data).toBe(15);
  expect(list.head.next.next.next.data).toBe(16);
  expect(list.head.data).toBe(224);
  expect(list.tail.data).toBe(42);
  expect(list.size()).toBe(5);
});

test("removeAt(index) that removes the node at the given index", () => {
  const list = new LinkedList(1, 2, 3, 4);
  list.removeAt(2);
  expect(list.head.next.next.data).toBe(4);
  expect(list.head.next.data).toBe(2);
  expect(list.size()).toBe(3);

  list.removeAt(0);
  expect(list.size()).toBe(2);
  expect(list.head.data).toBe(2);
  expect(list.tail.data).toBe(4);

  expect(() => {
    list.removeAt(-4);
  }).toThrow(RangeError);
});
