import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Joseph Bolujo",
    template: "%s — Joseph Bolujo",
  },
  description:
    "Hardware Engineer and Embedded Systems Developer specializing in UAV architecture, firmware, and PCB design.",
  icons: {
    icon: "/icon.gif",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Joseph Bolujo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-(--border) py-8 text-center text-sm text-(--muted)">
            <p>Built with Next.js · Designed with intent</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
