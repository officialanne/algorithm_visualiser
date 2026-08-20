export function renderStructure(container, values, type) {
  container.innerHTML = "";
  if (!values.length) {
    container.textContent = "The structure is empty.";
    return;
  }
  const ordered = type === "stack" ? [...values].reverse() : values;
  ordered.forEach((value, index) => {
    const node = document.createElement("div");
    node.className = "structure-node";
    node.textContent = value;
    if (index === 0) node.dataset.label = type === "stack" ? "Top" : "Front";
    if (type === "queue" && index === ordered.length - 1)
      node.dataset.rear = "Rear";
    container.append(node);
  });
}
