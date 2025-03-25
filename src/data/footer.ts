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
                    text: "Journal Entries",
                    url: "#journal"
                },
                {
                    text: "Activity Analytics",
                    url: "#analytics"
                },
                {
                    text: "Equipment Management",
                    url: "#equipment"
                }
            ]
        },
        {
            title: 'Resources',
            links: [
                {
                    text: "Help Center",
                    url: "#"
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
            platform: "twitter",
            url: "https://twitter.com/pickleballjournal"
        },
        {
            platform: "instagram",
            url: "https://instagram.com/pickleballjournal"
        }
    ] as SocialLink[]
}