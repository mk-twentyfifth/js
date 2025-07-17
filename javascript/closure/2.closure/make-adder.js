function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
// it means makeAdder(x=5)
const add5 = makeAdder(5);
// it means makeAdder(x=5)
const add10 = makeAdder(10);
