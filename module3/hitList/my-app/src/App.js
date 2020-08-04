import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function App() {

  const [hitList, setHitList]=useState([])

  useEffect(()=>{

    axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json')
    .then(response=>{
      setHitList(response.data)
    })
    .catch(err=>console.log(err))
  },[])

    console.log(2222,hitList)
  

const mappedList=hitList.map(function(all){
return <div><h1>{all.name} </h1> <img src={all.image}/> </div>
})

  return (
    <div>
      {mappedList}
    </div>
  )
}
