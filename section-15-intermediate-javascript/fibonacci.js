var output = [];
var firstNumber = 0;
var secondNumber = 1;
var thirdNumber = 0;

function fibonacciGenerator(n) {
  if (n === 0) {
    return (output = []);
  }
  if (n === 1) {
    return (output = [0]);
  }
  if (n === 2) {
    return (output = [0, 1]);
  }
  output = [0, 1];
  for (let i = 2; i < n; i++) {
    thirdNumber = output[i - 1] + output[i - 2];
    output.push(thirdNumber);
  }
  return output;
}

// [0,1,1,2,3,5,8]

fibonacciGenerator(500);
console.log(output);
