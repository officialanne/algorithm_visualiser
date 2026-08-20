export function generateRandomArray(size = 20, min = 5, max = 50) {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * (max - min + 1)) + min,
  );
}
