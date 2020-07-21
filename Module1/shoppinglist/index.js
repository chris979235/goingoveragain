
const form=document["addItem"]
const list=document.getElementById("list")

form.addEventListener("submit", function(event){
  event.preventDefault()

  const shopList=form.shopList.value
  form.shopList.value=""

 const l1 = document.createElement("li")
 const button=document.createElement("button")

button.addEventListener("click", function(){
  list.removeChild(l1)
})

 button.textContent="x"

l1.textContent=shopList
l1.appendChild(button)
document.getElementById("list").append(l1)
})

//splice index start at followed by how many you are removing