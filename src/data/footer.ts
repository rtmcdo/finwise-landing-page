interface FooterLink {
    text: string;
    url: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

interface SocialLink {
    platform: string;
    url: string;
}

export const footerData = {
    mainLinks: [
        {
            title: 'Features',
            links: [
                {
                    text: "Journal",
                    url: "/#journal"
                },
                {
                    text: "Game Tracking",
                    url: "/#game-tracking"
                },
                {
                    text: "Analytics",
                    url: "/#analytics"
                },
                {
                    text: "Equipment",
                    url: "/#equipment"
                },
                {
                    text: "Expenses",
                    url: "/#expenses"
                },
                {
                    text: "Resources",
                    url: "/#resources"
                }
            ]
        },
        {
            title: 'Quick Links',
            links: [
                {
                    text: "FAQ",
                    url: "/#faq"
                },
                {
                    text: "Privacy Policy",
                    url: "/privacy-policy"
                }
            ]
        }
    ] as FooterSection[],
    socialLinks: [
        {
            platform: "facebook",
            url: "https://www.facebook.com/pickleball.journal"
        },
        {
            platform: "instagram",
            url: "https://www.instagram.com/pickleball.journal"
        },
        {
            platform: "x",
            url: "https://x.com/PickleballJourn"
        },
        {
            platform: "youtube",
            url: "https://youtube.com/@pickleballjournal_app"
        },
        {
            platform: "tiktok",
            url: "https://www.tiktok.com/@pickleball.journal"
        },
        {
            platform: "threads",
            url: "https://www.threads.net/@pickleball.journal"
        }
    ] as SocialLink[]
}