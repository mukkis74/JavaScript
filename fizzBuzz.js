var output = [];
var count = 1;

function fizzBuzz() {
    while (count <= 50) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
    console.log(output);
        } else if (count % 3 === 0) {
            output.push("Fizz");
    console.log(output);
        } else if (count % 5 === 0) {
            output.push("Buzz");
    console.log(output);
        } else {
            output.push(count);
    console.log(output);
        }
        count++;
    }
}

fizzBuzz();