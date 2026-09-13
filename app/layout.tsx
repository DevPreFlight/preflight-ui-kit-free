import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevPreFlight Flat UI Kit — Free Community Edition (MIT)',
  description:
    'Free, modern, accessible flat white & blue UI component library for React 19, Next.js 15, and Tailwind CSS. 15 modular MIT primitives and dashboard widgets.',
  keywords: ['react 19', 'nextjs 15', 'tailwind css', 'ui kit', 'open source', 'flat ui', 'wcag aaa'],
  openGraph: {
    title: 'DevPreFlight Flat UI Kit — Free Community Edition',
    description: '15 Free, Accessible Flat UI Primitives & Dashboard Components for React 19 & Next.js 15.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-[#f8fafc] text-[#0f172a] font-sans antialiased selection:bg-[#dbeafe] selection:text-[#1e40af]">
        {children}
      </body>
    </html>
  );
}
