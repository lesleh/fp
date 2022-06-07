import { groupsOf } from "./groupsOf";

describe("groupsOf", function () {
  it("should return an empty array if the list is empty", function () {
    expect(groupsOf(1, [])).toEqual([]);
  });

  it("should return an array of arrays", function () {
    expect(groupsOf(1, [1, 2, 3])).toEqual([[1], [2], [3]]);
    expect(groupsOf(2, [1, 2, 3, 4, 5, 6])).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });
});
