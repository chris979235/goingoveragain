import React, {useState} from 'react'

export default function App() {
const [input, setInput]=useState({firstName:''})
const [array, setArray]=useState([])

console.log(array,777)


function handleChange(event) {
  const {name, value} = event.target
  setInput(prevInputData => {
      return {
          ...prevInputData,
          [name]: value
      }
  })
}

function handleSubmit(event) {
  event.preventDefault()
  setInput({firstName:''})
  setArray(prevData => [...prevData, {...input}])
}




  return (
    <div>
      <h1>{input.firstName}</h1>
      <form onSubmit={handleSubmit}>
        <input
        name="firstName" 
        value={input.firstName} 
        onChange={handleChange} 
        placeholder="First Name" 
        />
        <button>clickme</button>
      </form>
   
      { <ul>
       {array.map(function (person){
         return (
         <li> {person.firstName} </li>
         )
       })}
     </ul> }
      
    </div>
  )
}
