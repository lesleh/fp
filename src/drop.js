import { curry } from "./curry";

export const drop = curry(function drop(n, arr) {
  return arr.slice(n);
});
