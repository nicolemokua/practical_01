// Loops

// 1. Print the numbers from 1 to 20 using a while loop
let num = 1;
while (num <= 20) {
    console.log(num);
    num++;
}

// 2. Use a for loop to print the first 10 multiples of 3
for (let i = 1; i <= 10; i++) {
    console.log(3 * i);
}

// 3. Iterate over an array of names and print each name with a greeting
const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
names.forEach((name) => console.log(`Hello, ${name}!`));