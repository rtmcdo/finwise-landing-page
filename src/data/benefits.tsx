import React from 'react';
import { FiBook, FiCalendar, FiCamera, FiBarChart2 as FiChart, FiClock, FiHeart, FiTrendingUp, FiUsers, FiBox, FiTag, FiList, FiRotateCw } from "react-icons/fi";

import { IBenefit } from "../types"

export const benefits: IBenefit[] = [
    {
        title: "Your Game, Documented.",
        description: "Log every drill, match, and win. Record reflections, partner performance, games played, and new people you've met—all with photos, videos, and smart tagging.",
        bullets: [
            {
                title: "Win/Loss Tracking",
                description: "Track your performance by session and over time.",
                icon: <FiBook size={26} />
            },
            {
                title: "Photo & Note Taking",
                description: "Add photos and detailed notes to each session.",
                icon: <FiCamera size={26} />
            },
            {
                title: "Partner Tracking",
                description: "Keep track of who you play with and how you perform together.",
                icon: <FiUsers size={26} />
            }
        ],
        imageSrc: "/screenshots/6F2F6E2F-C743-4D21-9CB9-A5418E92CF40_4_5005_c.jpeg"
    },
    {
        title: "Understand Your Progress.",
        description: "Visualize your play habits with a heatmap. Monitor win streaks, busiest days, and activity levels over time.",
        bullets: [
            {
                title: "Activity Heatmap",
                description: "See your activity patterns across 12 months.",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Streak Tracking",
                description: "Monitor your consistency and win streaks.",
                icon: <FiTrendingUp size={26} />
            },
            {
                title: "Daily Activity Levels",
                description: "Track your playing frequency and intensity.",
                icon: <FiChart size={26} />
            }
        ],
        imageSrc: "/screenshots/C5E3363B-0DBA-4C67-BBE2-87EC2700DF17_4_5005_c.jpeg"
    },
    {
        title: "Track Your Gear.",
        description: "Log paddles, shoes, balls, and gear purchases. Stay on top of what's active, retired, or replaced.",
        bullets: [
            {
                title: "Gear Categories",
                description: "Sort and organize all your equipment by type.",
                icon: <FiBox size={26} />
            },
            {
                title: "Purchase History",
                description: "Track when you bought each piece of gear.",
                icon: <FiTag size={26} />
            },
            {
                title: "Usage Tracking",
                description: "Monitor how long you've used each paddle.",
                icon: <FiRotateCw size={26} />
            }
        ],
        imageSrc: "/screenshots/CC098B95-EA43-4265-BA42-186CCBEC3522_4_5005_c.jpeg"
    },
]