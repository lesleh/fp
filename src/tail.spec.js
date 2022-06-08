import { tail } from "./tail";

describe("tail", () => {
  it("returns the first element of an array", () => {
    expect(tail([5, 6, 7])).toEqual([6, 7]);
  });

  it("returns the first element of an array", () => {
    expect(tail([])).toEqual([]);
  });
});
