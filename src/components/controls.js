export function getControls() {
  return {
    generateButton: document.querySelector("#generate-btn"),
    startButton: document.querySelector("#start-btn"),
    pauseButton: document.querySelector("#pause-btn"),
    resetButton: document.querySelector("#reset-btn"),

    algorithmSelect: document.querySelector("#algorithm-select"),

    speedSlider: document.querySelector("#speed-slider"),

    speedValue: document.querySelector("#speed-value"),
  };
}
