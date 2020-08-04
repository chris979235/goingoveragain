import React, {useState} from 'react'
import PropsBadge from './PropsBadge'

export default function Badge(){
const [inputs, setInput]=useState({
  firstName:'',
  lastName:'',
  email:'',
  placeOfBirth:'',
  phone:'',
  favoriteFood:'',
})
const [arrayForm, setArrayForm]=useState([])

function handleChange(event){
const {name,value}=event.target
setInput(prev =>{
  return {
    ...prev, 
    [name]:value
  }
})
}


function handleSubmit(event) {
  event.preventDefault()
  setInput({
    firstName:'',
    lastName:'',
    email:'',
    placeOfBirth:'',
    phone:'',
    favoriteFood:'',
})
  setArrayForm(prevData => [...prevData, {...inputs}])
}

const mappedForm=arrayForm.map(function(all){
  return <PropsBadge 
   firstName={all.firstName} 
   lastName={all.lastName}
   email={all.email}
   placeOfBirth={all.placeOfBirth}
   phone={all.phone}
   favoriteFood={all.favoriteFood}
   />
})

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input value={inputs.firstName}
        placeholder='firstName'
        name='firstName'
         onChange={handleChange}/>
        <input value={inputs.lastName}  
        placeholder='lastName'
        name='lastName'
        onChange={handleChange}/>
        <input value={inputs.email} 
        placeholder='email'
        name='email'
         onChange={handleChange}/>
        <input value={inputs.placeOfBirth} 
        placeholder='placeOfBirth'
        name='placeOfBirth' 
        onChange={handleChange}/>
        <input value={inputs.phone}  
        placeholder='phone'
        name='phone'
        onChange={handleChange}/>
        <input value={inputs.favoriteFood} 
        placeholder='favoriteFood'
        name='favoriteFood'
         onChange={handleChange}/>
         <button>submit</button>
      </form>
{mappedForm}
    </div>
  )
}