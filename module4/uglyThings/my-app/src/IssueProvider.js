import React, {useState} from 'react'
import PropsDisplay from './PropsDisplay'
import { v4 as uuidv4 } from 'uuid'
export const IssueContext = React.createContext();


export default function IssueProvider(props) {
const [things, setThings]=useState({
  image:'',
  title:'',
  description:'',
  _id:'',
})
const [arrayForm, setArrayForm]=useState([])


function handleChange(event){
const {name,value}=event.target
setThings(prev =>{
  return {
    ...prev, 
    [name]:value
  }
})
}


function handleSubmit(event) {
  event.preventDefault()
  setThings({
   image:'',
   title:'',
   description:'',
   _id:''
})
  setArrayForm(prevData => [...prevData, {...things, _id:uuidv4()}])
}

function deleted(_id){
  setArrayForm(prev=>prev.filter(ugly => ugly._id !== _id))
  }

const mappedForm=arrayForm.map(function(all){
  return <PropsDisplay
   image={all.image} 
   title={all.title}
   description={all.description}
  deleted={deleted}
  _id={all._id}
   />
})



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={things.image}
        placeholder='your image'
        name='image'
        type='img'
        onChange={handleChange}/>

        <input value={things.title}
        placeholder="title"
        name='title'
        onChange={handleChange}
        />

        <input value={things.description}
        placeholder='description'
        name='description'
        onChange={handleChange}
        />
        <button>clickme</button>
      </form>
      {mappedForm}
    </div>
  )
}
