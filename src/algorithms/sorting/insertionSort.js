export function insertionSort(array) {
  const values = [...array];
  const steps = [];

  for (let i = 1; i < values.length; i += 1) {
    const currentValue = values[i];
    let j = i - 1;

    steps.push({
      type: "select",
      index: i,
    });

    // use a while loop to keep shifting while the condition remains true
    while (j >= 0 && values[j] > currentValue) {
      steps.push({
        type: "compare",
        indices: [j, j + 1],
        values: [...values],
      });

      values[j + 1] = values[j];

      steps.push({
        type: "shift",
        indices: [j, j + 1],
        values: [...values],
      });

      j -= 1;
    }

    values[j + 1] = currentValue;

    steps.push({
      type: "insert",
      index: j + 1,
      values: [...values],
    });
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
