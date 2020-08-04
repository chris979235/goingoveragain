getData()

function deleted(deleteButton, data  ) {
  deleteButton.addEventListener("click", function () {
    axios.delete("https://api.vschool.io/chrisrees/todo/" + data._id)
      .then(response => {
        deleteButton.parentNode.remove()
      })
      .catch(error => console.log(error))
  })
}

const todoform = document.todoform
todoform.addEventListener("submit", function (event) {
  event.preventDefault()
  todoform.title.value = ""
  const newToDo = {
    title: todoform.input1.value,
    description: todoform.input2.value,
    imgUrl: todoform.input3.value,
    price: todoform.input4.value
  }

  axios.post("https://api.vschool.io/chrisrees/todo/", newToDo)
    .then(response => {
      newItem(response.data)
    })
    .catch(error => console.log(error))
})

function getData() {
  axios.get("https://api.vschool.io/chrisrees/todo")
    .then(response => {
      console.log(11111,response)
      for (let i = 0; i < response.data.length; i++) {
        newItem(response.data[i])
      }
      response.data.forEach(function(todo){
        newItem(todo)
    })
})
}



  function newItem(item) {
  const data = item
  const htitle = document.createElement("h1")
  const div = document.createElement("div")
  document.getElementById("todolist").appendChild(div)
  htitle.textContent = data.title
  if (data.completed) {
    htitle.style.textDecoration = "line-through"
  }
  div.appendChild(htitle)
  const hdescription = document.createElement("h1")
  hdescription.textContent = data.description
  div.appendChild(hdescription)

  const himage = document.createElement("img")
  himage.src = data.imgUrl
  div.appendChild(himage)

  const hprice = document.createElement("h1")
  hprice.textContent = data.price
  div.appendChild(hprice)

  const button = document.createElement("button")
  button.textContent = "linethrough"
  div.appendChild(button)
  
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "delete"
  div.appendChild(deleteButton)

  deleted(deleteButton, data)
  
  button.addEventListener("click", function event() {
    data.completed = !data.completed

    axios.put("https://api.vschool.io/chrisrees/todo/" + data._id, {
        completed: data.completed
      })
      .then(response => {
        if (response.completed) {
          hdescription.style.textDecoration = "line-through"
         
        } else
          hdescription.style.textDecoration = "none"
        console.log(response)
      })
      .catch(error => console.log(error))
  })
  }
 