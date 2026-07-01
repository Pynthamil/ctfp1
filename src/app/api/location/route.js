import { NextResponse } from 'next/server';

export async function GET(request) {
  // Vercel populates these headers automatically in deployed environments
  const city = request.headers.get('x-vercel-ip-city') || 'Unknown City';
  const country = request.headers.get('x-vercel-ip-country') || 'Unknown Country';

  return NextResponse.json({
    city: city,
    country: country
  });
}
