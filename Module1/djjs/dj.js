document.body.addEventListener('mouseover', function(){
  document.getElementById('dj').style.backgroundColor='blue'
})
document.body.addEventListener('mouseout', function(){
  document.getElementById('dj').style.backgroundColor='pink'
  document.style.width='300px'
  document.style.height='300px'
})
document.getElementById('dj').addEventListener('mouseover', function(){
this.style.backgroundColor="blue"
})

document.getElementById('dj').addEventListener('mousedown', function(){
  this.style.backgroundColor="red"
  })

document.getElementById('dj').addEventListener('mouseup', function(){
  this.style.backgroundColor="yellow"
  })
document.getElementById('dj').addEventListener('dblclick', function(){
    this.style.backgroundColor="green"
    })


    