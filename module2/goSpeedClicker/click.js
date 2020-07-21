let button=document.getElementById("clickme")
let par=document.getElementById("paragraph")


let count



if (localStorage.getItem("counts")){
  count=localStorage.getItem("counts")
}  
else {count=0}

par.textContent=count
function event(){
  count++
  par.textContent=count
  localStorage.setItem("counts", count)
}

button.addEventListener("click", event)