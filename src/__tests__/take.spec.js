import { take } from "../take";

describe("take", function () {
  it("should curry the function", function () {
    expect(take(2)([1, 2, 3, 4, 5])).toEqual([1, 2]);
  });

  it("should take the first n elements of an array", function () {
    expect(take(1, [])).toEqual([]);
    expect(take(1, [1, 2, 3])).toEqual([1]);
    expect(take(2, [1, 2, 3])).toEqual([1, 2]);
    expect(take(3, [1, 2, 3])).toEqual([1, 2, 3]);
    expect(take(4, [1, 2, 3])).toEqual([1, 2, 3]);
  });
});
