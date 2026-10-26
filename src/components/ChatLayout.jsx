import ChatWindow from './ChatWindow'
import ChatArea from './ChatArea'
import pushPrompt from '../Backend-Comms/Back'
import { useState } from 'react'
const ChatLayout = () => {
  const [result, setResult] = useState("");
  const [history,setHistory] =useState([]);
  const handleSendMsg=async(promptText)=>{
    try {
      const aiReply=await pushPrompt(promptText);
      setHistory([...history,promptText,aiReply]);
    setResult(aiReply)
    } catch (error) {
      console.error("API Error:", error);
      setHistory([...history,promptText,"Error Try again"]);
    }
  }
  return (
    <div className="flex h-screen w-full flex-col bg-zinc-950 font-sans text-zinc-100 antialiased selection:bg-zinc-800">
      <ChatWindow history={history} />
      <ChatArea onSendMsg={handleSendMsg}/>
    </div>
  )
}

export default ChatLayout