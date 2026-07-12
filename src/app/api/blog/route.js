import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const rssRes = await fetch('https://my-blog-tan-tau.vercel.app/rss.xml', { next: { revalidate: 3600 } });
    if (!rssRes.ok) throw new Error("Failed to fetch RSS");
    const rssText = await rssRes.text();

    const items = [];
    // A more robust regex approach for simple RSS items
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
    while ((match = itemRegex.exec(rssText)) !== null) {
      const itemContent = match[1];
      
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || itemContent.match(/<title>(.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : "Untitled";
      
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const link = linkMatch ? linkMatch[1] : "#";
      
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const date = pubDateMatch ? new Date(pubDateMatch[1]).toISOString().split('T')[0] : "Unknown Date";
      
      const descMatch = itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || itemContent.match(/<description>(.*?)<\/description>/);
      const desc = descMatch ? descMatch[1] : "";

      items.push({
        title,
        url: link,
        date,
        desc
      });
    }

    // Now populate the images
    const parsedPosts = items.map((p, i) => {
      const index = items.length - i;
      let img = `https://my-blog-tan-tau.vercel.app/banners/post${index}.svg`;
      if (index === 1) {
         img = `https://my-blog-tan-tau.vercel.app/banners/Post1.svg`;
      }
      return { ...p, img };
    });

    return NextResponse.json({ posts: parsedPosts });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
