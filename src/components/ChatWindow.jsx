import React from 'react'
const ChatWindow = (props) => {
  return (
      <ul>
        {
          props.history.map((his,index)=>{
           return <li key={index}>{his}</li>
          })
        }
      </ul>
  )
}

export default ChatWindow
