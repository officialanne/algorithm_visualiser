// creates a class (a blueprint for creating objects iwth data + behaviour) - modelling the Stack abstration
export class Stack {
  constructor() {
    this.items = [];
  }

  // adds an item to the top of the stack
  push(value) {
    this.items.push(value);
  }

  // removes the last item from the stack
  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
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
