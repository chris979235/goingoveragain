import React, {useState} from 'react'

export default function App() {
const [color, setColor]=useState('black')



function loopColor(){
  if(color==='black'){
    setColor('white')
  }else if(color==='white'){
    setColor('red')
  }else setColor('black')
}

  return (
    <div className={color}>
      {color}
      <button onClick={loopColor}>clickme</button>
    </div>
  )
}
