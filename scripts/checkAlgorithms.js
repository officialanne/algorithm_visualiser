// checking that the algorithm modules work before building the visual interface

// import the modules
import { bubbleSort } from "../src/algorithms/sorting/bubbleSort.js";
import { selectionSort } from "../src/algorithms/sorting/selectionSort.js";
import { insertionSort } from "../src/algorithms/sorting/insertionSort.js";

import { linearSearch } from "../src/algorithms/searching/linearSearch.js";
import { binarySearch } from "../src/algorithms/searching/binarySearch.js";

import { Stack } from "../src/algorithms/dataStructures/stack.js";
import { Queue } from "../src/algorithms/dataStructures/queue.js";

const array = [5, 2, 8, 1, 4];

// run the modules and print their resuls
console.log("Bubble Sort:", bubbleSort(array));
console.log("Selection Sort:", selectionSort(array));
console.log("Insertion Sort:", insertionSort(array));

console.log("Linear Search:", linearSearch(array, 8));

const sortedArray = [1, 2, 4, 5, 8];

console.log("Binary Search:", binarySearch(sortedArray, 5));

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack:", stack.toArray());
console.log("Stack pop:", stack.pop());
console.log("Stack:", stack.toArray());

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue:", queue.toArray());
console.log("Queue dequeue:", queue.dequeue());
console.log("Queue:", queue.toArray());
