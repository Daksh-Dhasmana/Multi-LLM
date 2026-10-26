import React, { useState } from 'react'

const ChatArea = ({onSendMsg}) => {
  const [prompt, setPrompt] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!prompt.trim()) return;
    onSendMsg(prompt);
    setPrompt("");
  }
  return (
    <div className="border-t border-zinc-200 bg-white p-4">
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-4xl flex-col gap-2">
        {/* Labeled correctly */}
        <label htmlFor="prompt-input" className="text-xs font-semibold text-zinc-600">
          Your Message
        </label>
        
        <div className="flex items-end gap-3">
          <textarea 
            id="prompt-input"
            placeholder='Type your prompt here...' 
            value={prompt} 
            onChange={(e) => { setPrompt(e.target.value) }}
            rows={1}
            className="min-h-[44px] flex-1 resize-none rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none"
          ></textarea>
          <button 
            type='submit'
            className="h-[44px] rounded-lg bg-zinc-900 px-5 text-sm font-medium text-white hover:bg-zinc-800"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatArea