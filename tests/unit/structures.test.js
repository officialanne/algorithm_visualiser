import { expect, it } from "vitest";
import { Queue } from "../../src/algorithms/dataStructures/queue.js";
import { Stack } from "../../src/algorithms/dataStructures/stack.js";

it("implements LIFO stack operations", () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  expect(stack.peek()).toBe(2);
  expect(stack.pop()).toBe(2);
  expect(stack.toArray()).toEqual([1]);
});
it("implements FIFO queue operations", () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  expect(queue.front()).toBe(1);
  expect(queue.dequeue()).toBe(1);
  expect(queue.toArray()).toEqual([2]);
});
