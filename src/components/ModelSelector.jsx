import React from 'react'

const ModelSelector = () => {
  return (
    <div>
      <label for="models">Select Models</label>
        <select name="models">
            <option value="openai/gpt-3.5-turbo">OpenAI(GPT-3.5)</option>
            <option value="nvidia/nemotron-3.5-super-vl:free">NVIDIA(Nemotron-3.5-super)</option>
            <option value="google/gemma-4-26b-a4b-it:free">Google(Gemma-4)</option>
        </select>
      
    </div>
  )
}

export default ModelSelector
