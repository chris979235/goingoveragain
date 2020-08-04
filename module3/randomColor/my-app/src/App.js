import React, {useState, useEffect} from 'react'
import axios from 'axios'
export default function App(){

  const [color, setColor]=useState([])

  useEffect(()=>{
    axios.get('http://www.colr.org/json/colors/random/7 ')
    .then(response=>{
      setColor(response.data.colors[0].hex)
    })
    .catch(err=>console.log(err))
  })

  console.log(color,444)

  return (
    <div  style={{backgroundColor: `#${color}`}}>{color}</div>
  )
}