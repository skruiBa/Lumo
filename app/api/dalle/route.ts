import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI client with your API key
const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON request
    const { prompt, selectedSize, hdPrompt, vividPrompt } = await request.json();
    console.log(`Prompt: ${prompt}, Size: ${selectedSize}, HD: ${hdPrompt}, Vivid: ${vividPrompt}`);

    // Generate image using OpenAI
    const image = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: selectedSize,
      quality: hdPrompt,
      style: vividPrompt
    });

    console.log('Generated image URL:', image.data[0].url);

    // Return the image URL in the response
    return NextResponse.json({ image: image.data[0].url });
  } catch (error: any) {
    console.error('Error calling OpenAI:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
