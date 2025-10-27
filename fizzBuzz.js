var output = []; // create an empty array to store the results
var count = 1; // initialize count to 1

function fizzBuzz() { // define the fizzBuzz function
    while (count <= 50) { // loop from 1 to 50
        if (count % 3 === 0 && count % 5 === 0) { // check if count is divisible by both 3 and 5
            output.push("FizzBuzz"); // add "FizzBuzz" to the output array
    console.log(output); // log the output array
        } else if (count % 3 === 0) { // check if count is divisible by 3
            output.push("Fizz"); // add "Fizz" to the output array
    console.log(output); // log the output array
        } else if (count % 5 === 0) { // check if count is divisible by 5
            output.push("Buzz"); // add "Buzz" to the output array
    console.log(output); // log the output array
        } else { // if count is not divisible by 3 or 5
            output.push(count); // add the number itself to the output array
    console.log(output); // log the output array
        }
        count++; // increment count by 1
    }
}

fizzBuzz(); // call the fizzBuzz function to execute it