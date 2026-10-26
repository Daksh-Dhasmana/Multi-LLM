import React from 'react'

const ChatWindow = (props) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-zinc-50">
      <div className="mx-auto max-w-4xl">
        {/* Section Label */}
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          Chat History
        </h2>

        <ul className="flex flex-col gap-3">
          {
            props.history.map((his, index) => {
             const isUser = index % 2 === 0;
             return (
               <li 
                 key={index} 
                 className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
               >
                 {/* Correct Label per message bubble */}
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
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default ChatWindow