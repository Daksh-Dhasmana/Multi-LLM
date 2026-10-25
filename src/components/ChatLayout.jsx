import { useState } from 'react'
import ChatWindow from './ChatWindow'
import ChatArea from './ChatArea'
import pushPrompt from '../Backend-Comms/Back'

const ChatLayout = () => {
  const [history, setHistory] = useState([])
  const [isSending, setIsSending] = useState(false)

  const handleSendMsg = async (promptText, model) => {
    try {
      setIsSending(true)
      const aiReply = await pushPrompt(promptText, model)
      setHistory((prev) => [...prev, promptText, aiReply])
    } catch (error) {
      console.error('API Error:', error)
      setHistory((prev) => [...prev, promptText, 'Error: Failed to fetch response. Try again.'])
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="flex flex-col w-full max-w-3xl h-screen sm:h-[88vh] bg-zinc-950 sm:bg-zinc-900/30 sm:border sm:border-zinc-800/80 sm:rounded-xl overflow-hidden shadow-2xl shadow-black/60">
      <header className="px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-950/70 flex items-center shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500/80 ring-4 ring-emerald-500/10" />
          <h1 className="text-sm font-semibold tracking-tight text-zinc-100">
            Multi-LLM
          </h1>
        </div>
      </header>

      <ChatWindow history={history} isSending={isSending} />
      <ChatArea onSendMsg={handleSendMsg} isSending={isSending} />
    </div>
  )
}

export default ChatLayout