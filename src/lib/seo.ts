import { SITE_URL } from "#constants";

/** Meta tags that differ from one page to the next. */
export function seo(params: { title: string; description: string; path: string }) {
  const { title, description, path } = params;

  return [
    { title },
    { name: "description", content: description },
    { property: "og:url", content: `${SITE_URL}${path}` },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
}
