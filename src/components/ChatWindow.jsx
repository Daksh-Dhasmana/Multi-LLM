const ChatWindow = ({ history = [] }) => {
  return (
    <ul className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-slate-900/50">
      {history.length === 0 ? (
        <li className="text-sm text-slate-500 text-center my-auto list-none">
          No messages yet. Send a prompt below!
        </li>
      ) : (
        history.map((his, index) => {
          const isUser = index % 2 === 0
          return (
            <li
              key={index}
              className={`p-3 rounded-lg text-sm max-w-md whitespace-pre-wrap shadow-sm ${
                isUser
                  ? 'ml-auto bg-indigo-600 text-white'
                  : 'mr-auto bg-slate-800 text-slate-100 border border-slate-700'
              }`}
            >
              <div
                className={`text-xs font-medium mb-1 ${
                  isUser ? 'text-indigo-200' : 'text-indigo-400'
                }`}
              >
                {isUser ? 'You' : 'AI Assistant'}
              </div>
              {his}
            </li>
          )
        })
      )}
    </ul>
  )
}

export default ChatWindow
