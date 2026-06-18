import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://pynthamil.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pynthamil Pavendan — Developer, CTF Player & Designer",
  description:
    "Portfolio of Pynthamil Pavendan (aka 3xpl01t) — a student developer passionate about web engineering, cybersecurity CTFs, UI/UX design, and building clean, intentional products.",
  keywords: [
    "Pynthamil Pavendan",
    "3xpl01t",
    "developer portfolio",
    "CTF player",
    "web developer",
    "cybersecurity",
    "UI UX designer",
    "Next.js",
    "React",
    "terminal portfolio",
  ],
  authors: [{ name: "Pynthamil Pavendan", url: siteUrl }],
  creator: "Pynthamil Pavendan",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Pynthamil Pavendan",
    title: "Pynthamil Pavendan — Developer, CTF Player & Designer",
    description:
      "Student developer passionate about web engineering, cybersecurity, and design. Explore my projects, CTF history, and more through an interactive terminal.",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Pynthamil Pavendan — Developer, CTF Player & Designer",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pynthamil Pavendan — Developer, CTF Player & Designer",
    description:
      "Student developer passionate about web engineering, cybersecurity, and design. Explore my projects, CTF history, and more through an interactive terminal.",
    images: ["/og-preview.png"],
    creator: "@pynthamil",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
