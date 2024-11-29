// Functions

// 1. Function that takes two numbers as arguments and returns their sum
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 5));
console.log(sum(10, 20));
console.log(sum(-7, 14));

// 2. Function that takes a string and returns the string reversed
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));
console.log(reverseString("world"));

// 3. Function that takes a person's name and returns a greeting message
function greet(name) {
    return `Hello, ${name}! Welcome!`;
}
console.log(greet("Alice"));
console.log(greet("Bob"));
console.log(greet("Charlie"));
