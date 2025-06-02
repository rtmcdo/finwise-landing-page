import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPlatformIconByName } from '@/utils';
import { footerData } from '@/data/footer';

export default function ComingSoonPage() {
  return (
    <>
      <div className="py-6 px-6 w-full bg-white">
        <h2 className="text-2xl font-bold">Pickleball Journal</h2>
      </div>

      <section className="relative flex items-center justify-center min-h-[calc(100vh-80px)] pb-12 pt-10 md:pt-20 px-5 bg-white overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
          <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">
            Track your pickleball journey.
          </h1>
          <p className="mt-4 text-foreground max-w-lg mx-auto">
            Analyze your progress, improve your game, and take your pickleball passion to the next level
          </p>
          
          <div className="relative mt-12 md:mt-16 flex items-center justify-center gap-4 md:gap-8">
            <div className="relative w-[300px] md:w-[384px] h-[400px] overflow-hidden rounded-xl shadow-lg">
              <Image
                src="/screenshots/journalwiththings.png"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                quality={100}
                priority={true}
                alt="Pickleball Journal App"
                className="z-10"
              />
            </div>
            <div className="relative w-[150px] md:w-[200px] aspect-square hidden md:block">
              <Image
                src="/media/watch-hero-1.png"
                fill
                style={{ objectFit: "contain" }}
                quality={100}
                priority={true}
                alt="Watch app"
                className="z-10"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center relative z-20 bg-white/70 py-8 px-4 rounded-lg shadow-sm">
            <p className="text-xl font-semibold text-gray-900">Coming Soon to the App Store!</p>
            <p className="mt-4 text-gray-700">
              Contact: <a href="mailto:info@pickleballjournal.com" className="text-blue-600 hover:underline font-medium">info@pickleballjournal.com</a>
            </p>
            
            <div className="mt-6 flex justify-center gap-4">
              {footerData.socialLinks.map((link) => (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label={`Follow us on ${link.platform}`}
                >
                  {getPlatformIconByName(link.platform)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 