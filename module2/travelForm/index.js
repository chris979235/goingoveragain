const form=document['forms']
form.addEventListener('submit', function(e){
  e.preventDefault()

const checkedInputs = []
    
    for(let i = 0; i < form.dietaryRestrictions.length; i++){
        if(form.dietaryRestrictions[i].checked){
            checkedInputs.push(form.dietaryRestrictions[i].value)
        }
    }
    
alert('firstName'+' '+form.firstName.value+"\n"+'lastname'+" "+form.lastName.value+"\n"+"age"+form.age.value
+"\n"+"gender"+form.gender.value+"\n"+"travel destination"+form.city.value+"\n"+"dietary restrictions"+checkedInputs
)
})