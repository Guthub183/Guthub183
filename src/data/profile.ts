export const profile = {
  name: "Kachibhotla Satya Pranav",
  tagline: "AI/ML Enthusiast | Python Developer | Software Engineer",
  bio: "Passionate AI/ML enthusiast and Python Developer. Focuses on Deep Learning, Natural Language Processing, and Computer Vision, with projects ranging from Harvard CS50 AI to building intelligent software systems.",
  location: "India",
  status: "AI/ML & Python Developer",
  email: "ksatyapranav6@gmail.com",
  avatar: "/99024517.jpeg",
  resumeUrl: "#",

  // Education
  education: {
    institution: "Institute of Management Studies, Ghaziabad",
    shortName: "IMS Ghaziabad",
    degree: "Bachelor of Computer Applications",
    year: "",
    period: "2025 - Present",
  },

  // Venture
  venture: {
    name: "",
    shortName: "",
    role: "",
    description: "",
  },

  rotatingWords: ["Developer", "AI Specialist", "Innovator", "Pythonist", "Engineer"],

  stats: {
    repos: 1,
    followers: 0,
    stars: 0,
    contributions: "10+",
  },

  socials: {
    github: "https://github.com/Guthub183",
    linkedin: "https://linkedin.com/in/k-satya-pranav-9240b9321",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    discord: "https://discord.gg",
    pypi: "https://pypi.org",
    npmjs: "https://www.npmjs.com",
    orcid: "https://orcid.org",
  },

  // Satya Labs Socials
  satyaLabs: {
    linkedin: "https://linkedin.com/in/k-satya-pranav-9240b9321",
    instagram: "https://instagram.com",
    github: "https://github.com/Guthub183",
    youtube: "https://youtube.com",
    huggingface: "https://huggingface.co",
    website: "https://github.com/Guthub183",
  },

  achievements: [
    { name: "Pair Extraordinaire", count: 1, icon: "Users" },
    { name: "Starstruck", count: 1, icon: "Star" },
    { name: "Pull Shark", count: 1, icon: "GitPullRequest" },
  ],

  organizations: ["Harvard-CS50-AI"],
};

export const skills = {
  languages: [
    { name: "Python", icon: "Code2" },
    { name: "JavaScript", icon: "Braces" },
    { name: "C", icon: "Cpu" },
    { name: "Dart", icon: "Palette" },
    { name: "Java", icon: "Coffee" },
    { name: "HTML/CSS", icon: "Globe" },
  ],
  frameworks: [
    { name: "Flutter", icon: "Smartphone" },
  ],
  tools: [
    { name: "Git", icon: "GitBranch" },
    { name: "Linux", icon: "Terminal" },
    { name: "Docker", icon: "Container" },
    { name: "Google Colab", icon: "Cloud" },
    { name: "Pandas", icon: "Table" },
    { name: "NumPy", icon: "Binary" },
    { name: "Matplotlib", icon: "LineChart" },
    { name: "Scikit-Learn", icon: "BrainCircuit" },
    { name: "TensorFlow", icon: "Brain" },
    { name: "Hadoop / Big Data", icon: "Database" },
    { name: "Power BI", icon: "BarChart3" },
    { name: "Excel", icon: "FileSpreadsheet" },
  ],
  platforms: [
    { name: "GitHub Pages", icon: "Github" },
    { name: "Amazon Web Services (AWS)", icon: "Cloud" },
    { name: "Google Cloud Platform (GCP)", icon: "Cloud" },
    { name: "Termux", icon: "Terminal" },
  ],
};

export type Project = {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  url: string;
  homepage?: string;
  topics: string[];
  category: string;
  featured: boolean;
  isForked: boolean;
  icon: string;
};

export const projects: Project[] = [
  // AI/ML Frameworks
  {
    name: "SuperClaude Framework",
    description: "Configuration framework enhancing Claude Code with specialized commands, personas, and development methodologies",
    language: "Python",
    stars: 19900,
    forks: 0,
    url: "https://github.com/Guthub183/SuperClaude_Framework",
    topics: ["ai", "claude", "framework", "automation"],
    category: "AI/ML Frameworks",
    featured: true,
    isForked: false,
    icon: "Brain",
  },
  {
    name: "Chrome DevTools MCP",
    description: "Chrome DevTools integration for coding agents - enabling browser automation and debugging",
    language: "TypeScript",
    stars: 18800,
    forks: 0,
    url: "https://github.com/Guthub183/chrome-devtools-mcp",
    topics: ["mcp", "chrome", "devtools", "automation"],
    category: "AI/ML Frameworks",
    featured: true,
    isForked: true,
    icon: "Chrome",
  },
  {
    name: "SuperGemini Framework",
    description: "AI-powered framework for Gemini CLI with MCP integration and specialized development workflows",
    language: "Python",
    stars: 215,
    forks: 0,
    url: "https://github.com/Guthub183/SuperGemini_Framework",
    topics: ["gemini", "ai", "framework", "mcp"],
    category: "AI/ML Frameworks",
    featured: true,
    isForked: false,
    icon: "Sparkles",
  },
  {
    name: "Devr.AI",
    description: "AI-powered Developer Relations assistant for community management and engagement",
    language: "Python",
    stars: 68,
    forks: 0,
    url: "https://github.com/Guthub183/Devr.AI",
    topics: ["devrel", "ai", "community"],
    category: "AI/ML Frameworks",
    featured: true,
    isForked: false,
    icon: "Bot",
  },
  {
    name: "SecOps Wrapper",
    description: "Helper SDK for Google SecOps API security use cases",
    language: "Python",
    stars: 56,
    forks: 0,
    url: "https://github.com/Guthub183/secops-wrapper",
    topics: ["security", "google", "api", "sdk"],
    category: "MCP & DevTools",
    featured: true,
    isForked: false,
    icon: "Shield",
  },
  {
    name: "SilkyNet",
    description: "Efficient segmentation of silkworm images using UNet architecture for agricultural applications",
    language: "Python",
    stars: 2,
    forks: 0,
    url: "https://github.com/Guthub183/silkynet",
    topics: ["machine-learning", "unet", "image-segmentation", "agriculture"],
    category: "AI/ML Frameworks",
    featured: false,
    isForked: true,
    icon: "Scan",
  },

  // MCP & DevTools
  {
    name: "CortexFlow",
    description: "Advanced workflow orchestration and task management system",
    language: "TypeScript",
    stars: 5,
    forks: 1,
    url: "https://github.com/Guthub183/CortexFlow",
    topics: ["workflow", "automation", "typescript"],
    category: "MCP & DevTools",
    featured: true,
    isForked: false,
    icon: "Workflow",
  },
  {
    name: "GitHub Contributors Badge",
    description: "Generate dynamic contributor badges for GitHub repositories",
    language: "JavaScript",
    stars: 9,
    forks: 0,
    url: "https://github.com/Guthub183/github-contributors-badge",
    topics: ["badge", "github", "contributors"],
    category: "MCP & DevTools",
    featured: true,
    isForked: false,
    icon: "Award",
  },

  // Mobile Applications
  {
    name: "MR BunkManager",
    description: "Comprehensive attendance management and student collaboration platform built with React Native",
    language: "TypeScript",
    stars: 4,
    forks: 0,
    url: "https://github.com/Guthub183/MR_BunkManager",
    homepage: "https://Guthub183.github.io",
    topics: ["react-native", "expo", "firebase", "education"],
    category: "Mobile Apps",
    featured: true,
    isForked: false,
    icon: "GraduationCap",
  },
  {
    name: "Reshme Info",
    description: "Application for Sericulturists - helping silk farmers with information and resources",
    language: "TypeScript",
    stars: 4,
    forks: 1,
    url: "https://github.com/Guthub183/Reshme_Info",
    topics: ["agriculture", "sericulture", "mobile"],
    category: "Mobile Apps",
    featured: true,
    isForked: true,
    icon: "Leaf",
  },
  {
    name: "PocketAi Expo",
    description: "AI assistant mobile application built with Expo and React Native",
    language: "TypeScript",
    stars: 1,
    forks: 1,
    url: "https://github.com/Guthub183/PocketAi-Expo",
    topics: ["expo", "react-native", "ai"],
    category: "Mobile Apps",
    featured: false,
    isForked: false,
    icon: "MessageSquare",
  },
  {
    name: "Kannada Keyboard",
    description: "Custom Kannada keyboard for Android devices",
    language: "Java",
    stars: 2,
    forks: 0,
    url: "https://github.com/Guthub183/Kannada_Keyboard",
    topics: ["android", "keyboard", "kannada", "localization"],
    category: "Mobile Apps",
    featured: false,
    isForked: false,
    icon: "Keyboard",
  },

  // Web Development
  {
    name: "NexGen Website",
    description: "Modern website for NexGen organization with Next.js",
    language: "TypeScript",
    stars: 5,
    forks: 0,
    url: "https://github.com/Guthub183/NexGen_Website",
    topics: ["nextjs", "website", "typescript"],
    category: "Web Development",
    featured: true,
    isForked: true,
    icon: "Layout",
  },
  {
    name: "Vidish Shopify",
    description: "Custom Shopify theme development",
    language: "Liquid",
    stars: 2,
    forks: 0,
    url: "https://github.com/Guthub183/Vidish-Shopify",
    topics: ["shopify", "ecommerce", "liquid"],
    category: "Web Development",
    featured: false,
    isForked: false,
    icon: "ShoppingCart",
  },
  {
    name: "Custom Flappy Bird",
    description: "Custom implementation of the classic Flappy Bird game",
    language: "JavaScript",
    stars: 2,
    forks: 0,
    url: "https://github.com/Guthub183/Custom-Flappy-Bird",
    topics: ["game", "javascript", "canvas"],
    category: "Web Development",
    featured: false,
    isForked: false,
    icon: "Gamepad2",
  },

  // Learning & DSA
  {
    name: "DataStructure",
    description: "Data structures and algorithms implementations in C++",
    language: "C++",
    stars: 10,
    forks: 0,
    url: "https://github.com/Guthub183/DataStructure",
    topics: ["dsa", "algorithms", "cpp", "learning"],
    category: "Learning & DSA",
    featured: true,
    isForked: false,
    icon: "Binary",
  },
  {
    name: "LLM Course",
    description: "Comprehensive course to get into Large Language Models",
    language: "Markdown",
    stars: 2,
    forks: 0,
    url: "https://github.com/Guthub183/llm-course",
    topics: ["llm", "ai", "course", "learning"],
    category: "Learning & DSA",
    featured: false,
    isForked: true,
    icon: "BookOpen",
  },

  // Open Source
  {
    name: "Termux App",
    description: "Terminal emulator application for Android OS extendible by variety of packages",
    language: "Java",
    stars: 1,
    forks: 0,
    url: "https://github.com/Guthub183/termux-app",
    homepage: "https://f-droid.org",
    topics: ["android", "terminal", "linux"],
    category: "Open Source",
    featured: false,
    isForked: true,
    icon: "Terminal",
  },
  {
    name: "FlorisBoard",
    description: "An open-source keyboard for Android which respects your privacy",
    language: "Kotlin",
    stars: 2,
    forks: 0,
    url: "https://github.com/Guthub183/florisboard",
    topics: ["android", "keyboard", "privacy"],
    category: "Open Source",
    featured: false,
    isForked: true,
    icon: "Keyboard",
  },
];

export const categories = [
  { name: "All", icon: "Sparkles" },
  { name: "AI/ML Frameworks", icon: "Brain" },
  { name: "MCP & DevTools", icon: "Wrench" },
  { name: "Mobile Apps", icon: "Smartphone" },
  { name: "Web Development", icon: "Globe" },
  { name: "Learning & DSA", icon: "BookOpen" },
  { name: "Open Source", icon: "GitFork" },
];

export const experience = [
  {
    title: "Bachelor of Computer Applications Student",
    company: "Institute of Management Studies, Ghaziabad",
    period: "2025 - Present",
    description: "Pursuing Bachelor of Computer Applications with a focus on computer science, application development, and database systems",
    type: "education",
    icon: "GraduationCap",
  },
  {
    title: "Student Contributor",
    company: "Harvard CS50 AI",
    period: "2024 - Present",
    description: "Implementing artificial intelligence concepts, neural network models, and sentence parsers in Python",
    type: "contribution",
    icon: "Code",
  },
];
