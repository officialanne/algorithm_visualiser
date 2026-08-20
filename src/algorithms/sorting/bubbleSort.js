// using export allows another JavaScript file to import and use this function
export function bubbleSort(array) {
  // copy the values using spread syntax to mutate the original data
  const values = [...array];

  // create an empty array to store what happens at each step, separating logic from visualisation
  const steps = [];

  // an outer loop to iterate through the array, excluding the last item
  for (let i = 0; i < values.length - 1; i += 1) {
    // an inner loop to compare neighbouring elements
    for (let j = 0; j < values.length - 1 - i; j += 1) {
      // record the comparison to the list of algorithm events
      steps.push({
        type: "compare",
        indices: [j, j + 1],
        values: [...values],
      });

      // swap if the left value is greater than the right value
      if (values[j] > values[j + 1]) {
        // using JS array destructuring assignment without a temp variable
        [values[j], values[j + 1]] = [values[j + 1], values[j]];

        // record the swap, including a copy of what the array now looks like
        steps.push({
          type: "swap",
          indices: [j, j + 1],
          values: [...values],
        });
      }
    }
  }

  // record the completion of the algorithm
  steps.push({
    type: "complete",
    values: [...values],
  });

  // return the result
  return {
    sortedArray: values,
    steps,
  };
}
