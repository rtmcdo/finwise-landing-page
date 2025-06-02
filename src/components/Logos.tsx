import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoBookOutline, IoBarChartOutline } from 'react-icons/io5';
import { FaDollarSign, FaLink } from 'react-icons/fa';

const featureItems = [
    { text: 'Journal', icon: IoBookOutline, href: '#' },
    { text: 'Analytics', icon: IoBarChartOutline, href: '#' },
    { text: 'Equipment Management', icon: '/icons/noun-pickleball-6530092-304FFF.png', href: '#' },
    { text: 'Expense Management', icon: FaDollarSign, href: '#' },
    { text: 'Pickleball Resources', icon: FaLink, href: '#' },
];

const Logos: React.FC = () => {
    return (
        <section id="features-overview" className="py-20 md:py-32 px-5 bg-background">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-12 md:mb-16">
                Packed with Features for Pickleball Enthusiasts
            </h2>
            <div className="max-w-5xl mx-auto flex flex-wrap flex-row items-start justify-center gap-10 md:gap-16">
                {featureItems.map((item) => {
                    const isImagePath = typeof item.icon === 'string';
                    const IconComponent = !isImagePath ? item.icon : null;
                    const containerSizeClass = "w-[80px] h-[80px]";
                    const containerPaddingClass = isImagePath ? "p-0" : "p-4";
                    
                    return (
                        <Link href={item.href} key={item.text} className="flex flex-col items-center text-center w-28 group">
                            <div className={`mb-3 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors flex items-center justify-center ${containerSizeClass} ${containerPaddingClass}`}>
                                {isImagePath ? (
                                    <Image 
                                        src={item.icon as string} 
                                        alt={item.text} 
                                        width={76}
                                        height={76}
                                    />
                                ) : (
                                    IconComponent && <IconComponent className="w-8 h-8 text-secondary" />
                                )}
                            </div>
                            <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">{item.text}</span>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Logos;