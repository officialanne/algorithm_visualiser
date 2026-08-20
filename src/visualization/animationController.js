import { sleep } from "../utils/sleep.js";

export function createAnimationController() {
  let paused = false;
  let stepRequested = false;
  let cancelled = false;
  let resume;
  const waitForResume = () =>
    new Promise((resolve) => {
      resume = resolve;
    });
  return {
    async beforeStep(delay) {
      while (paused && !cancelled) {
        await waitForResume();
        if (stepRequested) {
          stepRequested = false;
          paused = true;
          break;
        }
      }
      if (!cancelled) await sleep(delay);
      return !cancelled;
    },
    pause() {
      paused = true;
    },
    play() {
      paused = false;
      resume?.();
    },
    step() {
      stepRequested = true;
      resume?.();
    },
    reset() {
      cancelled = true;
      paused = false;
      resume?.();
    },
    get paused() {
      return paused;
    },
  };
}
