/**
 * Set NEXT_PUBLIC_SITE_URL to the live domain before launch.
 * Canonical links, the sitemap, and social previews all use this address.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteName = "Doves";

export const siteTitle = "Doves | Repatriation & Diaspora Plan";

export const siteDescription =
  "Repatriation and diaspora funeral cover for Zimbabweans living abroad. Doves handles documentation from start to finish, plus international remittances.";

export const isLiveSite = !/localhost|127\.0\.0\.1/.test(siteUrl);

export const organization = {
  name: "Doves Holdings",
  email: "contactcenter@doves.co.zw",
  telephone: "+263242774013",
  streetAddress: "157 & 159 Harare St",
  addressLocality: "Harare",
  addressCountry: "ZW",
};
