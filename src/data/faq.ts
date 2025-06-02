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
        answer: 'Our support team is available via email at support@pickleballjournal.com. The app is designed to be intuitive and easy to use, with clear navigation and helpful prompts throughout your journey.'
    },
    {
        question: "How do I start tracking my games?",
        answer: "Simply open the app and tap the \"+\" button to create your first journal entry. You can record game details, add notes about your performance, attach photos or videos, and track your equipment usage all in one place."
    },
    {
        question: "Can I track different types of games?",
        answer: "Yes! You can log various session types including games, drills, lessons, and practice sessions. Each entry can include game tracking with scores, effort ratings, and detailed notes about your experience."
    },
    {
        question: "How does the activity tracking work?",
        answer: "The app provides analytics on your playing patterns including activity over time, effort ratings, and game statistics. You can view trends in your play frequency and performance through visual charts and insights."
    },
    {
        question: "What equipment details can I track?",
        answer: "You can track all your pickleball gear including paddles, shoes, balls, bags, and accessories. For each item, you can log purchase dates, costs, serial numbers, add photos, track status changes (active/inactive/damaged/sold), and see which sessions you used each piece of equipment."
    },
    {
        question: "Does the app work with Apple Watch?",
        answer: "Yes! The companion Apple Watch app lets you quickly track games on your wrist. You can log game results, view your recent activity, and sync your data seamlessly with the iPhone app. All your Watch entries automatically appear in your main journal with full details."
    }
];