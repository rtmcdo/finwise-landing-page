import Link from 'next/link';
import React from 'react';
import { FaFingerprint } from 'react-icons/fa';

import { siteDetails } from '@/data/siteDetails';
import { footerData } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <FaFingerprint className="min-w-fit w-5 h-5 md:w-7 md:h-7" />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        Track your pickleball journey with detailed stats and insights
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <div className="grid grid-cols-1 gap-6">
                        {footerData?.mainLinks?.map((section) => (
                            <div key={section.title}>
                                <h5 className="font-medium mb-2">{section.title}</h5>
                                <ul className="text-foreground-accent">
                                    {section.links?.map(link => (
                                        <li key={link.text} className="mb-2">
                                            <Link href={link.url || '#'} className="hover:text-foreground">
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

                    <a href="mailto:support@pickleballjournal.com" className="block text-foreground-accent hover:text-foreground">
                        Email: support@pickleballjournal.com
                    </a>

                    <div className="mt-5 flex items-center gap-4">
                        {footerData?.socialLinks?.map(({ platform, url }) => (
                            <Link
                                href={url || '#'}
                                key={platform}
                                aria-label={platform}
                                className="text-foreground-accent hover:text-foreground"
                            >
                                {getPlatformIconByName(platform)}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                <p className="text-sm mt-2 text-gray-500">Made with &hearts; by <a href="https://nexilaunch.com" target="_blank">Nexi Launch</a></p>
                <p className="text-sm mt-2 text-gray-500">UI kit by <a href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit" target="_blank">Youthmind</a></p>
            </div>
        </footer>
    );
};

export default Footer;
