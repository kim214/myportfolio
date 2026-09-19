import { Avatar_180, Avatar_250 } from "@assets/images";

// Importing SVGs as raw strings
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import GoogleIconRaw from "@assets/SVGs/Google.svg?raw";
import GmailIconRaw from "@assets/SVGs/Gmail.svg?raw";
import InstagramIconRaw from "@assets/SVGs/Instagram.svg?raw";

import { LogoIcon } from "@/assets/SVGs";
import { ThemeOptions } from "../../scripts/generateThemes";

// Theme Configuration
export const themeConfig = ThemeOptions.DEFAULT;

const GITHUB_URL = "https://github.com/kim214";
const LINKEDIN_URL = "https://www.linkedin.com/in/nathan-kimutai-163a9036b/";
export const EMAIL = "nathankimutai48@gmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/nathan_k.im/";
const SITE_URL = "https://nathankimutai.netlify.app/";

export const socialLinks = [
    {
        label: "GitHub",
        url: GITHUB_URL,
        icon: GithubIconRaw
    },
    {
        label: "LinkedIn",
        url: LINKEDIN_URL,
        icon: LinkedinIconRaw
    },
    {
        label: "Email",
        url: `mailto:${EMAIL}`,
        icon: GmailIconRaw
    },
    {
        label: "Instagram",
        url: INSTAGRAM_URL,
        icon: InstagramIconRaw
    },
    {
        label: "Portfolio",
        url: "https://nathankimutai.vercel.app/",
        icon: GoogleIconRaw
    }
];

// Site Configuration
export const siteConfig = {
    title: "Nathan Kimutai | Software Engineer & AI Engineer",
    description: "Nathan Kimutai Lotobo is a software, frontend, and AI engineer building intelligent applications, secure systems, and IoT solutions across web, mobile, and infrastructure.",
    canonical: SITE_URL,
    googleSiteVerification: "",
    keywords: "Nathan Kimutai, Nathan Kimutai Lotobo, Software Engineer, AI Engineer, Frontend Engineer, React Native Developer, Python Developer, IoT Engineer, Kabarak University, RecruitIQ, GreenTech, MahindAI, AIFAA, African Union Students Platform, Kenya",
    avatar: "https://avatars.githubusercontent.com/u/178503372?v=4",
    siteUrl: SITE_URL,
    author: "Nathan Kimutai",
    jobTitle: "Software Engineer & AI Engineer",
    sameAs: [
        GITHUB_URL,
        LINKEDIN_URL,
        INSTAGRAM_URL,
    ],
}

// Header Section
export const headerConfig = {
    logotext: "Portfolio.",
    actionButton: {
        text: "Resume",
        url: "/Nathan Kimutai Resume.pdf"
    },
}

// Hero Section
export const heroConfig = {
    salutation: "Hi👋🏻 My name is",
    firstName: "Nathan.",
    lastName: "",
    position: "Software Engineer & AI Engineer",
    tagLine: {
        prefixText: "I build",
        highlightedText: "Intelligent Systems",
        suffixText: "for the real world."
    },
    avatar: Avatar_180,
    links: socialLinks,
}

// About Section
export const aboutConfig = {
    aboutAvatar: Avatar_250,
    greeting: "Hey there! 👋🏻",
    description: [
        "I'm Nathan Kimutai Lotobo — a software, frontend, and AI engineer from Kenya. I design and ship applications that connect people, data, and devices, with a strong bias for systems that stay reliable and secure.",
        "I currently lead IT at the African Union Students Platform, overseeing digital systems, access control, and technology delivery. Before that I spent years as Lead Software and Systems Engineer at Uniglobe Access, and as a freelance developer shipping websites and apps for clients.",
        "My favourite work lives at the intersection of software, AI, and IoT — from smart greenhouse automation to crop-disease diagnosis and AI-assisted hiring. I like going deep: architecture, security, and that moment when a product finally feels right.",
        "I'm pursuing a BSc in Computer Science at Kabarak University. If you're building something ambitious in software, AI, or infrastructure, I'd love to be part of it."
    ],
}

// Contact Section
export const contactConfig = {
    heading: "Let's collaborate!",
    subtitle: "Contact me to discuss software, AI, or systems work",
    note: "or just to say hello. 😉",
    links: socialLinks,
}

// Footer Section
export const footerConfig = {
    logo: LogoIcon,
    title: "Nathan Kimutai | Portfolio.",
    links: socialLinks,
    copyrightText: `© Copyright 2024-${new Date().getFullYear()} Nathan Kimutai`
}
