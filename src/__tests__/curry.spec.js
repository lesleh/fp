import { curry } from "../curry";

describe("curry", function () {
  it("should curry a function", function () {
    var add = function (a, b, c) {
      return a + b + c;
    };
    var curried = curry(add);
    expect(curried(1, 2, 3)).toBe(6);
    expect(curried(1, 2)(3)).toBe(6);
    expect(curried(1)(2, 3)).toBe(6);
    expect(curried(1)(2)(3)).toBe(6);
  });
});
