let readlineSync = require('readline-sync');


const randomNumber = function(max, min) {
  return Math.floor((Math.random() * max) + min) 
}
  
let isAlive=true
let hasWon=false
const player={
  name:readlineSync.question("welcome to oregan trail \nwhat is your name \n"),
  hp:250,
  attack:5,
 
}
console.log(player)

enemies=[]

function Enemy(number,name, hp, inventory, attack){
  this.number=number
  this.name=name
  this.hp=hp
  this.inventory=inventory
  this.attack=attack
}

const snake= new Enemy(1,'rattlesnake', 5, 'snakeskin', Math.floor(Math.random(5)*5 ))
const beatle= new Enemy(2,'wildbeatle', 5, 'beattle carapace', Math.floor(Math.random(10)*5 ))
const buffallo=new Enemy(3,'wildbuffalo', 5, 'buffalo hide', Math.floor(Math.random(10)*10 ))
enemies.push(snake, beatle, buffallo)
console.log(enemies,555)

  console.log(123,Math.ceil(Math.random() *3))

  function battle(enemy){
  while(enemy.hp>0&&player.hp>0){
    console.log(enemy,333)
    if(readlineSync.keyIn("you have encountered " + enemy.name +" \ndo you want to attack or run [a/r]",  {limit: ["a" ,"r"]})==="a"){
      enemy.hp = enemy.hp - player.attack
      console.log("you dealt " + player.attack+ " to " + enemy.name)
      console.log(enemy.name+" has "+enemy.hp + " health remaining")
      player.hp=player.hp-enemy.attack
      console.log("you recieved " + enemy.attack + " damage")
      console.log('you have'+player.hp+"left")
      if (enemy.hp <= 0){
        enemies.splice(enemy,0)
      }
    }if(player.hp<=0){
     isAlive=false
    }
       else {  
      if (Math.floor(Math.random() * 100 < 50 )) {
        console.log("run")
        break
      }else {
        console.log("failed to run away")
        player.hp=player.hp-enemy.attack
      console.log("you recieved " + enemy.attack+ " damage")
      } 
    }
  }
}
  
while(isAlive===true && enemies.length>0){
  const walkOrInventory=readlineSync.keyIn('press w to walk, i for inventory\n', {limit: ['w', "print"]})
  if (walkOrInventory==="w"){
    if (Math.floor(Math.random() * 100 < 50 )) {
      const enemy=enemies[randomNumber(enemies.length, 0)]
      battle(enemy)
    }  
  }else{
    console.log(player)
  }
}
  if (isAlive===false){
    console.log("gameover you died")
  }if(enemies.length===0) {
    hasWon===true
    console.log("game over you survived hell road")
  }

  
  