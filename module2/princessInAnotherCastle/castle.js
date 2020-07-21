const count = 0
class Player {
  constructor(name, totalCoins, status, hasStar = false, gameActive = true) {
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
    this.gameActive = gameActive
  }
  setName(namePicked) {
    this.name = "mario"
  }

  coins() {
    this.totalCoins++
  }

  gotHit() {
    if (this.status === "powered up") {
      this.status = "large"
    } else if (this.status === "large") {
      this.status = "small"
    } else if (this.status === "small") {
      this.status = "dead"
    }  if (this.status === "dead") {
      this.gameActive = false
       if(player.gameActive === false){
      clearInterval(interval)
  }
      console.log("you have died")
    }
  }
  gotPowerUp() {
    if (this.status === "small") {
      this.status = "large"
    } else if (this.status === "large") {
      this.status = "powered up"
    } else if (this.status === "powered up") {
      this.hasStar = true
    }
  }

}
const player = new Player("mario", 0, "large", false, true)
const interval = setInterval(function () {
  let random = Math.ceil(Math.random() * 3)
  console.log(random)
  if (random === 1) {
    player.gotPowerUp()
  } else if (random === 2) {
    player.gotHit()
  } else {player.coins()}
  console.log(player)
}, 1000)


console.log(player.coins())

console.log(player.setName())
console.log(player)
console.log(player.gotHit())
console.log(player.totalCoins)