import { useState } from 'react'
import ChatWindow from './ChatWindow'
import ChatArea from './ChatArea'
import pushPrompt from '../Backend-Comms/Back'

const ChatLayout = () => {
  const [history, setHistory] = useState([]);

  const handleSendMsg = async (promptText, model) => {
    try {
      const aiReply = await pushPrompt(promptText, model);
      setHistory((prev) => [...prev, promptText, aiReply]);
    } catch (error) {
      console.error("API Error:", error);
      setHistory((prev) => [...prev, promptText, "Error Try again"]);
    }
  }

  return (
    <div className="flex flex-col w-full max-w-2xl h-full bg-slate-900 border border-slate-800 rounded-lg shadow-sm overflow-hidden">
      <header className="p-3 border-b border-slate-800 text-center font-semibold text-indigo-400">
        ⚡ Multi-LLM
      </header>
      <ChatWindow history={history} />
      <ChatArea onSendMsg={handleSendMsg} />
    </div>
  )
}

export default ChatLayout