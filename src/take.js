import { curry } from "./curry";

export const take = curry(function take(n, arr) {
  return arr.slice(0, n);
});
