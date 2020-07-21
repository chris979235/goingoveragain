var header=document.createElement("h1")
header.textContent="Javascript made this!!"
document.body.append(header)
header.classList="header"
header.id="howdy"
header.style.backgroundColor="blue"

document.getElementById("howdy")
howdy.addEventListener("mouseover", change)
function change(){
  document.getElementById("howdy").textContent="hello and goodbye"
}

document.getElementById("howdy")
howdy.addEventListener("mouseout", changeBack)
function changeBack(){
  document.getElementById("howdy").textContent="Javascript made this!!"
}


var myName=document.createElement("span")
myName.textContent="christopher rees"
document.body.append(myName)
myName.classList="name"
myName.id="named"
myName.style.backgroundColor="red"

document.getElementById("named")
named.addEventListener("mouseover", changes)
function changes(){
  document.getElementById("named").textContent="hello and goodbye"
}
document.getElementById("named")
named.addEventListener("mouseout", changed)
function changed(){
  document.getElementById("named").textContent="christopher rees"
}


var write=document.createElement("span")
write.textContent="wrote the javascript"
document.body.append(write)
write.classList="write"
write.id="news"
write.style.backgroundColor="green"

