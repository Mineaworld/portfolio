import './globals.css';
import type { Metadata } from 'next';
import { Kantumruy_Pro } from 'next/font/google';
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const kantumruyPro = Kantumruy_Pro({ subsets: ['latin'], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: 'Dy Minea | Web Developer',
  description: 'Professional portfolio of Dy Minea, Web Developer specializing in React, Next.js and modern web technologies.',
  openGraph: {
    title: 'Dy Minea | Web Developer',
    description: 'Professional portfolio of Dy Minea, Web Developer specializing in React, Next.js and modern web technologies.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Dy Minea Portfolio',
    images: [
      {
        url: '/images/profile-pic.png',
        width: 800,
        height: 800,
        alt: 'Dy Minea Profile Picture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={kantumruyPro.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}