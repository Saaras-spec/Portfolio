import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saarasbisht.dev"),
  title: "Saaras Bisht — Full-Stack Developer & Software Engineer",
  description:
    "High-end personal portfolio of Saaras Bisht: Full-Stack Developer, Creative Engineer, and Systems Architect. Specialized in Next.js, TypeScript, and modern web applications.",
  keywords: [
    "Saaras Bisht",
    "Creative Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Software Portfolio"
  ],
  authors: [{ name: "Saaras Bisht", url: "https://saarasbisht.dev" }],
  creator: "Saaras Bisht",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saarasbisht.dev",
    title: "Saaras Bisht — Full-Stack Developer & Software Engineer",
    description: "Architecting high-performance digital products, intelligent systems, and fluid web experiences.",
    siteName: "Saaras Bisht Portfolio",
    images: [
      {
        url: "/saaras.jpg",
        width: 1200,
        height: 630,
        alt: "Saaras Bisht Portfolio Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Saaras Bisht — Full-Stack Developer & Software Engineer",
    description: "Architecting high-performance digital products, intelligent systems, and fluid web experiences.",
    creator: "@saarasbisht",
    images: ["/saaras.jpg"]
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08080a" },
    { media: "(prefers-color-scheme: light)", color: "#f8f9fa" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen selection:bg-[#d4ff00] selection:text-black">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
