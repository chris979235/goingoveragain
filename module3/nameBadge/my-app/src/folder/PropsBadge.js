import React from 'react'

export default function PropsBadge(props) {
  console.log(444,props)
  return (
    <div>
      <h1>firstName:{props.firstName}</h1>
      <h1>lastName:{props.lastName}</h1>
      <h1>email:{props.email}</h1>
      <h1>placeOfBirth:{props.placeOfBirth}</h1>
      <h1>phone:{props.phone}</h1>
      <h1>favoriteFood{props.favoriteFood}</h1>
    </div>
  )
}
