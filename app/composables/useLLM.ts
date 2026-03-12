const BASE_URL = 'http://localhost:1234/v1'

interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

interface ChatResponse {
  choices: { message: { content: string } }[]
}

interface Model {
  id: string
  object: string
}

export function useLLM() {
  async function chat(messages: ChatMessage[], model = 'default') {
    const res = await $fetch<ChatResponse>(`${BASE_URL}/chat/completions`, {
      method: 'POST',
      body: { model, messages, temperature: 0.7 },
    })
    return res.choices[0]?.message.content ?? ''
  }

  async function listModels() {
    const res = await $fetch<{ data: Model[] }>(`${BASE_URL}/models`)
    return res.data
  }

  return { chat, listModels }
}
