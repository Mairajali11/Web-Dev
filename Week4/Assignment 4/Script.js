let fruits = ["Mango", "Banana", "Orange", "Grape", "Apple", "Pear", "Cherry", "Strawberry"]; // Initializing Fruits
console.log(fruits);

fruits.push("Watermelon"); // Add Watermelon in an array
console.log(fruits);

fruits.unshift("Pineapple"); // Add Pineapple at the start of the array
console.log(fruits);

fruits.pop(); // Remove the last element of the array (Watermelon)
console.log(fruits);

fruits.shift(); // Remove the first element of the array (Pineapple)
console.log(fruits);

let extractedFruits = fruits.splice(1, 3); // Remove a portion from index 1 to index 3 (3 elements)
console.log(extractedFruits); 

console.log(fruits); // Remaining fruits after splice

// Loop through the array and log each element
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}: ${fruits[i]}`);
}
