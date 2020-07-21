const form=document.myForm1
form.addEventListener("submit", (event) => {
event.preventDefault()
let totalcoins=form.bomb.value*7
let h1=document.createElement("h1")
h1.id="h1"
h1.textContent= form.bomb.value * 7 + (" coins to give")
document.getElementById("container1").appendChild(h1)
console.log("you give" +" "+ totalcoins+" "+ "coins")
})

const form2=document.myForm2
form2.addEventListener("submit", (event) => {
event.preventDefault()
let totalcoins=form2.goomba.value*5
let header1=document.createElement("h1")
header1.id="h1"
header1.textContent= form2.goomba.value * 5 + (" coins to give")
document.getElementById("container2").appendChild(header1)
console.log("you give" +" "+ totalcoins+" "+ "coins")
})

const form3=document.myForm3
form3.addEventListener("submit", (event) => {
event.preventDefault()
let totalcoins=form3.turtle.value*11
let header=document.createElement("h1")
header.id="h1"
header.textContent= form3.turtle.value * 11 + (" coins to give")
document.getElementById("container3").appendChild(header)
console.log("you give" +" "+ totalcoins+" "+ "coins")
})