// implementing the selection sort: Find the smallest remaining value and put it in the next position
export function selectionSort(array) {
  const values = [...array];
  const steps = [];

  for (let i = 0; i < values.length - 1; i += 1) {
    // assume the first unsorted element is the smallest
    let minimumIndex = i;

    // search the remaining elements
    for (let j = i + 1; j < values.length; j += 1) {
      steps.push({
        type: "compare",
        indices: [minimumIndex, j],
      });

      // if a smaller element is found, it becomes the new minimum index
      if (values[j] < values[minimumIndex]) {
        minimumIndex = j;

        steps.push({
          type: "minimum",
          index: minimumIndex,
        });
      }
    }

    if (minimumIndex !== i) {
      [values[i], values[minimumIndex]] = [values[minimumIndex], values[i]];

      steps.push({
        type: "swap",
        indices: [i, minimumIndex],
        values: [...values],
      });
    }
  }

  steps.push({
    type: "complete",
    values: [...values],
  });

  return {
    sortedArray: values,
    steps,
  };
}
