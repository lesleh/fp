import { nary } from "../nary";

describe("nary", () => {
  it("ignores extra passed arguments", () => {
    const mockFn = jest.fn();
    const fn = nary(3)(mockFn);
    fn(1, 2, 3, 4, 5, 6);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
  });
});
