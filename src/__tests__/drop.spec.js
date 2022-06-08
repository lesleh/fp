import { drop } from "../drop";

describe("drop", function () {
  it("should curry the function", function () {
    expect(drop(2)([1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
  });

  it("should drop the first n elements of an array", function () {
    expect(drop(1, [])).toEqual([]);
    expect(drop(1, [1, 2, 3])).toEqual([2, 3]);
    expect(drop(2, [1, 2, 3])).toEqual([3]);
    expect(drop(3, [1, 2, 3])).toEqual([]);
    expect(drop(4, [1, 2, 3])).toEqual([]);
  });
});
