import type { Metadata } from "next";
import { Source_Sans_3, Manrope } from "next/font/google";
import { siteDetails } from '@/data/siteDetails';
import { GoogleAnalytics } from '@next/third-parties/google';

// Import global styles
import "@/app/globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Coming Soon | ${siteDetails.siteName}`,
  description: siteDetails.metadata.description,
};

export default function ComingSoonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} ${sourceSans.className} antialiased bg-white text-foreground`}>
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        {children}
      </body>
    </html>
  );
} 