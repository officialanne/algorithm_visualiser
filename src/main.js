import "./styles/main.css";

import { bubbleSort } from "./algorithms/sorting/bubbleSort.js";
import { selectionSort } from "./algorithms/sorting/selectionSort.js";
import { insertionSort } from "./algorithms/sorting/insertionSort.js";
import { visualizeSorting } from "./visualization/sortingVisualizer.js";

// finds div elements with the specified id
const arrayContainer = document.querySelector("#array-container");

// create an example array
const values = [5, 2, 8, 1, 4];

// bybble sort test
/*
visualizeSorting(
  arrayContainer,
  values,
  bubbleSort,
  500,
);
*/

// selection sort test

visualizeSorting(arrayContainer, values, selectionSort, 500);

// insertion sort test
/*
visualizeSorting(
  arrayContainer,
  values,
  insertionSort,
  500,
);
*/
