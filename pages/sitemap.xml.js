export async function getServerSideProps({ res }) {
  let urls = '';

  for (let i = 1; i <= 1000; i++) {
    urls += `
      <url>
        <loc>https://pincode-search-kohl.vercel.app/pincode/${i}</loc>
      </url>`;
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return null;
}

