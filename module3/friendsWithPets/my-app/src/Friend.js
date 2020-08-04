import React from 'react'
import Pet from './Pet'
export default function Friend(props) {
console.log(props,555)
const mappedPet=props.pets.map(all=><Pet name={all.name} breed={all.breed}/>)
  return (
    <div>
      <h1>{props.name}</h1>
  <h1>{props.age}</h1>
  {mappedPet}
    </div>
  )
}
