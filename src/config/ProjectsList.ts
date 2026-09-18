import LOGOS from "@assets/Logos"
import SCREENSHOTS from "@assets/Shots"
import MOCKUPS from "@assets/Mockup"
import SKILL_STACK from "@/constants/skillStack";
import { buildTechStack } from "@/utils/commonUtils";

//#region Types
export interface IProject {
    isHidden: boolean;

    name: string;
    shortDescription: string;
    description: string;

    logoImage: ImageMetadata;
    previewImage: ImageMetadata;
    deviceMockupImage: ImageMetadata;

    theme: string;
    status: "completed" | "development";

    liveUrl: string;
    sourceUrl: string;

    demoCredentials?: {
        email: string;
        password: string;
    };

    technologies: {
        title: string;
        description: string;
        icon: ImageMetadata;
    }[];

    features: {
        title: string;
        description: string;
    }[];

    logoSize: number;

    versions: {
        title: string;
        version: string;
        url: string;
    }[];
}

export interface ITechStack {
    title: string;
    description: string;
    icon: ImageMetadata;
}
//#endregion


//#region Tech Stack
export const TECH_STACK = {
    ...buildTechStack(SKILL_STACK.WebLanguagesStack),
    ...buildTechStack(SKILL_STACK.FrontendLibrariesStack),
    ...buildTechStack(SKILL_STACK.AIIoTStack),
    ...buildTechStack(SKILL_STACK.BackendApisStack),
    ...buildTechStack(SKILL_STACK.DatabaseStack),
    ...buildTechStack(SKILL_STACK.CloudDevOpsStack),
    ...buildTechStack(SKILL_STACK.ToolingTestingStack),
    ...buildTechStack(SKILL_STACK.IdesDesignStack),
};
//#endregion


const COMMON_FEATURES = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}


export const PROJECTS_LIST: IProject[] = [
    {
        isHidden: false,
        name: "GreenTech",
        shortDescription: "End-to-end smart greenhouse platform giving farmers real-time visibility and automated control from a mobile app.",
        description: "GreenTech is an automated smart-agriculture system that helps farmers monitor and control greenhouse conditions in real time. Irrigation, ventilation, and pest control respond to live environmental data, reducing manual checks and protecting yields. I led the project from concept through implementation, including engagement with the ICT Authority Kenya on platform registration. The work was recognized with a Bronze Medal at the China International College Students' Innovation Competition in 2025.",
        logoImage: LOGOS.GreenTechLogo,
        previewImage: SCREENSHOTS.GreenTechShots,
        deviceMockupImage: MOCKUPS.GreenTechMockup,
        theme: "#15803D",
        status: "completed",
        liveUrl: "https://greentechgreenhouse.vercel.app",
        sourceUrl: "https://github.com/kim214/greentechgreenhouse",
        technologies: [
            TECH_STACK.ReactNative,
            TECH_STACK.Nodejs,
            TECH_STACK.Python,
            TECH_STACK.MQTT,
            TECH_STACK.Arduino,
            TECH_STACK.RESTAPI,
            TECH_STACK.Docker,
        ],
        features: [
            {
                title: "Live Greenhouse Monitoring",
                description: "Track temperature, humidity, and other environmental signals in real time from a connected mobile experience."
            },
            {
                title: "Automated Irrigation & Ventilation",
                description: "Actuators respond to sensor data so watering and airflow adjust without constant manual intervention."
            },
            {
                title: "Pest Control Automation",
                description: "Operational routines help farmers react faster to greenhouse threats and protect crop yields."
            },
            {
                title: "Project Leadership",
                description: "Taken from concept to implementation as Project Lead, including stakeholder engagement with ICT Authority Kenya."
            },
            {
                title: "Award-Winning Innovation",
                description: "Bronze Medal at the China International College Students' Innovation Competition (2025)."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "RecruitIQ",
        shortDescription: "AI-powered hiring platform that scores and ranks applicants against role requirements, cutting manual screening time.",
        description: "RecruitIQ streamlines recruitment by automatically scoring and ranking applicants against a role's requirements. It generates detailed, easy-to-read candidate reports and supports AI-driven interviews so recruiters get a consistent, data-informed view of every applicant. The platform was pitched for the Execute Africa AI Challenge, with academic documentation covering system architecture and design, including UML, DFD, and conceptual framework diagrams.",
        logoImage: LOGOS.RecruitIQLogo,
        previewImage: SCREENSHOTS.RecruitIQShots,
        deviceMockupImage: MOCKUPS.RecruitIQMockup,
        theme: "#4F46E5",
        status: "completed",
        liveUrl: "https://recruitiq-self.vercel.app",
        sourceUrl: "https://github.com/kim214/RECRUITIQ",
        technologies: [
            TECH_STACK.JavaScript,
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs,
            TECH_STACK.Python,
            TECH_STACK.RESTAPI,
            TECH_STACK.Prisma,
        ],
        features: [
            {
                title: "Intelligent Candidate Matching",
                description: "Automatically scores and ranks applicants against role requirements so recruiters spend less time on manual screening."
            },
            {
                title: "AI-Driven Interviews",
                description: "Structured, consistent interviews give hiring teams a data-informed view of every applicant."
            },
            {
                title: "Recruiter Reports",
                description: "Clear candidate reports make shortlisting faster and easier to explain to stakeholders."
            },
            {
                title: "Employer, Applicant & Admin Portals",
                description: "Separate flows for posting roles, applying, and administering the hiring pipeline."
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "MahindAI",
        shortDescription: "Mobile and web assistant that diagnoses maize diseases from a leaf photo, with treatment guidance in English and Swahili.",
        description: "MahindAI helps maize farmers diagnose crop diseases from a simple leaf photo. It returns an instant diagnosis with severity and treatment guidance, plus an AI chat assistant for questions about diseases, pests, and farm management. A disease encyclopedia and seasonal planting calendar sit behind the experience, designed for real East African farming contexts with a bilingual English/Swahili interface.",
        logoImage: LOGOS.MahindAILogo,
        previewImage: SCREENSHOTS.MahindAIShots,
        deviceMockupImage: MOCKUPS.MahindAIMockup,
        theme: "#365314",
        status: "development",
        liveUrl: "https://github.com/kim214/Mahindiapp",
        sourceUrl: "https://github.com/kim214/Mahindiapp",
        technologies: [
            TECH_STACK.ReactNative,
            TECH_STACK.Python,
            TECH_STACK.TensorFlow,
            TECH_STACK.Nodejs,
            TECH_STACK.RESTAPI,
            TECH_STACK.JavaScript,
        ],
        features: [
            {
                title: "Leaf Photo Diagnosis",
                description: "Farmers capture a maize leaf image and receive an instant disease diagnosis with severity context."
            },
            {
                title: "Treatment Guidance",
                description: "Actionable recommendations help farmers respond quickly instead of waiting on distant expert visits."
            },
            {
                title: "AI Farm Chat",
                description: "Ask questions about diseases, pests, and farm management through a built-in assistant."
            },
            {
                title: "Bilingual Access",
                description: "English and Swahili interface designed for real-world East African farming contexts."
            },
            {
                title: "Encyclopedia & Calendar",
                description: "Disease knowledge base and seasonal planting calendar support decisions beyond a single diagnosis."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "AIFAA",
        shortDescription: "Offline-first mobile app that guides people through first-aid situations step by step, with multilingual support.",
        description: "AIFAA (AI First Aid Assistant) is an AI-enabled mobile app that walks users through first-aid situations in real time. It prioritizes clarity and responsible use of automated guidance, with offline-first functionality and multilingual support so it stays usable where connectivity is limited. The project was selected for the AfyaVentures bootcamp as part of a three-person team.",
        logoImage: LOGOS.AIFAALogo,
        previewImage: SCREENSHOTS.AIFAAShots,
        deviceMockupImage: MOCKUPS.AIFAAMockup,
        theme: "#0F766E",
        status: "development",
        liveUrl: "https://github.com/kim214/AIFAA",
        sourceUrl: "https://github.com/kim214/AIFAA",
        technologies: [
            TECH_STACK.ReactNative,
            TECH_STACK.Kotlin,
            TECH_STACK.Java,
            TECH_STACK.Python,
            TECH_STACK.AndroidStudio,
            TECH_STACK.RESTAPI,
        ],
        features: [
            {
                title: "Step-by-Step First Aid",
                description: "Clear, sequential guidance designed for stressful moments when people need instructions they can follow immediately."
            },
            {
                title: "Offline-First Design",
                description: "Core guidance remains available in areas with limited or unreliable connectivity."
            },
            {
                title: "Multilingual Support",
                description: "Language options help more people understand and act on first-aid instructions."
            },
            {
                title: "Responsible AI Guidance",
                description: "Built with an emphasis on safe, conservative automated advice rather than overconfident medical claims."
            },
            {
                title: "AfyaVentures Selection",
                description: "Selected to participate in the AfyaVentures bootcamp as part of a three-person team."
            },
            COMMON_FEATURES.Responsive,
        ],
        logoSize: 50,
        versions: []
    },
    {
        isHidden: false,
        name: "AUSP",
        shortDescription: "Digital home of the African Union Students Platform — events, membership, and student organising across the continent.",
        description: "As Head of IT for the African Union Students Platform, I lead the design, implementation, maintenance, and security of the organisation's digital systems. ausp.africa is the public platform for programmes such as the Annual International Pan Africa Youth Conference, membership, and continental student organising. The work covers application delivery, access management, and keeping organisational systems reliable for students across Africa.",
        logoImage: LOGOS.AUSPLogo,
        previewImage: SCREENSHOTS.AUSPShots,
        deviceMockupImage: MOCKUPS.AUSPMockup,
        theme: "#14532D",
        status: "completed",
        liveUrl: "https://ausp.africa/",
        sourceUrl: "https://github.com/kim214/africanunionstudentsplatform",
        technologies: [
            TECH_STACK.JavaScript,
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.Nodejs,
            TECH_STACK.RESTAPI,
            TECH_STACK.Git,
        ],
        features: [
            {
                title: "Continental Student Platform",
                description: "Public-facing site for AUSP programmes, news, and the Annual International Pan Africa Youth Conference."
            },
            {
                title: "Secure Systems Leadership",
                description: "IT ownership covering access control, application security, and protection of organisational data."
            },
            {
                title: "Event & Membership Flows",
                description: "Digital pathways for conference registration, community membership, and student organising."
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: []
    },
]
