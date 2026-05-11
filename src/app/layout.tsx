import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500"],
  display: "swap",
});

const description =
  "Operations consulting that ships AI solutions when they help — and tells you plainly when they don't.";

export const metadata: Metadata = {
  metadataBase: new URL("https://franciscocunha.ai"),
  title: "Francisco Cunha — AI Solutions Architect · Operations",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Francisco Cunha — AI Solutions Architect · Operations",
    description,
    url: "https://franciscocunha.ai",
    siteName: "Francisco Cunha",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Cunha — AI Solutions Architect · Operations",
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${garamond.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
