import { renderArray } from "./arrayVisualizer.js";

// perfoming asynchronous work and using a 300ms delay
// allows polymorphism through the algorithm parameter
export async function visualizeSorting(
  container,
  values,
  algorithm,
  delay = 300,
) {
  const result = algorithm(values);

  renderArray(container, values);

  for (const step of result.steps) {
    if (step.type === "compare") {
      renderArray(container, step.values, {
        comparing: step.indices,
      });

      // pause the function for 300ms until wait() has finished, and the browser remains responsive
      await wait(delay);
    }

    if (step.type === "swap") {
      renderArray(container, step.values, {
        swapping: step.indices,
      });

      await wait(delay);
    }

    if (step.type === "minimum") {
      renderArray(container, step.values, {
        comparing: [step.index],
      });

      await wait(delay);
    }

    if (step.type === "shift") {
      renderArray(container, step.values, {
        swapping: step.indices,
      });

      await wait(delay);
    }

    if (step.type === "insert") {
      renderArray(container, step.values, {
        comparing: [step.index],
      });

      await wait(delay);
    }

    if (step.type === "complete") {
      renderArray(container, step.values, {
        sorted: step.values.map((_, index) => index),
      });
    }
  }

  return result;
}

function wait(milliseconds) {
  // create a promise, wait for a setTimeout, resolve hte promise, await continues
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}
