import React from 'react';
import { IoCheckmarkCircleOutline } from 'react-icons/io5'; // Generic icon for bullets

// Create a wrapper component to convert IconType to JSX.Element
const CheckmarkIcon = React.createElement(IoCheckmarkCircleOutline);

// Define our own interface instead of using the one from types
interface BulletPoint {
    title: string;
    description: string;
    icon: JSX.Element;
}

interface Benefit {
    title: string;
    description: string;
    imageSrc: string;
    bullets: BulletPoint[];
}

export const benefits: Benefit[] = [
    {
        title: 'Your Personal Pickleball Journal',
        description: 'Create detailed journal entries for every match and practice session. Capture thoughts, improvements, and memorable moments from your pickleball journey.',
        imageSrc: '/screenshots/journal-entry-text.png',
        bullets: [
            { title: 'Write detailed match reflections and notes', description: '', icon: CheckmarkIcon },
            { title: 'Track your progress and improvements over time', description: '', icon: CheckmarkIcon },
            { title: 'Add photos and memories from each session', description: '', icon: CheckmarkIcon },
            { title: 'Set goals and monitor your development', description: '', icon: CheckmarkIcon }
        ],
    },
    {
        title: 'Log Every Match, Effortlessly',
        description: 'Keep a detailed record of all your games, including scores, opponents, locations, and notes. Never forget a match detail again.',
        imageSrc: '/screenshots/game-tracking-1.png',
        bullets: [
            { title: 'Track game scores, outcomes, opponents, and partners', description: '', icon: CheckmarkIcon },
            { title: 'Track Doubles, Singles, Mixed Doubles, and Skinny Singles', description: '', icon: CheckmarkIcon },
            { title: 'Win/Loss game tracking with Apple Watch companion app', description: '', icon: CheckmarkIcon },
            { title: 'Add paddle used on each game', description: '', icon: CheckmarkIcon }
        ],
    },
    {
        title: 'Analyze Performance, Gain Insights',
        description: 'Visualize your progress with insightful charts and statistics. Identify strengths, weaknesses, and trends in your gameplay over time.',
        imageSrc: '/screenshots/analytics-win-rate.png',
        bullets: [
            { title: 'Win/loss ratio tracking', description: '', icon: CheckmarkIcon },
            { title: 'Performance against specific opponents', description: '', icon: CheckmarkIcon },
            { title: 'Trends over time (e.g., monthly performance)', description: '', icon: CheckmarkIcon },
            { title: 'Identify areas for improvement', description: '', icon: CheckmarkIcon }
        ],
    },
    {
        title: 'Manage Your Gear Like a Pro',
        description: 'Keep track of your paddles, shoes, and other equipment. Track equipment status, add notes, and maintain a complete history of your gear.',
        imageSrc: '/screenshots/equipment.png',
        bullets: [
            { title: 'Log paddle purchase dates and details', description: '', icon: CheckmarkIcon },
            { title: 'Track which sessions you used paddles and shoes', description: '', icon: CheckmarkIcon },
            { title: 'Set status updates (Active, Inactive, Damaged, etc.)', description: '', icon: CheckmarkIcon },
            { title: 'Manage multiple sets of gear', description: '', icon: CheckmarkIcon }
        ],
    },
    // Added Expense Management section
    {
        title: 'Track Your Pickleball Spending',
        description: 'Monitor costs associated with your passion, from gear and apparel to tournament fees and travel.',
        imageSrc: '/screenshots/expense-analytics1.png',
        bullets: [
            { title: 'Log equipment and apparel purchases', description: '', icon: CheckmarkIcon },
            { title: 'Record tournament entry fees', description: '', icon: CheckmarkIcon },
            { title: 'Track travel and accommodation costs', description: '', icon: CheckmarkIcon },
            { title: 'Analyze spending patterns related to pickleball', description: '', icon: CheckmarkIcon }
        ],
    },
    // Added Resources section
    {
        title: 'Curated Pickleball Resources',
        description: 'Access helpful links, articles, and videos directly within the app to enhance your knowledge and game.',
        imageSrc: '/screenshots/resources.png',
        bullets: [
            { title: 'Browse curated YouTube channels from top instructors', description: '', icon: CheckmarkIcon },
            { title: 'Discover trusted equipment brands and reviews', description: '', icon: CheckmarkIcon },
            { title: 'Find strategy guides and community discussions', description: '', icon: CheckmarkIcon },
            { title: 'Access podcasts, blogs, and social media accounts', description: '', icon: CheckmarkIcon }
        ],
    },
]; 