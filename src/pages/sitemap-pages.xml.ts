/**
 * This Site's own page list for search engines (`/sitemap-pages.xml`). The
 * App's `/sitemap.xml` links here and lists the blog posts itself, so posts are
 * never listed here. Add, rename or remove a page: change PAGES in the same change.
 */
import {siteOrigin} from '../platform/api';

export const prerender = false; // answer per request, on the visitor's host

const PAGES = [
  '/',
  '/what-is-conflict-intelligence',
  '/seven-levels',
  '/your-path',
  '/challenge',
  '/beyond-resolution',
  '/childrens-book',
  '/conflict-exploration-kit',
  '/certification',
  '/community',
  '/community/guidelines',
  '/about',
  '/contact',
  '/blog',
  '/legal/privacy',
  '/legal/terms',
  '/legal/refunds-and-cancellations',
  '/legal/shipping',
];

export const GET = ({request}: {request: Request}) => {
  const base = siteOrigin(request.url);
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PAGES.map(
    p => `  <url><loc>${esc(new URL(p, base).href)}</loc></url>`
  ).join('\n')}\n</urlset>\n`;
  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
};
