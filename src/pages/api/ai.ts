import { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

type Response = {
  data: string | null
}

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_AI_KEY,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>,
) {
  try {
    const { text } = req.body
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            "Summarize content of developer's blog post. summarize whole contents within 150 letters. and response with korean language. don't use '#', '/' and '```' in your answer.",
        },
        {
          role: 'user',
          content: text,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
      top_p: 1,
    })

    res.status(200).json({ data: completion.choices[0].message.content })
  } catch (e) {
    console.log(e)
    res.status(500).json({ data: '요약이 제공되지 않는 문서입니다.' })
  }
}
