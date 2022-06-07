import { curry } from "./curry";

export const prepend = curry(function prepend(arr, ...rest) {
  return rest.reduce((acc, curr) => [acc, ...curr], arr);
});
