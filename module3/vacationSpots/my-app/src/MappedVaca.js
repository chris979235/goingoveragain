import React from 'react'

export default function MappedVaca(props) {
  return (
    <div>
      {props.place}
      {props.price}
      {props.time}
    </div>
  )
}
