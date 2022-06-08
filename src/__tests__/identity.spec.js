import { identity } from "../identity";

describe("identity", () => {
  it("returns the same value", () => {
    expect(identity(5)).toBe(5);
  });
});
