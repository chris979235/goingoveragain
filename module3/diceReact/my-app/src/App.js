import React, {useState} from 'react'

export default function App() {
  const [numbers, setNumbers]=useState([1,2,3,4,5,6])

  function change(){
    setNumbers(numbers.map(num=>Math.floor(Math.random(num) * 6)))
  }

  return (
    <div>
      {numbers}
      <button onClick={change}>roll</button>
    </div>
  )
}
