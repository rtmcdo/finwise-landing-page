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
                    url: "#journal"
                },
                {
                    text: "Analytics",
                    url: "#analytics"
                },
                {
                    text: "Equipment",
                    url: "#equipment"
                },
                {
                    text: "Expenses",
                    url: "#expenses"
                },
                {
                    text: "Resources",
                    url: "#resources"
                }
            ]
        },
        {
            title: 'Quick Links',
            links: [
                {
                    text: "FAQ",
                    url: "#faq"
                },
                {
                    text: "Privacy Policy",
                    url: "#"
                },
                {
                    text: "Terms of Service",
                    url: "#"
                }
            ]
        }
    ] as FooterSection[],
    socialLinks: [
        {
            platform: "facebook",
            url: "https://facebook.com/pickleballjournal"
        },
        {
            platform: "instagram",
            url: "https://instagram.com/pickleballjournal"
        },
        {
            platform: "youtube",
            url: "https://youtube.com/@pickleballjournal"
        },
        {
            platform: "tiktok",
            url: "https://tiktok.com/@pickleballjournal"
        }
    ] as SocialLink[]
}