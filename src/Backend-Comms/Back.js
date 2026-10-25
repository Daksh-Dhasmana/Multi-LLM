import axios from 'axios';

async function pushPrompt(prompt,models) {
  const { data } = await axios.post(
    'https://openrouter.ai/api/v1/chat/completions',
    {
      model: models,
      messages: [{ role: 'user', content: prompt }],
      "provider":{
      "allow_fallbacks": true
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

export default pushPrompt