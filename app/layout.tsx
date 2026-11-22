import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Jersey_15 } from "next/font/google";
import "./globals.css";

const googleSansFlex = localFont({
  src: "./fonts/GoogleSansFlex-Variable.ttf",
  variable: "--font-google-sans-flex",
  display: "swap",
});

const jersey15 = Jersey_15({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "NUST NET Playbook: How I Went From 107 to 150 (NET-2027)",
  description:
    "A simple step-by-step NUST NET study plan for Engineering & Computing. The routine I used to go from 107 to 150.",
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
    title: "NUST NET Playbook: How I Went From 107 to 150 (NET-2027)",
    description:
      "A simple step-by-step NUST NET study plan for Engineering & Computing. The routine I used to go from 107 to 150.",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    title: "NUST NET Playbook: How I Went From 107 to 150 (NET-2027)",
    description:
      "A simple step-by-step NUST NET study plan for Engineering & Computing. The routine I used to go from 107 to 150.",
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
      className={`${googleSansFlex.variable} ${jersey15.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FFFAEF] text-[#161310] font-sans selection:bg-[#161310] selection:text-[#FFFAEF]">
        {children}
      </body>
    </html>
  );
}
