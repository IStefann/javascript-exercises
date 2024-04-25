const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  newArray = array.reduce((total, num) => {
    return total + num;
  }, 0);
  return newArray;
};

const multiply = function (array) {
  newArray = array.reduce((total, num) => {
    return total * num;
  }, 1);
  return newArray;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0)
    return 1;
  else
    return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
