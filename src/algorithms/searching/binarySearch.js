export function binarySearch(array, target) {
  const values = [...array].sort((a, b) => a - b);
  const steps = [];
  let low = 0;
  let high = values.length - 1;
  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    steps.push({
      type: "check",
      indices: [low, middle, high],
      values: [...values],
      low,
      middle,
      high,
    });
    if (values[middle] === target) {
      steps.push({ type: "found", indices: [middle], values: [...values] });
      return { index: middle, values, steps };
    }
    if (values[middle] < target) low = middle + 1;
    else high = middle - 1;
  }
  steps.push({ type: "notFound", values });
  return { index: -1, values, steps };
}
