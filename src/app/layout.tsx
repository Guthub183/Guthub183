import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import AnalyticsTracker from "@/components/analytics/AnalyticsTracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#121212" },
    { media: "(prefers-color-scheme: dark)", color: "#121212" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "K. Satya Pranav | AI/ML Enthusiast & Python Developer",
  description:
    "Portfolio of K. Satya Pranav - AI/ML enthusiast, Python Developer, and Software Engineer specializing in Deep Learning, NLP, and Computer Vision.",
  keywords: [
    "K. Satya Pranav",
    "Kachibhotla Satya Pranav",
    "AI/ML Developer",
    "Python Developer",
    "Open Source",
    "React",
    "Next.js",
    "Harvard CS50 AI",
    "CS50",
  ],
  authors: [{ name: "K. Satya Pranav" }],
  icons: {
    icon: "/99024517.jpeg",
    shortcut: "/99024517.jpeg",
    apple: "/99024517.jpeg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Guthub183.github.io",
    title: "K. Satya Pranav | AI/ML Enthusiast & Python Developer",
    description:
      "Portfolio of K. Satya Pranav - AI/ML enthusiast, Python Developer, and Software Engineer.",
    siteName: "K. Satya Pranav Portfolio",
    images: [
      {
        url: "https://github.com/Guthub183.png",
        width: 400,
        height: 400,
        alt: "K. Satya Pranav",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "K. Satya Pranav | AI/ML Enthusiast & Python Developer",
    description:
      "Portfolio of K. Satya Pranav - AI/ML enthusiast, Python Developer, and Software Engineer.",
    images: ["https://github.com/Guthub183.png"],
    creator: "@ksatyapranav",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}
