/* eslint no-unused-vars: "off"*/

export const box = x => ({
  map: f => box(f(x)),
  fold: f => f(x),
});

export const right = x => ({
  map: f => right(f(x)),
  fold: (f, g) => g(x),
});

export const left = x => ({
  map: f => left(x),
  fold: (f, g) => f(x),
});

export const fromNullable = x => (
  x != null ? right(x) : left(null)
);
