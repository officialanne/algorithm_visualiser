// turn the HTML into visual bars
export function renderArray(container, values, state = {}) {
  container.innerHTML = "";

  values.forEach((value, index) => {
    // create a new HTML div element
    const bar = document.createElement("div");

    // add the CSS class to each element
    bar.classList.add("array-bar");

    bar.style.height = `${value * 10}px`;

    // produces HTML attributes to store small custom information to identify each bar
    bar.dataset.index = index;
    bar.dataset.value = value;

    if (state.comparing?.includes(index)) {
      // add to a class representing the element being currently compared
      bar.classList.add("is-comparing");
    }

    if (state.swapping?.includes(index)) {
      bar.classList.add("is-swapping");
    }

    if (state.sorted?.includes(index)) {
      bar.classList.add("is-sorted");
    }

    // puts the element into the document
    container.appendChild(bar);
  });
}
