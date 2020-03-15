const multiple = (a: number, b: number) => a * b;
const range0 = (n: number) => [...Array(n).keys()];
const range = (n: number) => {
  const r = range0(n + 1);
  r.shift();
  return r;
};
const factorial = (n: number) => range(n).reduce(multiple, 1);

const memo: { [n: number]: number } = {};
const factorialMemo = (n: number) =>
  n in memo ? memo[n] : (memo[n] = factorial(n));

const A = 13591409;
const B = 545140134;
const C = 640320 ** 3;

const chudnovskySig = (n: number) =>
  ((-1) ** n * factorialMemo(6 * n) * (A + B * n)) /
  (factorialMemo(3 * n) * factorialMemo(n) ** 3 * C ** n);

export function chudnovsky(t: number) {
  const res =
    (12 / Math.sqrt(C)) * range0(t).reduce((p, i) => p + chudnovskySig(i), 0);
  return 1 / res;
}
