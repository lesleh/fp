import { once } from "./once";

describe("once", () => {
  it("should call the function only once", () => {
    const fn = jest.fn();
    const onceFn = once(fn);
    onceFn();
    onceFn();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
