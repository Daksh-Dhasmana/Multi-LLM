import React from 'react'
import ChatArea from './components/ChatArea'
import ChatWindow from './components/ChatWindow'
import pushPrompt from './Backend-Comms/Back'
import { useState } from 'react'
const App = () => {
  const [result, setResult] = useState("Type to see reply");
  const handleSendMsg=async(promptText)=>{
    try {
      const aiReply=await pushPrompt(promptText);
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
export default App
