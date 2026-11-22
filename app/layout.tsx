import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const googleSansFlex = localFont({
  src: "./fonts/GoogleSansFlex-Variable.ttf",
  variable: "--font-google-sans-flex",
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-pixelify",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "107 to 150: The NUST NET Playbook (NET-2027 Edition)",
  description:
    "An independent student guide sharing the exact preparation system, subject routines, and timed FLP review method used to jump from 107 to 150 in NUST NET Engineering & Computing.",
  keywords: [
    "NUST NET",
    "NET Engineering",
    "NUST Entry Test",
    "NET Playbook",
    "NET-2027",
    "KIPS FUNG",
    "NUST aggregate",
  ],
  authors: [{ name: "Independent NET Achiever" }],
  openGraph: {
    title: "107 to 150: The NUST NET Playbook (NET-2027 Edition)",
    description:
      "The exact preparation system, subject routines, and timed FLP review method to jump from 107 to 150 in NUST NET.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${googleSansFlex.variable} ${pixelifySans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F7F3EC] text-[#1B1713] font-sans selection:bg-[#1B1713] selection:text-[#F7F3EC]">
        {children}
      </body>
    </html>
  );
}
