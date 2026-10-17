import React from 'react'
import ChatArea from './components/ChatArea'
import ChatWindow from './components/ChatWindow'

const App = () => {
  const [result, setResult] = useState("");
  setResult(pushPrompt({ text: prompt }))
  return (
    <div>
      <ChatWindow result={result} />
      <ChatArea />
    </div>
  )
}

export default App
