import { isEmpty } from "./isEmpty";

describe("isEmpty", function () {
  it("should return true if the array is empty", function () {
    expect(isEmpty([])).toBe(true);
  });

  it("should return false if the array is not empty", function () {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });
});
