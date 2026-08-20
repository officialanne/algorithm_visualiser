import { describe, expect, it } from "vitest";
import { binarySearch } from "../../src/algorithms/searching/binarySearch.js";
import { linearSearch } from "../../src/algorithms/searching/linearSearch.js";

describe("searching algorithms", () => {
  it("finds and reports missing values with linear search", () => {
    expect(linearSearch([3, 9, 1], 9).index).toBe(1);
    expect(linearSearch([3, 9, 1], 2).index).toBe(-1);
  });
  it("sorts a copy and finds values with binary search", () => {
    const input = [9, 1, 5];
    expect(binarySearch(input, 5).index).toBe(1);
    expect(input).toEqual([9, 1, 5]);
  });
});
