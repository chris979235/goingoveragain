const form=document['formAdd']
form.addEventListener('submit', function(e){
  e.preventDefault()
  const num1=parseInt(form.number1.value)
  const num2=parseInt(form.number2.value)

  const h1= document.createElement('h1')
  h1.textContent=(Number(num1)+Number(num2))
  document.getElementsByTagName("body")[0].append(h1)
})


const form3=document['formMul']
form3.addEventListener('submit', function(event){
  event.preventDefault()
  const num3=form3.number5.value
  const num4=form3.number6.value
  const h1= document.createElement('h1')
  h1.textContent=(Number(num3)*Number(num4))
  document.getElementsByTagName("body")[0].append(h1)
})


