export const nary =
  (n) =>
  (fn) =>
  (...args) =>
    fn.apply(this, args.slice(0, n));
