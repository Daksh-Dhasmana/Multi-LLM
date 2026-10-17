import axios from 'axios';

async function pushPrompt(prompt) {
  const { data } = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      model: 'xingchen-agi/xing4.0-29b-a4b:free',
      messages: [{ role: 'user', content: prompt }],
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

export default pushPrompt