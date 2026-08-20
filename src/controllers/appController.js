import { binarySearch } from "../algorithms/searching/binarySearch.js";
import { linearSearch } from "../algorithms/searching/linearSearch.js";
import { bubbleSort } from "../algorithms/sorting/bubbleSort.js";
import { insertionSort } from "../algorithms/sorting/insertionSort.js";
import { selectionSort } from "../algorithms/sorting/selectionSort.js";
import { Queue } from "../algorithms/dataStructures/queue.js";
import { Stack } from "../algorithms/dataStructures/stack.js";
import { algorithmInfo } from "../data/algorithmInfo.js";
import { createAnimationController } from "../visualization/animationController.js";
import { renderArray } from "../visualization/arrayVisualizer.js";
import { renderStructure } from "../visualization/structureVisualizer.js";

const algorithms = {
  bubble: bubbleSort,
  selection: selectionSort,
  insertion: insertionSort,
  linear: linearSearch,
  binary: binarySearch,
};
const descriptionFor = (step) =>
  ({
    compare: `Comparing indices ${step.indices.join(" and ")}.`,
    swap: `Swapping indices ${step.indices.join(" and ")}.`,
    sorted: `Index ${step.indices[0]} is in its final position.`,
    minimum: `A new minimum was found at index ${step.indices[0]}.`,
    select: `Selecting value at index ${step.indices[0]}.`,
    shift: `Shifting values at indices ${step.indices.join(" and ")}.`,
    insert: `Inserting at index ${step.indices[0]}.`,
    check: `Checking index${step.indices.length > 1 ? "es" : ""} ${step.indices.join(", ")}.`,
    found: `Target found at index ${step.indices[0]}.`,
    notFound: "Target is not in this array.",
    complete: "Complete. The algorithm has finished.",
  })[step.type] || "Processing step.";

export function createAppController({ elements, state }) {
  let animation = null;
  let structure = null;
  const info = () => algorithmInfo[state.algorithm];
  const isStructure = () => info().kind === "structure";
  const delay = () => 1100 - state.speed * 100;
  function status(message) {
    elements.status.textContent = message;
  }
  function render(values = state.values, visualState = {}) {
    renderArray(elements.container, values, visualState);
  }
  function setButtons(running) {
    elements.generate.disabled = running;
    elements.start.disabled = running;
    elements.algorithm.disabled = running;
    elements.size.disabled = running;
    elements.target.disabled = running;
    elements.pause.disabled = !running;
    elements.step.disabled = !running;
  }
  function updateMode() {
    const structureMode = isStructure();
    elements.arrayOnly.forEach((element) => {
      element.hidden = structureMode;
    });
    elements.actions.hidden = structureMode;
    elements.structureForm.hidden = !structureMode;
    elements.stageTitle.textContent = structureMode
      ? `${info().name} simulator`
      : "Visualization";
    if (structureMode) {
      structure = state.algorithm === "stack" ? new Stack() : new Queue();
      renderStructure(elements.container, [], state.algorithm);
      status(`Ready to use the ${info().name.toLowerCase()}.`);
    } else render();
  }
  function updateInfo() {
    const current = info();
    elements.infoTitle.textContent = current.name;
    elements.description.textContent = current.description;
    elements.pseudocode.textContent = current.pseudocode;
    elements.complexity.innerHTML = current.complexity
      .map((item, index) =>
        index % 2 === 0 ? `<dt>${item}</dt>` : `<dd>${item}</dd>`,
      )
      .join("");
  }
  function changeAlgorithm() {
    if (state.running) return;
    state.algorithm = elements.algorithm.value;
    updateInfo();
    updateMode();
  }
  function generate() {
    if (state.running) return;
    state.values = elements.makeArray(Number(elements.size.value));
    state.originalValues = [...state.values];
    render();
    status("New array generated. Press Start to visualize it.");
  }
  async function start() {
    if (state.running || isStructure()) return;
    state.running = true;
    animation = createAnimationController();
    setButtons(true);
    let result;
    const values =
      state.algorithm === "binary"
        ? [...state.values].sort((a, b) => a - b)
        : state.values;
    if (state.algorithm === "binary") {
      state.values = values;
      render(values);
    }
    result = ["linear", "binary"].includes(state.algorithm)
      ? algorithms[state.algorithm](values, Number(elements.target.value))
      : algorithms[state.algorithm](values);
    for (const step of result.steps) {
      if (!(await animation.beforeStep(delay()))) break;
      const visualState = {
        comparing: ["compare", "check", "minimum", "select", "insert"].includes(
          step.type,
        )
          ? step.indices
          : [],
        swapping: ["swap", "shift"].includes(step.type) ? step.indices : [],
        found: step.type === "found" ? step.indices : [],
        sorted:
          step.type === "complete"
            ? step.values.map((_, index) => index)
            : step.type === "sorted"
              ? step.indices
              : [],
      };
      render(step.values, visualState);
      status(descriptionFor(step));
    }
    state.values = result.sortedArray || result.values || state.values;
    state.running = false;
    animation = null;
    setButtons(false);
  }
  function pause() {
    if (!animation) return;
    if (animation.paused) {
      animation.play();
      elements.pause.textContent = "Pause";
      status("Animation resumed.");
    } else {
      animation.pause();
      elements.pause.textContent = "Resume";
      status("Animation paused. Use Step to advance one operation.");
    }
  }
  function step() {
    animation?.step();
    status("Advancing one operation.");
  }
  function reset() {
    animation?.reset();
    animation = null;
    state.running = false;
    elements.pause.textContent = "Pause";
    setButtons(false);
    if (!isStructure()) {
      state.values = [...state.originalValues];
      render();
      status("Reset to the original array.");
    }
  }
  function structureAction(action) {
    const value = Number(elements.structureInput.value);
    if (action === "add") {
      if (!Number.isFinite(value)) return;
      state.algorithm === "stack"
        ? structure.push(value)
        : structure.enqueue(value);
      status(
        `${value} added to the ${state.algorithm === "stack" ? "top" : "rear"}.`,
      );
    }
    if (action === "remove") {
      const removed =
        state.algorithm === "stack" ? structure.pop() : structure.dequeue();
      status(
        removed === undefined
          ? "The structure is empty."
          : `${removed} removed.`,
      );
    }
    if (action === "peek") {
      const valueAtEdge =
        state.algorithm === "stack" ? structure.peek() : structure.front();
      status(
        valueAtEdge === undefined
          ? "The structure is empty."
          : `Current ${state.algorithm === "stack" ? "top" : "front"}: ${valueAtEdge}.`,
      );
    }
    if (action === "clear") {
      structure.clear();
      status("The structure was cleared.");
    }
    renderStructure(elements.container, structure.toArray(), state.algorithm);
  }
  elements.generate.addEventListener("click", generate);
  elements.start.addEventListener("click", start);
  elements.pause.addEventListener("click", pause);
  elements.step.addEventListener("click", step);
  elements.reset.addEventListener("click", reset);
  elements.algorithm.addEventListener("change", changeAlgorithm);
  elements.size.addEventListener("input", () => {
    elements.sizeValue.textContent = elements.size.value;
  });
  elements.speed.addEventListener("input", () => {
    state.speed = Number(elements.speed.value);
    elements.speedValue.textContent = state.speed;
  });
  elements.structureForm.addEventListener("submit", (event) => {
    event.preventDefault();
    structureAction("add");
  });
  elements.remove.addEventListener("click", () => structureAction("remove"));
  elements.peek.addEventListener("click", () => structureAction("peek"));
  elements.clear.addEventListener("click", () => structureAction("clear"));
  updateInfo();
  updateMode();
  return { generate };
}
