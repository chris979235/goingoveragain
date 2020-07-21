// for(let i=0; i<10; i++){
//   console.log(i)
// }

// for(let i=0; i>10; i--){
//   console.log(i)
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for(let i=0; i<fruit.length; i++){
//   console.log(fruit[i])
// }

// function someFunction(num){
//   var newArray = [];
//   for(var i=0; i < num.length; i++){
//     newArray.push(num[i]);
//   }
//   return newArray;
// }

// console.log(someFunction([3,5,4,5]));


// let fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// for(let i=0; i<fruits.length-1; i+=2){
//     console.log(fruits[i])
// }


var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Bieber",
    occupation: "Singer"
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]

var names=[]
var occupations=[]

for(let i=0; i<peopleArray.length; i++){
names.push(peopleArray[i].name)
occupations.push(peopleArray[i].occupation)

console.log(names)
console.log(occupations)
}
// ["Harrison Ford", "Vladimir Putin"] // names
// ["Singer", "Entertainer"] // occupations

