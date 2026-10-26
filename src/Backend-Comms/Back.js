import axios from 'axios';

async function pushPrompt(prompt) {
  const { data } = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      // Use 'models' (plural) for a fallback chain
      models: [
        "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
        "nvidia/nemotron-3.5-super-vl:free",
        "google/gemma-4-26b-a4b-it:free",
        "recursive/flint-v1.0:free",
        "baseten/mammoth-1:free",
        "baseten/elephant-1:free"
      ],
      messages: [{ role: 'user', content: prompt }],
      provider: {
        allow_fallbacks: true
      }
    },
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return data.choices[0].message.content;
}

export default pushPrompt;