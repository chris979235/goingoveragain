import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import IssueProvider from './IssueProvider'
ReactDOM.render(
<IssueProvider>
  <App/>
</IssueProvider>
,document.getElementById('root'))