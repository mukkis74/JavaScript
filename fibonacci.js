function fibonacciGenerator(n) { // define the function with one parameter n (that accepts one number/input)

let fib = [0, 1]; // Step 1: start with the first two numbers of fibonacci sequence

  for (let i = 2; i < n; i++) { // Step 2: loop starts at index 2 of the array
    fib[i] = fib[i - 1] + fib[i - 2]; // Step 3: each new number is the sum of the two before it
  }

  return fib; // Step 4: return the whole sequence array
}

output = fibonacciGenerator(100); // Calls the function asking for the first 100 numbers and stores the result in output.
console.log(output); // Prints the output to the console.


function fibonacci(n) {
var output = []; // create an empty array to store the Fibonacci sequence

  if (n === 1) { // handle the case when n is 1 
    output = [0]; // the Fibonacci sequence with one number is just [0]
    }

    else if (n === 2) { // handle the case when n is 2
    output = [0, 1]; // the Fibonacci sequence with two numbers is [0, 1]
    }

    else {
        output = [0, 1]; // start the sequence with the first two numbers

        for (i = 2; i < n; i++) { // for loop from index 2 to n-1 to generate the rest of the sequence
            output.push(output[output.length - 1] + output[output.length - 2]); // calculate the next Fibonacci number by summing the last two numbers in the output array and add it to the array
    }
    return output; // return the complete Fibonacci sequence array
    }
}
var result = fibonacci(10); // Call the function with n = 10 to get the first 10 Fibonacci numbers
console.log(result); // Print the result to the console