export function nary(n) {
  return function (fn) {
    return function (...args) {
      return fn.apply(this, args.slice(0, n));
    };
  };
}
