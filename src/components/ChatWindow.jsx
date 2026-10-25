import { useEffect, useRef } from 'react'

const ChatWindow = ({ history = [], isSending = false }) => {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history, isSending])

  if (history.length === 0 && !isSending) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center select-none">
        <div className="w-8 h-8 rounded border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 font-mono text-xs mb-3">
          ⌘
        </div>
        <p className="text-sm font-medium text-zinc-300 tracking-tight">No messages yet</p>
        <p className="text-xs text-zinc-500 mt-1 max-w-xs leading-normal">
          Select a model and enter your prompt below to start a conversation.
        </p>
      </div>
    )
  }

  return (
    <ul className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
      {history.map((his, index) => {
        const isUser = index % 2 === 0
        return (
          <li
            key={index}
            className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
          >
            <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 mb-1 px-1">
              {isUser ? 'You' : 'Assistant'}
            </span>
            <div
              className={`max-w-[88%] sm:max-w-xl px-4 py-2.5 rounded-lg text-sm leading-relaxed whitespace-pre-wrap break-words ${
                isUser
                  ? 'bg-zinc-800 text-zinc-100 border border-zinc-700/60'
                  : 'bg-zinc-900/90 text-zinc-200 border border-zinc-800'
              }`}
            >
              {his}
            </div>
          </li>
        )
      })}
      {isSending && (
        <li className="flex flex-col items-start">
          <span className="text-[10px] font-mono tracking-wider uppercase text-zinc-400 mb-1 px-1">
            Assistant
          </span>
          <div className="bg-zinc-900/90 text-zinc-400 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
            Generating response...
          </div>
        </li>
      )}
      <div ref={bottomRef} />
    </ul>
  )
}

export default ChatWindow