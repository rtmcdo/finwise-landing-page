import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Mike Rodriguez',
        role: '4.5 Rated Player',
        message: `${siteDetails.siteName} has completely transformed how I track my pickleball progress. After logging games for just 3 months, I identified weaknesses in my third-shot drop that I never noticed before.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Sarah Thompson',
        role: 'Tournament Director',
        message: `As someone who plays in multiple tournaments each month, ${siteDetails.siteName} has been a game-changer. I can track every match, see trends in my performance, and even monitor which paddles perform best in different conditions.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'David Chen',
        role: 'Recreational Player',
        message: `I started using ${siteDetails.siteName} as a beginner, and it's helped me improve faster than I expected. Being able to log my games and track my progress has kept me motivated, and the equipment tracking saved me from using a worn-out paddle for too long!`,
        avatar: '/images/testimonial-3.webp',
    },
];