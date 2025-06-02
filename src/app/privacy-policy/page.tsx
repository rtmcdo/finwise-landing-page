import React from 'react';
import Container from '@/components/Container';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pt-32 pb-16">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-foreground mb-4 border-b-2 border-accent pb-4">
                        Privacy Policy for Pickleball Journal
                    </h1>
                    <p className="text-foreground mb-6">Effective Date: May 14, 2025</p>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-foreground mb-6">
                            This Privacy Policy describes how Pickleball Journal ("we", "our", or "us") collects, uses, and shares information about you when you use our mobile application ("Pickleball Journal" or the "App").
                        </p>
                        
                        <p className="text-foreground mb-8">
                            By using the App, you agree to the collection and use of information in accordance with this Privacy Policy. We are committed to protecting your personal information and your right to privacy.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Information We Collect</h2>
                        <p className="text-foreground mb-4">We collect the following types of information:</p>
                        <ul className="list-disc list-inside text-foreground mb-6 space-y-2">
                            <li><strong>Usage Data:</strong> We collect anonymous usage data through Google Analytics to understand how users interact with our App. This may include information such as the features you use, time spent on the App, and other diagnostic data.</li>
                            <li><strong>In-App Purchase Information:</strong> When you make in-app purchases, we receive information related to those transactions through the Apple App Store. This information is processed by Apple, and we only receive information necessary to validate and fulfill your purchases.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">How We Use Your Information</h2>
                        <p className="text-foreground mb-4">We use the information we collect to:</p>
                        <ul className="list-disc list-inside text-foreground mb-6 space-y-2">
                            <li>Provide, maintain, and improve the App</li>
                            <li>Process and manage your in-app purchases</li>
                            <li>Monitor and analyze usage patterns and trends</li>
                            <li>Enhance the user experience</li>
                            <li>Fix bugs and troubleshoot technical issues</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Third-Party Services</h2>
                        <p className="text-foreground mb-4">We use the following third-party services in our App:</p>
                        <ul className="list-disc list-inside text-foreground mb-6 space-y-2">
                            <li><strong>Google Analytics:</strong> We use Google Analytics to collect anonymous usage data. Google Analytics may collect information such as the features you use and how you interact with the App. For more information about how Google Analytics processes data, please visit: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></li>
                            <li><strong>Apple App Store:</strong> In-app purchases in our App are processed through Apple's App Store. Apple processes payment information according to their privacy policy: <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.apple.com/legal/privacy/en-ww/</a></li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Children's Privacy</h2>
                        <p className="text-foreground mb-4">
                            Our App may be used by children under 13 years of age. We do not knowingly collect personally identifiable information from children under 13. We only collect non-personal, anonymous usage data through Google Analytics, which helps us improve our App functionality.
                        </p>
                        <p className="text-foreground mb-6">
                            If you are a parent or guardian and you believe your child has provided us with personal information, please contact us so that we can take necessary actions.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Sharing and Disclosure</h2>
                        <p className="text-foreground mb-6">
                            We do not share or sell your personal information with third parties. The anonymous usage data collected through Google Analytics is used solely for improving our App and is not shared with any unaffiliated third parties.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Data Security</h2>
                        <p className="text-foreground mb-6">
                            We implement appropriate technical and organizational measures to protect the data we collect. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Your Rights</h2>
                        <p className="text-foreground mb-6">
                            Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. If you wish to exercise any of these rights, please contact us using the information below.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-foreground mb-6">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top of this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">Contact Us</h2>
                        <p className="text-foreground mb-2">If you have any questions about this Privacy Policy, please contact us at:</p>
                        <p className="text-foreground mb-8">support@pickleballjournal.com</p>

                        <p className="text-gray-500 italic mt-12">Last updated: May 14, 2025</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;