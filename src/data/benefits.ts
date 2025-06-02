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
        title: 'Log Every Match, Effortlessly',
        description: 'Keep a detailed record of all your games, including scores, opponents, locations, and notes. Never forget a match detail again.',
        imageSrc: '/screenshots/journalwiththings.png',
        bullets: [
            { title: 'Track game scores and outcomes', description: '', icon: CheckmarkIcon },
            { title: 'Record opponents and partners', description: '', icon: CheckmarkIcon },
            { title: 'Add notes and reflections on each game', description: '', icon: CheckmarkIcon },
            { title: 'Filter and search your game history', description: '', icon: CheckmarkIcon }
        ],
    },
    {
        title: 'Analyze Performance, Gain Insights',
        description: 'Visualize your progress with insightful charts and statistics. Identify strengths, weaknesses, and trends in your gameplay over time.',
        imageSrc: '/screenshots/C5E3363B-0DBA-4C67-BBE2-87EC2700DF17_4_5005_c.jpeg',
        bullets: [
            { title: 'Win/loss ratio tracking', description: '', icon: CheckmarkIcon },
            { title: 'Performance against specific opponents', description: '', icon: CheckmarkIcon },
            { title: 'Trends over time (e.g., monthly performance)', description: '', icon: CheckmarkIcon },
            { title: 'Identify areas for improvement', description: '', icon: CheckmarkIcon }
        ],
    },
    {
        title: 'Manage Your Gear Like a Pro',
        description: 'Keep track of your paddles, shoes, and other equipment. Monitor usage, set reminders, and know exactly when it\'s time for an upgrade.',
        imageSrc: '/screenshots/equipment.png',
        bullets: [
            { title: 'Log paddle purchase dates and details', description: '', icon: CheckmarkIcon },
            { title: 'Track usage hours or sessions', description: '', icon: CheckmarkIcon },
            { title: 'Set replacement reminders', description: '', icon: CheckmarkIcon },
            { title: 'Manage multiple sets of gear', description: '', icon: CheckmarkIcon }
        ],
    },
    // Added Expense Management section
    {
        title: 'Track Your Pickleball Spending',
        description: 'Monitor costs associated with your passion, from gear and apparel to tournament fees and travel.',
        imageSrc: '/screenshots/expense.png',
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
            { title: 'Quick links to official rulebooks', description: '', icon: CheckmarkIcon },
            { title: 'Recommended training drill videos', description: '', icon: CheckmarkIcon },
            { title: 'Strategy guides and articles', description: '', icon: CheckmarkIcon },
            { title: 'Links to trusted equipment reviews', description: '', icon: CheckmarkIcon }
        ],
    },
]; 