export async function getServerSideProps({ res }) {
  let urls = "";

  for (let i = 500001; i <= 500050; i++) {
    urls += `<url>
      <loc>https://yourdomain.com/pincode/${i}</loc>
    </url>`;
  }

  res.setHeader("Content-Type", "text/xml");
  res.write(`<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>https://pincode-search-kohl.vercel.app/pincode/500001</loc>
  </url>

  <url>
    <loc>https://pincode-search-kohl.vercel.app/pincode/500002</loc>
  </url>

  <url>
    <loc>https://pincode-search-kohl.vercel.app/pincode/500003</loc>
  </url>

</urlset>

