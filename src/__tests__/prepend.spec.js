import { prepend } from "../prepend";

describe("prepend", function () {
  it("should prepend an array to another array", function () {
    expect(prepend([1, 2, 3], [4, 5, 6])).toEqual([[1, 2, 3], 4, 5, 6]);
  });
});
