import React from 'react'

export default function Pet(props) {
  return (
    <div>
      <p>pet name:{props.name}</p>
  <p>pet breed:{props.breed}</p>
    </div>
  )
}
