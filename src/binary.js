export function binary(fn) {
  return function (x, y) {
    return fn(x, y);
  };
}
