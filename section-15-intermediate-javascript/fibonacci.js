var output = [];
var firstNumber = 0;
var secondNumber = 1;
var thirdNumber = 0;

function fibonacciGenerator(n) {
  if (n === 0) {
    console.log(output);
    return (output = []);
  }
  if (n === 1) {
    console.log(output);
    return (output = [0]);
  }
  if (n === 2) {
    console.log(output);
    return (output = [0, 1]);
  }
  output = [0, 1];
  for (let i = 2; i < n; i++) {
    thirdNumber = output[i - 1] + output[i - 2];
    output.push(thirdNumber);
    console.log(output);
  }
  return output;
}

// [0,1,1,2,3,5,8]

fibonacciGenerator(10);
fibonacciGenerator(1);
fibonacciGenerator(2);
