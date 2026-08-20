export function renderArray(container, values, state = {}) {
  container.innerHTML = "";
  const max = Math.max(...values, 1);
  values.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.className = "array-bar";
    bar.style.height = `${Math.max(8, (value / max) * 100)}%`;
    bar.dataset.index = index;
    bar.setAttribute("aria-label", `Index ${index}, value ${value}`);
    if (state.comparing?.includes(index)) bar.classList.add("is-comparing");
    if (state.swapping?.includes(index)) bar.classList.add("is-swapping");
    if (state.sorted?.includes(index)) bar.classList.add("is-sorted");
    if (state.found?.includes(index)) bar.classList.add("is-found");
    const label = document.createElement("span");
    label.textContent = value;
    bar.append(label);
    container.append(bar);
  });
}
