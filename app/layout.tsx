import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
    "FAST entry test",
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
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
        {children}
      </body>
    </html>
  );
}
