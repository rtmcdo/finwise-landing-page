import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';
import spendingScreen from '../screenshots/phone-hero1.png';
import watchScreen from '../screenshots/watch-hero-1.png';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">{heroDetails.subheading}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div>
                <div className="relative mt-12 md:mt-16 flex items-center justify-center gap-4 md:gap-8">
                    <div className="relative w-[300px] md:w-[384px] h-[400px] overflow-hidden">
                        <Image
                            src={spendingScreen}
                            fill
                            style={{ objectFit: "cover", objectPosition: "top" }}
                            quality={100}
                            priority={true}
                            alt="Spending screen"
                            className="z-10"
                        />
                    </div>
                    <div className="relative w-[150px] md:w-[200px] aspect-square hidden md:block">
                        <Image
                            src={watchScreen}
                            fill
                            style={{ objectFit: "contain" }}
                            quality={100}
                            priority={true}
                            alt="Watch app"
                            className="z-10"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
