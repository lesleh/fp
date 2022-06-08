import { head } from "../head";

describe("head", () => {
  it("returns the first element of an array", () => {
    expect(head([5, 6, 7])).toBe(5);
  });

  it("returns the first element of an array", () => {
    expect(head([])).toBe(undefined);
  });
});
