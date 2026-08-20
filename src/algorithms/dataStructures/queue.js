export class Queue {
  constructor() {
    this.items = [];
  }

  // add an item to the end of the queue
  enqueue(value) {
    this.items.push(value);
  }

  // remove an item from the front of the queue
  dequeue() {
    // using shift to move hte remaining array elements
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toArray() {
    return [...this.items];
  }
}
