export function linearSearch(array, target) {
  const steps = [];

  for (let i = 0; i < array.length; i += 1) {
    steps.push({
      type: "check",
      index: i,
    });

    if (array[i] === target) {
      steps.push({
        type: "found",
        index: i,
      });

      return {
        index: i,
        steps,
      };
    }
  }

  steps.push({
    type: "notFound",
  });

  // return -1 as an invalid index if the target is not found
  return {
    index: -1,
    steps,
  };
}