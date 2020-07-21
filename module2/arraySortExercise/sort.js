// 1) Sort an array from smallest number to largest
function leastToGreatest(arr) {
 
let arrs=arr.sort(function(a, b){
  return a - b
})
console.log(arrs)
}

console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90] 
// 2) Sort an array from largest number to smallest

function greatestToLeast(arr) {
  let arrs=arr.sort(function(a, b){
    return b -a
  })
  console.log(arrs)
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1] 
// 3) Sort an array from shortest string to longest

function lengthSort(arr) {
  let arrs=arr.sort(function(a, b){
    return a.length-b.length
  })
  console.log(arrs)
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"] 
// 4) Sort an array alphabetically

function alphabetical(arr) {
  let arrs=arr.sort(function(a, b){
    if(a>b){
      return +1
    }if(b>a){
      return -1
    }
  })
  console.log(arrs)
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"] 
// 5) Sort the objects in the array by age

function byAge(arr){
 let arrs= arr.sort(function(a,b){
    return a.age-b.age
  })
  console.log(arrs)
}

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]