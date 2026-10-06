import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Saaras Bisht",
    firstName: "Saaras",
    lastName: "Bisht",
    role: "Full-Stack Developer & Software Engineer",
    tagline: "Architecting high-performance digital products, intelligent systems, and fluid web experiences.",
    bio: [
      "I am a passionate software engineer and creative developer specializing in building scalable web architectures, responsive interfaces, and intelligent backends. I combine clean design aesthetics with rigorous systems engineering.",
      "Currently advancing my expertise in Next.js, modern distributed web systems, and high-performance frontend engineering. Dedicated to sub-millisecond responsiveness, intuitive user experiences, and resilient code craft.",
      "Beyond building production-ready applications, I actively explore open-source technologies, cloud infrastructure, and competitive programming."
    ],
    location: "Punjab, India / Remote",
    availability: "Available for high-impact roles & select contracts",
    photo: "/saaras.jpg",
    resumeUrl: "/resume.pdf",
    email: "saaras.bisht@gmail.com",
    stats: [
      { number: "3+", label: "Years Engineering", suffix: "yrs" },
      { number: "24+", label: "Completed Projects", suffix: "prod" },
      { number: "99.8%", label: "Lighthouse & Perf", suffix: "score" },
      { number: "10+", label: "Open Source Contribs", suffix: "repos" }
    ]
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/saarasbisht",
      iconName: "github",
      handle: "@saarasbisht"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/saarasbisht",
      iconName: "linkedin",
      handle: "in/saarasbisht"
    },
    {
      name: "Twitter / X",
      url: "https://x.com/saarasbisht",
      iconName: "twitter",
      handle: "@saarasbisht"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/saarasbisht",
      iconName: "code",
      handle: "saarasbisht"
    }
  ],

  marqueeSkills: [
    "TypeScript",
    "Next.js 16",
    "React 19",
    "Tailwind CSS v4",
    "Three.js & GLSL",
    "Framer Motion",
    "Node.js & Express",
    "PostgreSQL & Prisma",
    "Docker & Kubernetes",
    "GraphQL & REST",
    "Redis Caching",
    "Web Audio API",
    "Python & PyTorch",
    "GSAP ScrollTrigger",
    "Vector Embeddings"
  ],

  skills: [
    {
      category: "Frontend & Creative Tech",
      description: "Crafting fluid, GPU-accelerated interfaces with modern reactive paradigms.",
      skills: [
        { name: "TypeScript", level: "Expert" },
        { name: "Next.js (App Router)", level: "Expert" },
        { name: "React 19", level: "Expert" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Framer Motion", level: "Advanced" },
        { name: "GSAP & ScrollTrigger", level: "Advanced" },
        { name: "Three.js / WebGL", level: "Proficient" },
        { name: "HTML5 Canvas Shaders", level: "Proficient" }
      ]
    },
    {
      category: "Backend & Systems",
      description: "Architecting resilient microservices, high-throughput APIs, and databases.",
      skills: [
        { name: "Node.js & Bun", level: "Advanced" },
        { name: "Python / FastAPI", level: "Advanced" },
        { name: "PostgreSQL & Supabase", level: "Advanced" },
        { name: "Prisma & Drizzle ORM", level: "Advanced" },
        { name: "Redis & Upstash", level: "Proficient" },
        { name: "REST & GraphQL", level: "Expert" },
        { name: "WebSockets & SSE", level: "Advanced" }
      ]
    },
    {
      category: "AI, Data & Machine Learning",
      description: "Integrating intelligent pipelines, fine-tuned models, and vector search.",
      skills: [
        { name: "OpenAI & Anthropic APIs", level: "Expert" },
        { name: "LangChain & LlamaIndex", level: "Advanced" },
        { name: "Pinecone / ChromaDB", level: "Advanced" },
        { name: "PyTorch (Basic ML)", level: "Proficient" },
        { name: "HuggingFace Transformers", level: "Proficient" }
      ]
    },
    {
      category: "DevOps & Tooling",
      description: "Automating zero-downtime deployments, containerization, and monitoring.",
      skills: [
        { name: "Docker & Compose", level: "Advanced" },
        { name: "Git & GitHub Actions", level: "Expert" },
        { name: "Vercel & AWS (S3/EC2)", level: "Advanced" },
        { name: "Linux / Bash Scripting", level: "Advanced" },
        { name: "Jest & Playwright E2E", level: "Proficient" }
      ]
    }
  ],

  projects: [
    {
      id: "synapse-ai",
      title: "Synapse Neural Workspace",
      subtitle: "Autonomous Multi-Agent AI Workflow Orchestrator",
      description: "A spatial node-based canvas for orchestrating autonomous LLM pipelines, real-time code synthesis, and contextual vector memory retrieval.",
      longDescription: "Synapse empowers technical teams to link custom model agents into visual DAG pipelines. Built with real-time web worker graph execution, local vector indexing via WebAssembly, and a zero-latency collaborative canvas.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "LangChain", "WebSockets", "Canvas API"],
      category: "AI & ML",
      image: "/projects/synapse.webp",
      liveUrl: "https://synapse-neural.vercel.app",
      githubUrl: "https://github.com/saarasbisht/synapse-ai",
      featured: true,
      year: "2025",
      stats: [
        { label: "Token Throughput", value: "140 tok/s" },
        { label: "Active Nodes", value: "500+ / graph" },
        { label: "Execution Latency", value: "<18ms" }
      ],
      highlights: [
        "Interactive GPU-accelerated node canvas with infinite zoom and smooth panning.",
        "Local vector search utilizing in-browser WebAssembly SQLite and cosine similarity.",
        "Live bi-directional streaming protocol over WebSocket multiplexing."
      ]
    },
    {
      id: "lumina-shader-engine",
      title: "Lumina Generative Engine",
      subtitle: "Real-time Procedural Audio-Reactive Visualizer",
      description: "Browser-based WebGL procedural synthesizer converting microphone and stem inputs into fluid chromatic displacement fields.",
      longDescription: "Engineered with custom GLSL fragment shaders, Web Audio FFT frequency analyzers, and interactive parameters that map acoustic harmonics to high-order geometric surfaces.",
      tags: ["WebGL", "Three.js", "GLSL Shaders", "Web Audio API", "Framer Motion"],
      category: "Creative Engineering",
      image: "/projects/lumina.webp",
      liveUrl: "https://lumina-engine.vercel.app",
      githubUrl: "https://github.com/saarasbisht/lumina-shader-engine",
      featured: true,
      year: "2025",
      stats: [
        { label: "Frame Rate", value: "60 FPS rock-solid" },
        { label: "Shader Passes", value: "4-pass post-FX" },
        { label: "Audio Latency", value: "3.2ms" }
      ],
      highlights: [
        "Custom Raymarching engine rendered directly on GPU canvas.",
        "Dynamic Bloom and chromatic aberration lenses responding to bass drop transients.",
        "Export capability to WebM and high-res SVG path curves."
      ]
    },
    {
      id: "pulse-metrics",
      title: "Pulse Cloud Observability",
      subtitle: "Sub-Second Distributed APM & Telemetry Platform",
      description: "High-density telemetry dashboard processing over 250,000 metrics/second with predictive anomaly detection and instant root-cause analysis.",
      longDescription: "Developed for SRE and platform engineering teams. Implements time-series compression, ClickHouse integration, and high-frequency virtualized charting for zero-lag inspection.",
      tags: ["React 19", "Go / Gin", "PostgreSQL", "ClickHouse", "Tailwind CSS", "Zustand"],
      category: "Full Stack",
      image: "/projects/pulse.webp",
      liveUrl: "https://pulse-metrics.vercel.app",
      githubUrl: "https://github.com/saarasbisht/pulse-observability",
      featured: true,
      year: "2024",
      stats: [
        { label: "Metrics / Sec", value: "250K+" },
        { label: "Query Time", value: "45ms p99" },
        { label: "Data Compression", value: "8.4x" }
      ],
      highlights: [
        "WebGL-powered time series rendering handles 1M points without dropping frames.",
        "Custom distributed tracing waterfall explorer with instant trace flamegraphs.",
        "Automated threshold alert routing via webhooks and Slack integrations."
      ]
    },
    {
      id: "aura-design-system",
      title: "Aura Design System & Component Lab",
      subtitle: "Accessible, Headless & Themeable UI Architecture",
      description: "A comprehensive design system comprising 60+ accessible components, automated tokens, and micro-interaction primitives for high-scale web products.",
      longDescription: "Engineered with strict WAI-ARIA compliance, full keyboard accessibility, zero layout shifts, and deep customization through CSS custom properties.",
      tags: ["TypeScript", "Radix UI", "Tailwind CSS", "Storybook", "NPM Package"],
      category: "Creative Engineering",
      image: "/projects/aura.webp",
      liveUrl: "https://aura-system.vercel.app",
      githubUrl: "https://github.com/saarasbisht/aura-design-system",
      featured: false,
      year: "2024",
      stats: [
        { label: "Components", value: "64 Primitives" },
        { label: "Bundle Overhead", value: "<8.5kB gz" },
        { label: "ARIA Compliance", value: "100% Passed" }
      ],
      highlights: [
        "Headless accessibility primitives with full screen-reader audit verification.",
        "Compound component patterns with type-safe polymorphic 'as' props.",
        "Built-in fluid motion presets tested for prefers-reduced-motion."
      ]
    }
  ],

  timeline: [
    {
      id: "exp-1",
      type: "experience",
      role: "Senior Creative Technologist & Full-Stack Lead",
      organization: "Nexus Hypermedia Labs",
      location: "San Francisco, CA",
      period: "2024 — Present",
      description: "Leading frontend architecture and interactive WebGL experiences for frontier AI and FinTech client partners.",
      accomplishments: [
        "Spearheaded redesign of core interactive products resulting in a 42% lift in user engagement session length.",
        "Pioneered an internal motion design framework built on Framer Motion and GSAP, reducing UI animation shipping time by 60%.",
        "Mentored junior and mid-level engineers in WebGL shader fundamentals and frontend performance profiling."
      ],
      skills: ["Next.js", "TypeScript", "WebGL", "GSAP", "Micro-frontends"]
    },
    {
      id: "exp-2",
      type: "experience",
      role: "Full-Stack Software Engineer",
      organization: "Vektor Systems",
      location: "Austin, TX (Remote)",
      period: "2022 — 2024",
      description: "Architected high-throughput data visualization dashboards, streaming WebSocket services, and distributed microservices.",
      accomplishments: [
        "Scaled telemetry ingestion pipeline from 10k to 250k events/sec using Node.js clustering and Redis streams.",
        "Eliminated 350ms of initial render latency by refactoring state tree and adopting Next.js SSR streaming.",
        "Authored comprehensive end-to-end testing suites in Playwright, lowering production regression incidents by 75%."
      ],
      skills: ["React", "Node.js", "PostgreSQL", "Docker", "Redis"]
    },
    {
      id: "edu-1",
      type: "education",
      role: "Bachelor of Technology in Computer Science & Engineering",
      organization: "Lovely Professional University (LPU)",
      location: "Punjab, India",
      period: "2022 — Present",
      description: "Focused on Full-Stack Systems, Data Structures & Algorithms, Database Engineering, and Modern Web Architectures.",
      accomplishments: [
        "Consistent academic excellence across core engineering curriculum.",
        "Active contributor to technical hackathons and student developer societies.",
        "Built and deployed end-to-end full-stack web applications and microservices."
      ],
      skills: ["Data Structures", "Algorithms", "Web Technologies", "Database Systems", "Operating Systems"]
    }
  ],

  certifications: [
    {
      id: "cert-1",
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issueDate: "2024",
      credentialId: "AWS-SAA-8392194",
      verifyUrl: "https://aws.amazon.com/verification",
      badgeColor: "#FF9900"
    },
    {
      id: "cert-2",
      title: "Meta Certified Frontend Developer Professional",
      issuer: "Meta (Coursera)",
      issueDate: "2023",
      credentialId: "META-FED-99210",
      verifyUrl: "https://coursera.org/verify/meta-fed",
      badgeColor: "#0668E1"
    },
    {
      id: "cert-3",
      title: "TensorFlow Developer Certificate",
      issuer: "Google / TensorFlow",
      issueDate: "2023",
      credentialId: "TF-CERT-11029",
      verifyUrl: "https://www.tensorflow.org/certificate",
      badgeColor: "#FF6F00"
    }
  ]
};
