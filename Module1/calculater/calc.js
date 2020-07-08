var readlineSync = require('readline-sync');
var num1 = readlineSync.question('what is your first number')
var num2 = readlineSync.question('what is your second number')
let option=["add", "subtract", "multiply", "divide"]
choose = readlineSync.keyInSelect(option, "your modifier")

function add(num1, num2){
  console.log ("result is " + (Number(num1) + Number(num2)))
}
function sub(num1, num2){
    console.log ("result is " + (Number(num1) - Number(num2)))
  }
  function mul(num1, num2){
    console.log ("result is " + (Number(num1) * Number(num2)))
  }
  function div(num1, num2){
      console.log ("result is " + (Number(num1) / Number(num2)))
    }
  



if (choose===0){
  add (num1, num2)
}else if(choose===1){
  sub(num1,num2)
}else if (choose===2){
  mul(num1, num2)
}else div(num1, num2)