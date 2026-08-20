import "./styles/main.css";

import { createToolbar } from "./components/toolbar.js";
import { getControls } from "./components/controls.js";
import { createAppController } from "./controllers/appController.js";

// finds div elements with the specified id and show the controls
const toolbar = document.querySelector("#toolbar");
toolbar.innerHTML = createToolbar();

const controls = getControls();

createAppController({
  container: document.querySelector("#array-container"),
  controls,
});
