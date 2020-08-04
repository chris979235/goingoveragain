import React from 'react'
import friends from './friends'
import Friend from './Friend'

export default function FriendList(){

const mapped=friends.map(newmap=> <Friend name={newmap.name} age={newmap.age} pets={newmap.pets}/> )

  return(
    <div>
      {mapped}
    </div>
  )
}