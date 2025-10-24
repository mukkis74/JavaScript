function fibonnacciGenerator(n) {

let fib = [0, 1]; // Step 1: start with the first two numbers of fibonacci sequence

  for (let i = 2; i < n; i++) { // Step 2: loop starts at index 2 of the array
    fib[i] = fib[i - 1] + fib[i - 2]; // Step 3: each new number is the sum of the two before it
  }

  return fib; // Step 4: return the whole sequence array
}

output = fibonnacciGenerator(100); 
console.log(output);


function fibonacci(n) {
var output = [];

  if (n === 1) {
    output = [0];
    }

    else if (n === 2) {
    output = [0, 1];
    }

    else {
        output = [0, 1];

        for (i = 2; i < n; i++) {
            output.push(output[output.length - 1] + output[output.length - 2]);
    }
    return output;
    }
}
var result = fibonacci(10);
console.log(result);