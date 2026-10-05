import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import {
  isLiveSite,
  organization,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "../lib/site";

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const display = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const socialImage = {
  url: "/assets/family-together.jpg",
  width: 1800,
  height: 2697,
  alt: "A family together, the kind of moment Doves repatriation cover is meant to protect",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: organization.name }],
  creator: organization.name,
  alternates: {
    canonical: "/",
  },
  robots: isLiveSite
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : {
        index: false,
        follow: false,
      },
  openGraph: {
    type: "website",
    locale: "en",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage.url],
  },
  icons: {
    icon: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a4f9c",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: organization.name,
      url: siteUrl,
      logo: `${siteUrl}/assets/logo.png`,
      email: organization.email,
      telephone: organization.telephone,
      address: {
        "@type": "PostalAddress",
        streetAddress: organization.streetAddress,
        addressLocality: organization.addressLocality,
        addressRegion: organization.addressRegion,
        postalCode: organization.postalCode,
        addressCountry: organization.addressCountry,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: organization.telephone,
          contactType: "customer service",
          areaServed: "GB",
          availableLanguage: "English",
        },
        {
          "@type": "ContactPoint",
          telephone: organization.mobile,
          contactType: "customer service",
          areaServed: "GB",
          availableLanguage: "English",
        },
      ],
      sameAs: ["https://doves.co.zw/", "https://www.doveslife.co.uk/"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`js ${body.variable} ${display.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
