function add(v, m) {
  return v + m;
}

function calculate(v, m, callbacka) {
  return callbacka(v, m);
}

const addResult = calculate(1, 2, add);

console.log(addResult);

function multiply(a, b) {
  return a * b;
}

const multiplyReslut = calculate(1, 2, multiply);
console.log(multiplyReslut);

const hello = () => {
  console.log("hello");
};

setTimeout(() => {
  console.log("hello");
}, 5000);
