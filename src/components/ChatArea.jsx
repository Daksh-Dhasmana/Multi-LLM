import React, { useState } from 'react'

const ChatArea = ({onSendMsg}) => {
  const [prompt, setPrompt] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSendMsg(prompt);
    setPrompt("")
  }
  return (
    <div className="border-t border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur">
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-4xl items-end gap-3">
        <textarea 
          placeholder='Enter your prompt...' 
          value={prompt} 
          onChange={(e) => { setPrompt(e.target.value) }}
          rows={1}
          className="max-h-32 min-h-[48px] flex-1 resize-none rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-500 shadow-inner focus:border-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-700"
        ></textarea>
        <button 
          type='submit'
          className="inline-flex h-[48px] items-center justify-center rounded-xl bg-zinc-100 px-5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200 active:scale-95"
        >
          Send
        </button><br/>
      </form>
    </div>
  )
}

export default ChatArea;