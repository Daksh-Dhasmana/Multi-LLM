import React from 'react'
const ChatWindow = (props) => {
  return (
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <ul className="mx-auto flex max-w-4xl flex-col gap-4">
          {
            props.history.map((his,index)=>{
             const isUser = index % 2 === 0;
             return (
               <li 
                 key={index} 
                 className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
               >
                 <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                   isUser 
                     ? 'bg-zinc-800 text-zinc-100 border border-zinc-700/50' 
                     : 'bg-zinc-900 text-zinc-300 border border-zinc-800'
                 }`}>
                   {his}
                 </div>
               </li>
             )
            })
          }
        </ul>
      </div>
  )
}

export default ChatWindow