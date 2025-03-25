import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

interface FAQ {
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Absolutely. We use bank-level encryption to protect your data and never store your login information. Plus, our biometric authentication adds an extra layer of security.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Absolutely! Your Finwise account syncs seamlessly across all your devices - smartphone, tablet, and computer.',
    },
    {
        question: 'Can I connect all my bank accounts?',
        answer: `Yes! ${siteDetails.siteName} supports connections with over 10,000 financial institutions worldwide. Simply log in through our secure portal to link your accounts.`
    },
    {
        question: 'Do I need any financial expertise to use the investing features?',
        answer: 'Not at all! Our expert-curated portfolios and educational resources make investing accessible to everyone, regardless of experience level.',
    },
    {
        question: 'What if I need help using the app?',
        answer: 'Our dedicated support team is available 24/7 via chat or email. Plus, we offer extensive in-app tutorials and a comprehensive knowledge base to help you make the most of Finwise.'
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
    },
    {
        question: "Can I share my stats with others?",
        answer: "Yes! You can share your progress, achievements, and stats with friends or on social media. You can also connect with other players to track your games together."
    }
];