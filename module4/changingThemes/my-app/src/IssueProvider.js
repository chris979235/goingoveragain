import React, {useState} from 'react'

export const IssueContext = React.createContext();

export default function IssueProvider(props) {
const [theme, setTheme]=useState('black')

  function toggle(){
    setTheme(prev=>prev==='black'?"white":'black')
  }
  
  return (
    <IssueContext.Provider
      value={{
        theme,
        toggle
        
      }}
    >
      {props.children}
    </IssueContext.Provider>
  );
}
