import { describe, expect, it } from "vitest";
import { bubbleSort } from "../../src/algorithms/sorting/bubbleSort.js";
import { insertionSort } from "../../src/algorithms/sorting/insertionSort.js";
import { selectionSort } from "../../src/algorithms/sorting/selectionSort.js";

describe.each([bubbleSort, insertionSort, selectionSort])(
  "sorting algorithms",
  (sort) => {
    it("sorts duplicates and negative values without mutating the input", () => {
      const input = [4, -1, 4, 0, 2];
      expect(sort(input).sortedArray).toEqual([-1, 0, 2, 4, 4]);
      expect(input).toEqual([4, -1, 4, 0, 2]);
    });
    it("handles empty and single-value arrays", () => {
      expect(sort([]).sortedArray).toEqual([]);
      expect(sort([7]).sortedArray).toEqual([7]);
    });
  },
);
