
if(5>3){
  console.log('is greater than')
}

let cat='cat'
if (cat.length===3){
  console.log('is the length')
}

let dog='dog'
if(cat===dog){
  return "is the same"
}else console.log('is not the same')


if(typeof "dog"==='string'){
  console.log('is a string')
}
else 
console.log('is not a string')

if(typeof true === "boolean"){
  console.log('is a boolean')
}

num=8
let even=(num%2===0)
even ? console.log('even') :  console.log('oddd')


var numbers = [1, 2, 3, 4, 5, 6]
for (let i=0; i<numbers.length; i++){
  if(numbers[i]%2===0){
    console.log(numbers[i])
  }
}