/* Implements FizzBuzz program where:
   - a number divisible by 3 prints "Fizz"
   - a number divisible by 5 prints "Buzz"
   - a number disible by 3 and 5 prints "FizzBuzz"
   - any other number prints itself
*/

// My implementation
let number = 77;
let message = "";

if (number % 3 == 0) {
    message = "Fizz";
};
if (number % 5 == 0) {
    message += "Buzz";
};
if (message) {
    console.log(message);
} else {
    console.log(number);
}

// Solution
message = "";

if (number % 3 == 0) message = "Fizz";
if (number % 5 == 0) message += "Buzz";
console.log(message || number);