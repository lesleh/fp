const { unary } = require("./unary");

describe("unary", () => {
  it("ignores extra passed arguments", () => {
    const mockFn = jest.fn();
    const fn = unary(mockFn);
    fn(1, 2, 3);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1);
  });
});
