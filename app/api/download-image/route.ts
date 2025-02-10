// app/api/download-image/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { src } = await request.json();

    // Fetch the image from the external source
    const externalResponse = await fetch(src);
    if (!externalResponse.ok) {
      return NextResponse.json({ error: 'Failed to fetch image from external source' }, { status: 500 });
    }

    // Convert the fetched response to an ArrayBuffer
    const arrayBuffer = await externalResponse.arrayBuffer();

    return new NextResponse(arrayBuffer, {
      headers: {
        'Content-Type': externalResponse.headers.get('Content-Type') || 'application/octet-stream',
        // Optionally set a filename here:
        'Content-Disposition': `attachment; filename="downloaded-image.png"`
      }
    });
  } catch (error: any) {
    console.error('Error in proxy:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
