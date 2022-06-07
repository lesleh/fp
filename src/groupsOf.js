import { drop } from "./drop";
import { isEmpty } from "./isEmpty";
import { prepend } from "./prepend";
import { take } from "./take";
import { curry } from "./curry";

export const groupsOf = curry(function groupsOf(n, list) {
  return isEmpty(list)
    ? []
    : prepend(take(n, list), groupsOf(n, drop(n, list)));
});
