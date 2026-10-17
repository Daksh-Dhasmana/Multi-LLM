import React, { useState } from 'react'
import pushPrompt from '../Backend-Comms/Back';

const ChatArea = ({onSendMsg}) => {
  const [prompt, setPrompt] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSendMsg(prompt);
    setPrompt("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea placeholder='Enter your prompt' value={prompt} onChange={(e) => { setPrompt(e.target.value) }}></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default ChatArea;
