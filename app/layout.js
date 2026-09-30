import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Doves | Repatriation & Diaspora Plan",
  description:
    "Doves assists bereaved families to repatriate or expatriate their loved ones, with a diaspora plan and international remittances for Zimbabweans abroad.",
  icons: { icon: "/assets/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`js ${body.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
