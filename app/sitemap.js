import { svc, legal, SITE } from '@/lib/data';
export const dynamic = 'force-static';
export default function sitemap() {
  return ['', 'about/', 'services/', 'contact/', ...Object.keys(legal).map((k) => k + '/'), ...svc.map((s) => `services/${s.slug}/`)].map((p) => ({ url: `${SITE}/${p}` }));
}
