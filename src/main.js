import "./styles/main.css";
import { createAppController } from "./controllers/appController.js";
import { options } from "./data/algorithmInfo.js";
import { createAppState } from "./state/appState.js";
import { generateRandomArray } from "./utils/generateRandomArray.js";

const $ = (selector) => document.querySelector(selector);
const select = $("#algorithm-select");
select.innerHTML = options
  .map(({ value, label }) => `<option value="${value}">${label}</option>`)
  .join("");
const state = createAppState(generateRandomArray());
const elements = {
  container: $("#array-container"),
  algorithm: select,
  generate: $("#generate-btn"),
  start: $("#start-btn"),
  pause: $("#pause-btn"),
  step: $("#step-btn"),
  reset: $("#reset-btn"),
  size: $("#array-size"),
  sizeValue: $("#array-size-value"),
  target: $("#target-input"),
  speed: $("#speed-slider"),
  speedValue: $("#speed-value"),
  status: $("#status-message"),
  stageTitle: $("#visualizer-title"),
  infoTitle: $("#info-title"),
  description: $("#description"),
  pseudocode: $("#pseudocode"),
  complexity: $("#complexity"),
  arrayOnly: document.querySelectorAll(".array-only"),
  actions: $(".actions"),
  structureForm: $("#structure-form"),
  structureInput: $("#structure-input"),
  remove: $("#remove-btn"),
  peek: $("#peek-btn"),
  clear: $("#clear-btn"),
  makeArray: generateRandomArray,
};
const themeButton = $("#theme-toggle");
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.setAttribute("aria-pressed", theme === "dark");
  themeButton.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  localStorage.setItem("algorithm-visualizer-theme", theme);
}
setTheme(state.theme);
themeButton.addEventListener("click", () =>
  setTheme(
    document.documentElement.dataset.theme === "dark" ? "light" : "dark",
  ),
);
createAppController({ elements, state });
