import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!process.env.OPENAI_API_KEY && !process.env.VERCEL_TOKEN) {
    // If the key isn't provided yet, return a mock streaming response
    return new Response(
      '0:"It looks like you have not set your OPENAI_API_KEY in the .env.local file yet! Please add it to secure your AI chat."\n',
      { 
        status: 200, 
        headers: { 
          'Content-Type': 'text/plain; charset=utf-8',
          'x-vercel-ai-data-stream': 'v1'
        } 
      }
    );
  }

  // Uses OPENAI_API_KEY by default from the environment
  const result = streamText({
    model: openai('gpt-4o'),
    messages,
    system: "You are the Infinity Electric AI assistant, a helpful and professional customer service agent for a Maui-based electrical company. Be concise, polite, and reassuring."
  });

  return result.toDataStreamResponse();
}