import { fetchGitHubUser, fetchGitHubRepos, fetchGitHubStats, GitHubRepo } from "./github";

// Static profile data (doesn't change)
export const staticProfile = {
  name: "Kachibhotla Satya Pranav",
  tagline: "AI/ML Enthusiast | Python Developer | Software Engineer",
  bio: "Passionate AI/ML enthusiast and Python Developer. Focuses on Deep Learning, Natural Language Processing, and Computer Vision, with projects ranging from Harvard CS50 AI to building intelligent software systems.",
  email: "ksatyapranav6@gmail.com",
  location: "India",
  resumeUrl: "#",

  education: {
    institution: "Institute of Management Studies, Ghaziabad",
    shortName: "IMS Ghaziabad",
    degree: "Bachelor of Computer Applications",
    year: "",
    period: "2025 - Present",
  },

  venture: {
    name: "",
    shortName: "",
    role: "",
    description: "",
  },

  rotatingWords: ["Developer", "AI Specialist", "Innovator", "Pythonist", "Engineer"],

  socials: {
    github: "https://github.com/Guthub183",
    linkedin: "https://linkedin.com/in/k-satya-pranav-9240b9321",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    discord: "https://discord.gg",
    pypi: "https://pypi.org",
    npmjs: "https://www.npmjs.com",
    orcid: "https://orcid.org",
    huggingface: "https://huggingface.co",
  },

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

// Fetch dynamic profile data from GitHub
export async function getDynamicProfile() {
  const [user, stats] = await Promise.all([
    fetchGitHubUser(),
    fetchGitHubStats(),
  ]);

  return {
    ...staticProfile,
    avatar: user?.avatar_url || "/99024517.jpeg",
    location: user?.location || staticProfile.location,
    status: `BCA Student @ ${staticProfile.education.shortName}`,
    stats: {
      repos: stats.repos,
      followers: stats.followers,
      stars: stats.stars,
      contributions: stats.contributions > 100 ? `${stats.contributions}+` : stats.contributions.toString(),
    },
  };
}

// Language to skill mapping with icons
const languageIcons: Record<string, string> = {
  Python: "Code2",
  TypeScript: "FileCode",
  JavaScript: "Braces",
  Dart: "Palette",
  Java: "Coffee",
  Kotlin: "Smartphone",
  "C++": "Cpu",
  C: "Cpu",
  HTML: "Globe",
  CSS: "Paintbrush",
  Shell: "Terminal",
  Jupyter: "BookOpen",
  Markdown: "FileText",
  Liquid: "Droplet",
  Go: "Hexagon",
  Rust: "Cog",
  PHP: "Server",
  Ruby: "Gem",
  Swift: "Smartphone",
};

// Fetch skills from GitHub repos
export async function getDynamicSkills() {
  const repos = await fetchGitHubRepos();
  const languageCount = new Map<string, number>();

  repos.forEach((repo) => {
    if (repo.language) {
      languageCount.set(repo.language, (languageCount.get(repo.language) || 0) + 1);
    }
  });

  // Sort by usage count
  const sortedLanguages = Array.from(languageCount.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10); // Top 10 languages

  const languages = sortedLanguages.map(([name, count]) => ({
    name,
    icon: languageIcons[name] || "Code",
    count,
  }));

  // Keep static frameworks and tools
  const frameworks = [
    { name: "Flutter", icon: "Smartphone" },
  ];

  const tools = [
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
  ];

  const platforms = [
    { name: "GitHub Pages", icon: "Github" },
    { name: "Amazon Web Services (AWS)", icon: "Cloud" },
    { name: "Google Cloud Platform (GCP)", icon: "Cloud" },
    { name: "Termux", icon: "Terminal" },
  ];

  return { languages, frameworks, tools, platforms };
}

// Category mapping for repos
function getCategoryFromTopics(topics: string[], language: string | null): string {
  const topicsLower = topics.map((t) => t.toLowerCase());

  if (topicsLower.some((t) => ["ai", "ml", "machine-learning", "llm", "claude", "gemini", "gpt"].includes(t))) {
    return "AI/ML Frameworks";
  }
  if (topicsLower.some((t) => ["mcp", "devtools", "automation", "sdk", "api"].includes(t))) {
    return "MCP & DevTools";
  }
  if (topicsLower.some((t) => ["android", "ios", "mobile", "flutter", "react-native", "expo"].includes(t))) {
    return "Mobile Apps";
  }
  if (topicsLower.some((t) => ["website", "web", "nextjs", "react", "frontend"].includes(t))) {
    return "Web Development";
  }
  if (topicsLower.some((t) => ["dsa", "algorithms", "learning", "course"].includes(t))) {
    return "Learning & DSA";
  }
  if (language === "Dart" || language === "Kotlin" || language === "Swift") {
    return "Mobile Apps";
  }

  return "Open Source";
}

// Icon mapping for repos
function getIconFromCategory(category: string, topics: string[]): string {
  const iconMap: Record<string, string> = {
    "AI/ML Frameworks": "Brain",
    "MCP & DevTools": "Wrench",
    "Mobile Apps": "Smartphone",
    "Web Development": "Globe",
    "Learning & DSA": "BookOpen",
    "Open Source": "GitFork",
  };
  return iconMap[category] || "Code";
}

// Fetch projects from GitHub repos (including contributions)
export async function getDynamicProjects() {
  const repos = await fetchGitHubRepos(true); // Include contributions

  // Map repos with proper star counts (use parent stars for validated contributions)
  const projectsWithStars = repos.map((repo) => {
    // For validated contributions, use parent's star count
    const isContribution = !!(repo.fork && repo.isValidContribution && repo.parent);
    const stars = isContribution ? repo.parent!.stargazers_count : repo.stargazers_count;
    const description = isContribution && !repo.description
      ? repo.parent!.description
      : repo.description;
    const parentUrl = isContribution ? repo.parent!.html_url : undefined;

    return {
      ...repo,
      effectiveStars: stars,
      effectiveDescription: description,
      parentUrl,
      isContribution, // boolean: true if user is actually a contributor
    };
  });

  // Sort by effective stars (highest first), then by recent push
  const sortedRepos = projectsWithStars.sort((a, b) => {
    if (b.effectiveStars !== a.effectiveStars) {
      return b.effectiveStars - a.effectiveStars;
    }
    return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
  });

  return sortedRepos.map((repo, index) => {
    const category = getCategoryFromTopics(repo.topics, repo.language);
    // Featured = top 8 repos OR any repo with 5+ stars
    const isFeatured = index < 8 || repo.effectiveStars >= 5;
    return {
      name: formatRepoName(repo.name),
      description: repo.effectiveDescription || "No description available",
      language: repo.language || "Unknown",
      stars: repo.effectiveStars,
      forks: repo.forks_count,
      url: repo.html_url,
      parentUrl: repo.parentUrl,
      homepage: repo.homepage || undefined,
      topics: repo.topics,
      category,
      featured: isFeatured,
      isForked: repo.fork,
      isContribution: repo.isContribution, // Validated: user is in contributors list
      icon: getIconFromCategory(category, repo.topics),
      updatedAt: repo.pushed_at,
    };
  });
}

// Fetch featured projects for home page
// Shows top starred projects (contributions or owned) - purely by star count
export async function getTopStarredProjects(limit = 6) {
  const projects = await getDynamicProjects();

  // Get all valid projects: validated contributions + owned repos
  const validProjects = projects.filter((p) => p.isContribution || !p.isForked);

  // Sort by stars and return top ones
  return validProjects
    .sort((a, b) => b.stars - a.stars)
    .slice(0, limit);
}

// Format repo name to title case
function formatRepoName(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

// Get categories from projects
export function getCategories(projects: Awaited<ReturnType<typeof getDynamicProjects>>) {
  const categorySet = new Set(projects.map((p) => p.category));
  const categoryIcons: Record<string, string> = {
    "All": "Sparkles",
    "AI/ML Frameworks": "Brain",
    "MCP & DevTools": "Wrench",
    "Mobile Apps": "Smartphone",
    "Web Development": "Globe",
    "Learning & DSA": "BookOpen",
    "Open Source": "GitFork",
  };

  return [
    { name: "All", icon: "Sparkles" },
    ...Array.from(categorySet).map((name) => ({
      name,
      icon: categoryIcons[name] || "Folder",
    })),
  ];
}

// Static experience data
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
