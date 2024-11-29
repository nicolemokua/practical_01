// Conditional Statements

// 1. Check whether a number is even or odd and log the result
const number = 7;
if (number % 2 === 0) {
    console.log(`${number} is even.`);
} else {
    console.log(`${number} is odd.`);
}

// 2. Check whether a person is eligible to vote based on their age
const age = 20;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

// 3. Assign a letter grade based on a numeric score
const score = 85;
let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}
console.log(`Your grade is ${grade}.`);