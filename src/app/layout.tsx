import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { siteConfig } from '@/config/site';

// next/font downloads the fonts at build time and serves them from your own
// domain: faster than the <link> tags in the Stitch HTML, and no layout shift.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | AI & ML Developer Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

// CHANGED from Stitch: the export set `maximum-scale=1, user-scalable=no`,
// which stops people from pinch-zooming. That hurts accessibility, so it is removed.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#111318',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // "dark" turns on Tailwind's dark mode (darkMode: 'class' in the config).
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-surface text-on-surface font-body-md text-body-md flex flex-col min-h-screen relative antialiased">
        {/* Header, drawer, bottom nav and footer are added in Stage 3. */}
        {children}
      </body>
    </html>
  );
}
