let fruits = ["Mango", "Banana", "Orange", "Grape", "Apple", "Pear", "Cherry", "Strawberry"] /* Intiialzing Fruits  */
console.log(fruits) 
fruits.push("Watermelon") /* Add Watermelon in an array */
console.log(fruits)
fruits.unshift("Pineapple") /* Add Pineapple in the start of an array*/
console.log(fruits)
fruits.pop(fruits) /* Remove the last element of an array i.e. Watermelon */
console.log(fruits)
fruits.shift(fruits) /* Remove the first element of an array i.e. Pineapple */
console.log(fruits)
let extractedFruits=fruits.splice(1,3) /* Remove a portion from an array that is from index 1 to index 2 */
console.log(extractedFruits) 

console.log(fruits)
// Loop through the array and log each element
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}: ${fruits[i]}`);
  }