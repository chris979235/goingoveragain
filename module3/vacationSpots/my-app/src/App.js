import React from 'react'
import vacationSpots from './vacationSpots'
import Mappedvaca from './MappedVaca'

export default function App() {
  let mapped=vacationSpots.map(newmap=>< Mappedvaca place={newmap.place} price={newmap.price} time={newmap.timeToGo} />)
  return (
    <div>
      {mapped}
    </div>
  )
}
