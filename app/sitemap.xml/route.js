export async function GET() {
  let urls = '';

  for (let i = 1; i <= 50000; i++) {
    urls += `
      <url>
        <loc>https://pincode-search-kohl.vercel.app/pincode/${i}</loc>
      </url>`;
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}


