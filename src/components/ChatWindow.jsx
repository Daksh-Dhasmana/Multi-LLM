import React from 'react'
import ChatArea from './ChatArea'
import pushPrompt from '../Backend-Comms/Back'

const ChatWindow = (props) => {
  return (
    <div>
      <p>{props.result}</p>
    </div>
  )
}

export default ChatWindow
