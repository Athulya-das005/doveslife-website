/**
 * Set NEXT_PUBLIC_SITE_URL to the live domain before launch.
 * Canonical links, the sitemap, and social previews all use this address.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteName = "Doves";

export const siteTitle = "Doves | Repatriation & Doves Global Plan";

export const siteDescription =
  "Doves Global Plan: funeral and repatriation cover for Zimbabweans living abroad. Doves handles documentation from start to finish, plus international remittances.";

export const isLiveSite = !/localhost|127\.0\.0\.1/.test(siteUrl);

export const organization = {
  name: "Doves Holdings",
  email: "contactcenter@doves.co.zw",
  telephone: "+442038851002",
  mobile: "+447387940626",
  streetAddress: "Unit 17f, The Lansbury Estates, 102 Lower Guildford Road",
  addressLocality: "Knaphill, Woking",
  addressRegion: "Surrey",
  postalCode: "GU21 2EP",
  addressCountry: "GB",
};
