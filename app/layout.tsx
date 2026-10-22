import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PS5 DualSense on Linux | Steam Input Setup",
  description:
    "Set up your PS5 DualSense controller for Steam games on Linux. Install the right udev rules with a simple, open-source utility and start playing.",
  applicationName: "Steam Input Setup",
  keywords: [
    "PS5 DualSense Linux",
    "DualSense Steam Linux",
    "Steam Input Linux",
    "DualSense udev rules",
    "PS5 controller Linux",
    "Linux gaming",
  ],
  authors: [{ name: "SortOmega" }],
  creator: "SortOmega",
  publisher: "SortOmega",
  category: "technology",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Steam Input Setup",
    title: "PS5 DualSense on Linux | Steam Input Setup",
    description:
      "Set up your PS5 DualSense controller for Steam games on Linux with a simple, open-source utility.",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "PS5 DualSense on Linux | Steam Input Setup",
    description:
      "Set up your PS5 DualSense controller for Steam games on Linux with a simple, open-source utility.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
