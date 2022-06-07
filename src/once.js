export function once(fn) {
  let result;
  let called = false;
  return function () {
    if (!called) {
      result = fn.apply(this, arguments);
      called = true;
    }
    return result;
  };
}
