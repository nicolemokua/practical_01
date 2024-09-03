// Store two values in variables
let a = 7;
let b = 3;

// Log initial values
console.log("Before swapping: a =", a, ", b =", b);

// Swap the values without using a third variable
a = a + b; // a now becomes 10 (7 + 3)
b = a - b; // b now becomes 7 (10 - 3)
a = a - b; // a now becomes 3 (10 - 7)

// Log the swapped values
console.log("After swapping: a =", a, ", b =", b);