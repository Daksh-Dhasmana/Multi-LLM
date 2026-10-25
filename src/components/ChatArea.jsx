import { useState } from 'react'

const ChatArea = ({ onSendMsg, isSending = false }) => {
  const [model, setModel] = useState('nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free')
  const [prompt, setPrompt] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!prompt.trim() || isSending) return
    onSendMsg(prompt, model)
    setPrompt('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="p-3 sm:p-4 border-t border-zinc-800/80 bg-zinc-950/60 shrink-0">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 focus-within:border-zinc-700 focus-within:ring-1 focus-within:ring-zinc-700/60 transition-colors">
          <textarea
            placeholder="Type your prompt... (Enter to send, Shift+Enter for new line)"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={3}
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 resize-none focus:outline-none leading-relaxed"
          />

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-zinc-800/60 mt-1">
            <div className="flex items-center gap-2">
              <label htmlFor="models" className="text-xs font-mono text-zinc-400">
                Model:
              </label>
              <div className="relative">
                <select
                  id="models"
                  name="models"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="appearance-none bg-zinc-800 hover:bg-zinc-750 text-zinc-200 border border-zinc-700/80 rounded px-2.5 py-1 pr-7 text-xs font-mono focus:outline-none focus:border-zinc-500 transition-colors cursor-pointer"
                >
                  <option value="nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free" className="bg-zinc-900 text-zinc-200">
                    NVIDIA Nemotron-3-nano
                  </option>
                  <option value="nvidia/nemotron-3.5-super-vl:free" className="bg-zinc-900 text-zinc-200">
                    NVIDIA Nemotron-3.5-super
                  </option>
                  <option value="google/gemma-4-26b-a4b-it:free" className="bg-zinc-900 text-zinc-200">
                    Google Gemma-4
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-zinc-400">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!prompt.trim() || isSending}
              className="px-3.5 py-1.5 bg-zinc-100 hover:bg-white text-zinc-950 rounded text-xs font-medium transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChatArea