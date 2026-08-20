// generate arrays automatically
export function generateRandomArray(size = 20, min = 5, max = 50) {
  // generate an array of a specified length
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * (max - min + 1)) + min,
  );
}
