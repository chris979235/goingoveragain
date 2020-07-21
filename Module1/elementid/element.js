let hello = document.getElementById('world').textContent

let par=document.getElementById('par')
par.textContent=hello

let button=document.getElementById('button')


function handleClick(){
  console.log('i was clicked')
  document.body.style.backgroundColor = "firebrick"
}

button.addEventListener('click', handleClick)
