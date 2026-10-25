import React, { useState } from 'react'

const ChatArea = ({onSendMsg}) => {
  const [model, setModel]= useState("openai/gpt-3.5-turbo");
  const [prompt, setPrompt] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); 
    onSendMsg(prompt,model);
    setPrompt("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea placeholder='Enter your prompt' value={prompt} onChange={(e) => { setPrompt(e.target.value) }}></textarea>
        <button type='submit'>Send</button><br/>
        <label for="models">Select Models</label>
        <select name="models" value={model} onChange={(e)=>{setModel(e.target.value),sendModel(model)}}>
            <option value="nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free" >NVIDIA(Nemotron-3-nano)</option>
            <option value="nvidia/nemotron-3.5-super-vl:free" >NVIDIA(Nemotron-3.5-super)</option>
            <option value="google/gemma-4-26b-a4b-it:free" >Google(Gemma-4)</option>
        </select>
      </form>
    </div>
  )
}

export default ChatArea;