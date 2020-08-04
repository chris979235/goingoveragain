import React, {useState} from 'react'

export default function PropsDisplay(props) {
const [inputs, setInputs]=useState({
  images:'',
  title:'',
  description:'',
})
 
function handleChange(event){
  const {name,value}=event.target
  setInputs(prev =>{
    return {
      ...prev, 
      [name]:value
    }
  })
  }

  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <img src={props.image} alt='ugly'/>
      <button onClick={()=>props.deleted(props._id)}>delete me</button>
      
    </div>
  )
}
