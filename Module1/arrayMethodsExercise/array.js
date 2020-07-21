const { orange } = require("color-name");

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables)
fruit.shift()
console.log(fruit)
console.log(fruit.indexOf('orange'))
fruit.push(1)
console.log(fruit)
console.log(vegetables.length)
vegetables.push(3)

let food=fruit.concat(vegetables)
console.log(food)

food.splice(4,2)

console.log(food.reverse())