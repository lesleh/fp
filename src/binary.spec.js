const { binary } = require("./binary");

describe("binary", () => {
  it("ignores extra passed arguments", () => {
    const mockFn = jest.fn();
    const fn = binary(mockFn);
    fn(1, 2, 3);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1, 2);
  });
});
