import SKILLS from "@/assets/skills";

// Type definition
export interface ISkill {
    name: string;
    description: string;
    icon: ImageMetadata;
    link: string;
}

// #region Web Fundamentals & Languages
export const WebLanguagesStack = [
    {
        name: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: SKILLS.HtmlIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: SKILLS.CssIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: SKILLS.JsIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "Python",
        description: "High-level, general-purpose programming language focused on readability, automation, and AI workflows.",
        icon: SKILLS.PythonIcon,
        link: "https://www.python.org/",
    },
    {
        name: "Java",
        description: "Object-oriented programming language widely used for enterprise, Android, and backend applications.",
        icon: SKILLS.JavaIcon,
        link: "https://www.oracle.com/java/",
    },
    {
        name: "Kotlin",
        description: "Modern language for Android and multiplatform development, fully interoperable with Java.",
        icon: SKILLS.KotlinIcon,
        link: "https://kotlinlang.org/",
    },
    {
        name: "C",
        description: "Foundational systems language used for low-level programming, embedded work, and performance-critical code.",
        icon: SKILLS.CIcon,
        link: "https://en.cppreference.com/w/c",
    },
    {
        name: "SQL",
        description: "Structured query language for defining, querying, and securing relational data.",
        icon: SKILLS.MysqlIcon,
        link: "https://www.w3schools.com/sql/",
    },
] as const;
// #endregion

// #region Frontend & UI Libraries
export const FrontendLibrariesStack = [
    {
        name: "React Native",
        description: "Cross-platform framework for building native mobile apps with a React programming model.",
        icon: SKILLS.ReactIcon,
        link: "https://reactnative.dev/",
    },
    {
        name: "React.js",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: SKILLS.ReactIcon,
        link: "https://react.dev/",
    },
] as const;
// #endregion

// #region AI, Data & IoT
export const AIIoTStack = [
    {
        name: "TensorFlow",
        description: "Open-source platform for building and deploying machine learning models.",
        icon: SKILLS.TensorFlowIcon,
        link: "https://www.tensorflow.org/",
    },
    {
        name: "Arduino",
        description: "Open-source hardware and software platform for prototyping IoT and automation systems.",
        icon: SKILLS.ArduinoIcon,
        link: "https://www.arduino.cc/",
    },
    {
        name: "MQTT",
        description: "Lightweight publish/subscribe protocol for IoT telemetry, sensors, and device control.",
        icon: SKILLS.MqttIcon,
        link: "https://mqtt.org/",
    },
] as const;
// #endregion

// #region Backend & APIs
export const BackendApisStack = [
    {
        name: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architectures.",
        icon: SKILLS.NodeIcon,
        link: "https://nodejs.org/",
    },
    {
        name: "REST API",
        description: "Architectural style for designing networked applications using standardized HTTP methods and resources.",
        icon: SKILLS.RestApiIcon,
        link: "https://restfulapi.net/",
    },
    {
        name: "Prisma",
        description: "Next-generation ORM for Node.js and TypeScript, simplifying database access and schema management.",
        icon: SKILLS.PrismaIcon,
        link: "https://www.prisma.io/",
    },
] as const;
// #endregion

// #region Databases, Caching & ORM
export const DatabaseStack = [
    {
        name: "MySQL",
        description: "Open-source relational database management system for structured data.",
        icon: SKILLS.MysqlIcon,
        link: "https://www.mysql.com/",
    },
    {
        name: "PostgreSQL",
        description: "Advanced open-source relational database with strong SQL compliance and extensibility.",
        icon: SKILLS.PostgresIcon,
        link: "https://www.postgresql.org/",
    },
] as const;
// #endregion

// #region Cloud, Storage & DevOps
export const CloudDevOpsStack = [
    {
        name: "Docker",
        description: "Containerization platform for packaging applications and their dependencies into portable containers.",
        icon: SKILLS.DockerIcon,
        link: "https://www.docker.com/",
    },
    {
        name: "Git",
        description: "Distributed version control system for tracking changes and collaborating on code.",
        icon: SKILLS.GitIcon,
        link: "https://git-scm.com/",
    },
    {
        name: "GitHub",
        description: "Code hosting platform for Git repositories with collaboration and CI/CD features.",
        icon: SKILLS.GithubIcon,
        link: "https://github.com/",
    },
] as const;
// #endregion

// #region Tooling, Testing & Observability
export const ToolingTestingStack = [
    {
        name: "npm",
        description: "Package manager for JavaScript, used to install and manage project dependencies.",
        icon: SKILLS.NpmIcon,
        link: "https://www.npmjs.com/",
    },
    {
        name: "JSON",
        description: "Lightweight data-interchange format widely used for APIs, configuration, and structured data.",
        icon: SKILLS.JsonIcon,
        link: "https://www.json.org/",
    },
    {
        name: "YAML",
        description: "Human-readable data serialization format commonly used for configuration files.",
        icon: SKILLS.YamlIcon,
        link: "https://yaml.org/",
    },
    {
        name: "Markdown",
        description: "Lightweight markup language for formatting documentation, notes, and content in plain text.",
        icon: SKILLS.MarkdownIcon,
        link: "https://www.markdownguide.org/",
    },
] as const;
// #endregion

// #region IDEs & Design Tools
export const IdesDesignStack = [
    {
        name: "Android Studio",
        description: "Official IDE for Android development with integrated tools for building and profiling apps.",
        icon: SKILLS.AndroidStudioIcon,
        link: "https://developer.android.com/studio",
    },
    {
        name: "VS Code",
        description: "Lightweight, extensible source-code editor with rich ecosystem and debugging support.",
        icon: SKILLS.VsCodeIcon,
        link: "https://code.visualstudio.com/",
    },
    {
        name: "Figma",
        description: "Collaborative interface design tool for creating UI designs, prototypes, and design systems.",
        icon: SKILLS.FigmaIcon,
        link: "https://www.figma.com/",
    },
] as const;
// #endregion

export default {
    WebLanguagesStack,
    FrontendLibrariesStack,
    AIIoTStack,
    BackendApisStack,
    DatabaseStack,
    CloudDevOpsStack,
    ToolingTestingStack,
    IdesDesignStack,
};
