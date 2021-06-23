class Mather {
    add = (x,y) => x + y;
    subtract = (x, y) => x - y;
    multiply = (x, y) => x * y;
    divide = (x, y) => y !== 0 ? x / y : NaN;
    square = (x) => x * x;
};

const x = 5;
const y = 6;
const m = new Mather();
const addResult = m.add(x, y);
const subResult = m.subtract(x, y);
const prdResult = m.multiply(x, y);
const qtnResult = m.divide(x, y);
const sqrResult = m.square(x);

console.log(addResult);
console.log(subResult);
console.log(prdResult);
console.log(qtnResult);
console.log(sqrResult);