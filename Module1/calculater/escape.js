
var readlineSync = require ("readline-sync");
var handInHole = false;
var foundKey = false;
var openDoor = false;
var operations=["put hand in hole", "find the key", "open the door"];
var die = hole("you die");
var found = key("found key");
var opened = open("opened door");

while (openDoor === false) {
  var chooseOpp = readlineSync.keyInSelect(operations, "choose operation");
  checkResult(chooseOpp);
  
  if (handInHole === true) {
    console.log(die);
    break;
  } else if (openDoor === true) {
    console.log(opened);
  } else if (foundKey === true) {
    console.log(found);
  }
}

function hole(die) {
  return "result is :" + die;
}

function key(found) {
  return "result is :" + found;
}

function open(opened) {
  return "result is :" + opened;
}

function checkResult(result) {
  if (result === 0) {
    handInHole = true;
  } else if (result ===1 ) {
   foundKey = true;
  } else if (result === 2) { 
    if (foundKey === true) {
      openDoor = true;
    } else {
      console.log("you need key to open door");
    }
  }
}




































