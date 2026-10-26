import React from 'react'

const ChatWindow = (props) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-zinc-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Chat History
        </h2>

        {/* Empty state when no messages exist */}
        {props.history.length === 0 ? (
          <div className="flex h-64 flex-col items-center justify-center text-center">
            <p className="text-sm font-medium text-zinc-600">No messages yet</p>
            <p className="mt-1 text-xs text-zinc-400">Type a prompt below to start the conversation.</p>
          </div>
        ) : (
          <ul className="flex flex-col gap-3">
            {props.history.map((his, index) => {
              const isUser = index % 2 === 0;
              return (
                <li 
                  key={index} 
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <span className="mb-1 text-[11px] font-medium text-zinc-500">
                    {isUser ? 'You' : 'AI Assistant'}
                  </span>
                  <div className={`max-w-[80%] rounded-xl px-4 py-2 text-sm leading-relaxed ${
                    isUser 
                      ? 'bg-zinc-900 text-white' 
                      : 'bg-white text-zinc-800 border border-zinc-200 shadow-sm'
                  }`}>
                    {his}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}

export default ChatWindow