import React from 'react'
import ChatWindow from './ChatWindow'
import ChatArea from './ChatArea'
import pushPrompt from '../Backend-Comms/Back'
import { useState } from 'react'
const ChatLayout = () => {
  const [result, setResult] = useState("Type to see reply");
  const handleSendMsg=async(promptText,model)=>{
    try {
      const aiReply=await pushPrompt(promptText,model);
    setResult(aiReply)
    } catch (error) {
      console.error("API Error:", error);
      setResult("ERROR")
    }
  }
  return (
    <div>
      <ChatWindow result={result} />
      <ChatArea onSendMsg={handleSendMsg}/>
    </div>
  )
}

export default ChatLayout
