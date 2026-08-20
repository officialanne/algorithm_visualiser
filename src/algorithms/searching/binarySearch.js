export function binarySearch(array, target) {
  const steps = [];

  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    // calculates the middle index, which needs to be a whole number so is rounded down
    const middle = Math.floor((low + high) / 2);

    steps.push({
      type: "check",
      indices: [low, middle, high],
    });

    if (array[middle] === target) {
      steps.push({
        type: "found",
        index: middle,
      });

      return {
        index: middle,
        steps,
      };
    }

    if (array[middle] < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }

  steps.push({
    type: "notFound",
  });

  return {
    index: -1,
    steps,
  };
}