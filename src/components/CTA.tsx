import React from 'react';
import { ctaData } from '@/data/cta';
import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="py-24 md:py-32">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{ctaData.heading}</h2>
                <p className="mt-4 text-foreground-accent">{ctaData.description}</p>
                <a href={ctaData.primaryCTA.href} className="mt-8 inline-block px-8 py-4 bg-primary hover:bg-primary-accent text-foreground font-semibold rounded-full transition-colors">
                    {ctaData.primaryCTA.text}
                </a>
            </div>
        </section>
    );
};

export default CTA