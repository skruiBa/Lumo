// app/api/generate-image/route.js

import { Client } from '@gradio/client';
import { request } from 'http';

export async function POST(req) {
  try {
    // Assuming you need to parse JSON from the request body
    const { prompt, seed, num_inference_steps, randomize_seed, width = 1024, height = 1024 } = await req.json();

    const requestMessage =
      ('Request to generate image:',
      {
        prompt,
        seed,
        randomize_seed,
        width,
        height,
        num_inference_steps
      });

    console.log(requestMessage);

    // Retrieve the token from environment variables
    const hfToken = process.env.HUGGINGFACE_TOKEN;

    // Ensure the token is defined
    if (!hfToken) {
      throw new Error('Hugging Face token is not defined in environment variables');
    }

    // Initialize the client
    const client = await Client.connect('black-forest-labs/FLUX.1-schnell', {
      hf_token: hfToken
    });

    const result = await client.predict('/infer', {
      prompt: prompt,
      seed: seed,
      randomize_seed: randomize_seed,
      width: width,
      height: height,
      num_inference_steps: num_inference_steps
    });
    console.log('result', result.data[0]);
    // You might want to check if the image is immediately available
    const imageUrl = result.data[0]?.url;

    if (!imageUrl) {
      throw new Error('Image URL is missing from the response');
    }
    // If you want to wait until the image is fully available (Optional)
    let imageAvailable = false;
    for (let i = 0; i < 5; i++) {
      // Retry up to 5 times
      const check = await fetch(imageUrl, { method: 'HEAD' });
      if (check.ok) {
        imageAvailable = true;
        break;
      }
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds before retry
    }
    if (!imageAvailable) {
      throw new Error('Image not available after retries');
    }

    // Send the response
    return new Response(JSON.stringify({ requestMessage, data: result.data }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache' // Disable caching
      }
    });
  } catch (error) {
    console.error('Error generating image:', error);
    return new Response(JSON.stringify({ message: 'Error generating image' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
