import { isLiveSite, siteUrl } from "../lib/site";

export default function robots() {
  return {
    rules: isLiveSite
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
