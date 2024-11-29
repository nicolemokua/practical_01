// Arrays

// 1. Create an array of your five favorite fruits and log each one using a loop
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Strawberry"];
fruits.forEach((fruit) => console.log(fruit));

// 2. Add a new item to an array and then remove the first item
const fruits2 = ["Apple", "Banana", "Cherry"];
fruits2.push("Orange"); // Add a new item
fruits2.shift(); // Remove the first item
console.log(fruits2);

// 3. Find the index of a specific item in an array
const targetFruit = "Cherry";
const index = fruits.indexOf(targetFruit);
if (index !== -1) {
    console.log(`The index of ${targetFruit} is ${index}`);
} else {
    console.log(`${targetFruit} is not found in the array.`);
}
