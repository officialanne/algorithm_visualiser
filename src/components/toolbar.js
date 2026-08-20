export function createToolbar() {
  return `
    <div class="toolbar__row">

      <button id="generate-btn" type="button">
        Generate
      </button>

      <button id="start-btn" type="button">
        Start
      </button>

      <button id="pause-btn" type="button" disabled>
        Pause
      </button>

      <button id="reset-btn" type="button">
        Reset
      </button>

    </div>

    <div class="toolbar__row">

      <label for="algorithm-select">
        Algorithm

        <select id="algorithm-select">

          <option value="bubble">
            Bubble Sort
          </option>

          <option value="selection">
            Selection Sort
          </option>

          <option value="insertion">
            Insertion Sort
          </option>

        </select>
      </label>

      <label for="speed-slider">
        Speed

        <input
          id="speed-slider"
          type="range"
          min="1"
          max="10"
          step="1"
          value="5"
        >
        
        <span id="speed-value">5</span>

      </label>

    </div>
  `;
}
