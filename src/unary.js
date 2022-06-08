export function unary(fn) {
  return function (x) {
    return fn(x);
  };
}
