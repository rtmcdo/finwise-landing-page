import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

interface FAQ {
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Yes, absolutely. As a native Apple app, Pickleball Journal leverages the robust security features built into your iOS device. We don\'t process payments or communicate with external sites, and all your data is protected by your device\'s own security systems. Your pickleball stats and information remain private and secure.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Not currently, but it is on our roadmap to support data sync across multiple devices. We\'re working on a cloud sync feature that will allow you to access your pickleball stats and journal entries from any iOS device.',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our support team is available via email at support@pickleballjournal.com. Additionally, the app includes helpful tutorials and tips to get you started, and we regularly update our knowledge base with common questions and solutions.'
    },
    {
        question: "How do I start tracking my games?",
        answer: "Simply create an account and start logging your matches. You can record wins/losses, add notes about your performance, tag partners, and even attach photos or videos to capture key moments."
    },
    {
        question: "Can I track different types of games?",
        answer: "Yes! You can log singles matches, doubles matches, drills, and practice sessions. Each entry can be customized with specific details relevant to that type of play."
    },
    {
        question: "How does the activity tracking work?",
        answer: "Our app automatically generates a heatmap of your playing activity, tracks your streaks, and provides insights into your busiest playing days and times. This helps you understand your patterns and consistency."
    },
    {
        question: "What equipment details can I track?",
        answer: "You can track all your pickleball gear including paddles, shoes, balls, and accessories. For each item, you can log purchase dates, usage history, and retirement dates to help manage your equipment lifecycle."
    }
];