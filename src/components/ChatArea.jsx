import { useState } from 'react'

const ChatArea = ({ onSendMsg }) => {
  const [model, setModel] = useState("nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free");
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!prompt.trim()) return;
    onSendMsg(prompt, model);
    setPrompt("");
  }

  return (
    <div className="p-3 border-t border-slate-800 bg-slate-900">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <textarea
          placeholder="Enter your prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows="3"
          className="w-full p-2 border border-slate-700 rounded text-sm bg-slate-800 text-slate-100 placeholder-slate-500 resize-none"
        />
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="models" className="text-xs font-medium text-slate-400">
              Model:
            </label>
            <select
              id="models"
              name="models"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="p-1 border border-slate-700 rounded text-xs bg-slate-800 text-slate-200"
            >
              <option value="nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free">NVIDIA(Nemotron-3-nano)</option>
              <option value="nvidia/nemotron-3.5-super-vl:free">NVIDIA(Nemotron-3.5-super)</option>
              <option value="google/gemma-4-26b-a4b-it:free">Google(Gemma-4)</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded text-sm font-medium"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatArea