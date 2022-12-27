function add(v, m) {
  return v + m;
}

function calculate(v, m, callbacka) {
  return callbacka(v, m);
}

const addResult = calculate(1, 2, add);

console.log(addResult);
