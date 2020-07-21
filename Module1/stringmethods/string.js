function capilizeAndLowercase(string){
let cap=string.toUpperCase()
let low=string.toLowerCase()
console.log(cap.concat(low))
}


capilizeAndLowercase("Hello") // => "HELLOhello"


// Make a function that returns a number half the length, and rounded down. You'll need to use Math.floor().

function findMiddleIndex(s){
let div=(s.length)
console.log(Math.floor(div/2))
}

findMiddleIndex("Hello") // => 2
findMiddleIndex("Hello World") // => 5

function returnFirstHalf(text){
console.log(text.slice(0,Math.floor(text.length/2)))
}

returnFirstHalf("Hello") // => "He"
returnFirstHalf("Hello World") // => "Hello"


function capilizeAndLower(text){
  let first=text.slice(0,Math.floor(text.length/2))
  let up=first.toUpperCase()
  let last=text.slice(Math.floor(text.length/2))

  console.log(2222,up.concat(last))
}

capilizeAndLower("Hello") // => "HEllo"
capilizeAndLower("Hello World") // => "HELLO world"

