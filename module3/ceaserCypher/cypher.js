var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));


var alphabet='abcdefghijklmnopqrstuvwxyz'
var finalString=''

function cypher(str, num){
  
for (var i=0; i<str.length; i++){
  //check if input charecter exists in alphabet
  if(alphabet.indexOf(str[i])!==-1){
    //store the index of the letter in the alphabet
     var letterIndex=alphabet.indexOf(str[i])
     finalString += alphabet[(letterIndex+num) % 26]
     // shift and add the new letter to the final string
  } else {
    finalString += str[i]
  }
}
  return finalString
}

console.log(cypher(input,shift))
