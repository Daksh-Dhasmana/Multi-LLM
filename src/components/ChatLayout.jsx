import ChatWindow from './ChatWindow'
import ChatArea from './ChatArea'
import pushPrompt from '../Backend-Comms/Back'
import { useState } from 'react'
const ChatLayout = () => {
  const [result, setResult] = useState("");
  const [history,setHistory] =useState([]);
  const handleSendMsg=async(promptText,model)=>{
    try {
      const aiReply=await pushPrompt(promptText,model);
      setHistory([...history,promptText,aiReply]);
    setResult(aiReply)
    } catch (error) {
      console.error("API Error:", error);
      setHistory([...history,promptText,"Error Try again"]);
    }
  }
  return (
    <div>
      <ChatWindow history={history} />
      <ChatArea onSendMsg={handleSendMsg}/>
    </div>
  )
}

export default ChatLayout
