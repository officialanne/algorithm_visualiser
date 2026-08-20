import { generateRandomArray } from "../utils/generateRandomArray.js";

import { renderArray } from "../visualization/arrayVisualizer.js";
import { visualizeSorting } from "../visualization/sortingVisualizer.js";

import { bubbleSort } from "../algorithms/sorting/bubbleSort.js";
import { selectionSort } from "../algorithms/sorting/selectionSort.js";
import { insertionSort } from "../algorithms/sorting/insertionSort.js";

const algorithms = {
  bubble: bubbleSort,
  selection: selectionSort,
  insertion: insertionSort,
};

export function createAppController({ container, controls }) {
  const state = {
    values: generateRandomArray(),
    algorithm: "bubble",
    speed: 5,
    running: false,
  };

  function render() {
    renderArray(container, state.values);
  }

  function generate() {
    if (state.running) {
      return;
    }

    state.values = generateRandomArray();

    render();
  }

  function changeAlgorithm(event) {
    if (state.running) {
      return;
    }

    state.algorithm = event.target.value;
  }

  function changeSpeed(event) {
    state.speed = Number(event.target.value);
    controls.speedValue.textContent = state.speed;
  }

  async function start() {
    if (state.running) {
      return;
    }

    state.running = true;

    setControlsDisabled(true);

    const algorithm = algorithms[state.algorithm];

    const delay = speedToDelay(state.speed);

    await visualizeSorting(container, state.values, algorithm, delay);

    state.running = false;

    setControlsDisabled(false);
  }

  function reset() {
    if (state.running) {
      return;
    }

    render();
  }

  function setControlsDisabled(disabled) {
    controls.generateButton.disabled = disabled;
    controls.startButton.disabled = disabled;
    controls.resetButton.disabled = disabled;
    controls.algorithmSelect.disabled = disabled;
    controls.speedSlider.disabled = disabled;
  }

  controls.generateButton.addEventListener("click", generate);

  controls.startButton.addEventListener("click", start);

  controls.resetButton.addEventListener("click", reset);

  controls.algorithmSelect.addEventListener("change", changeAlgorithm);

  controls.speedSlider.addEventListener("input", changeSpeed);

  render();

  return {
    state,
  };
}

function speedToDelay(speed) {
  return 1050 - speed * 100;
}
