import { curry } from "./curry";

export const isEmpty = curry(function isEmpty(array) {
  return array.length === 0;
});
