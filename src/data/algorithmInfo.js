export const algorithmInfo = {
  bubble: {
    name: "Bubble Sort",
    kind: "sorting",
    description:
      "Repeatedly compares adjacent values and swaps them when they are out of order.",
    complexity: [
      "Best",
      "O(n)",
      "Average",
      "O(n²)",
      "Worst",
      "O(n²)",
      "Space",
      "O(1)",
    ],
    pseudocode:
      "repeat for each pass\n  compare adjacent values\n  swap if left > right\nuntil no values are out of order",
  },
  selection: {
    name: "Selection Sort",
    kind: "sorting",
    description:
      "Selects the smallest value from the unsorted portion and moves it into place.",
    complexity: [
      "Best",
      "O(n²)",
      "Average",
      "O(n²)",
      "Worst",
      "O(n²)",
      "Space",
      "O(1)",
    ],
    pseudocode:
      "for each position\n  find minimum remaining value\n  swap it into this position",
  },
  insertion: {
    name: "Insertion Sort",
    kind: "sorting",
    description:
      "Builds a sorted section one value at a time by inserting each new value in the correct place.",
    complexity: [
      "Best",
      "O(n)",
      "Average",
      "O(n²)",
      "Worst",
      "O(n²)",
      "Space",
      "O(1)",
    ],
    pseudocode:
      "for each unsorted value\n  shift larger values right\n  insert the value in its gap",
  },
  linear: {
    name: "Linear Search",
    kind: "searching",
    description:
      "Checks each value from left to right until it finds the target or reaches the end.",
    complexity: [
      "Best",
      "O(1)",
      "Average",
      "O(n)",
      "Worst",
      "O(n)",
      "Space",
      "O(1)",
    ],
    pseudocode:
      "for each value\n  if value equals target\n    return its index\nreturn not found",
  },
  binary: {
    name: "Binary Search",
    kind: "searching",
    description:
      "On a sorted array, repeatedly discards half of the remaining search range.",
    complexity: [
      "Best",
      "O(1)",
      "Average",
      "O(log n)",
      "Worst",
      "O(log n)",
      "Space",
      "O(1)",
    ],
    pseudocode:
      "while low <= high\n  inspect middle value\n  keep only the half that can contain target",
  },
  stack: {
    name: "Stack",
    kind: "structure",
    description:
      "A last-in, first-out (LIFO) structure. Values are added and removed from the top.",
    complexity: [
      "Push",
      "O(1)",
      "Pop",
      "O(1)",
      "Peek",
      "O(1)",
      "Space",
      "O(n)",
    ],
    pseudocode: "push: add to top\npop: remove top\npeek: inspect top",
  },
  queue: {
    name: "Queue",
    kind: "structure",
    description:
      "A first-in, first-out (FIFO) structure. Values join the rear and leave from the front.",
    complexity: [
      "Enqueue",
      "O(1)",
      "Dequeue",
      "O(1)",
      "Front",
      "O(1)",
      "Space",
      "O(n)",
    ],
    pseudocode:
      "enqueue: add to rear\ndequeue: remove front\nfront: inspect first value",
  },
};

export const options = Object.entries(algorithmInfo).map(([value, info]) => ({
  value,
  label: info.name,
}));
