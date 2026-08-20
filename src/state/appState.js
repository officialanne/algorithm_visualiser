export function createAppState(values) {
  return {
    values,
    originalValues: [...values],
    algorithm: "bubble",
    speed: 5,
    running: false,
    paused: false,
    theme: localStorage.getItem("algorithm-visualizer-theme") || "light",
  };
}
