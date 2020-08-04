import React, {useContext} from 'react'
import {IssueContext} from './IssueProvider'

export default function App(){

const {theme,toggle}=useContext(IssueContext)
console.log(11111,theme)
  return (
    <div className={theme}>
      <button onClick={toggle}>clickme</button>
    </div>
  )
}