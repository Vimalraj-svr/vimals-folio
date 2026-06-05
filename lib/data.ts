export const profile = {
  name: "Vimalraj S",
  role: "Senior Software Engineer",
  company: "Iamneo — An NIIT Venture",
  location: "Tiruppur, Tamil Nadu",
  email: "hello@thisisvimal.xyz",
  emailAlt: "vimalrajsvr@hotmail.com",
  emailGmail: "vimalrajsvr404@gmail.com",
  linkedin: "https://linkedin.com/in/vimalrajs2002",
  github: "https://github.com/vimalrajsvr404",
  phone: "+91 7604912953",
  tagline: "Building at the intersection of scale, intelligence, and craft.",
  summary:
    "Full Stack Engineer specializing in enterprise-grade Angular systems, Node.js backends, and AI-powered workflows. I've shipped platforms serving 40,000+ users, automated systems that eliminated operational overhead, and developer tools used daily by engineering teams.",
}

export const heroRoles = [
  "Full Stack Engineer",
  "AI Systems Builder",
  "Platform Architect",
  "Developer Tools Maker",
]

export const stats = [
  { value: 40, suffix: "K+", label: "Users Served", sub: "enterprise platform" },
  { value: 50, suffix: "K+", label: "Docs Generated", sub: "in launch month" },
  { value: 200, suffix: "+", label: "Issues Resolved", sub: "frontend & backend" },
  { value: 40, suffix: "%", label: "API Latency Cut", sub: "via optimization" },
]

export const philosophy = [
  {
    title: "Systems over features",
    body: "I think about what breaks before I think about what ships. Designing for failure is not pessimism — it's engineering.",
  },
  {
    title: "Performance is a product decision",
    body: "Latency is felt. Every 100ms added is a UX regression. Optimization isn't a phase — it's a design constraint from day one.",
  },
  {
    title: "Security by design, not bolt-on",
    body: "IP controls, E2E encryption, RBAC hierarchies — these aren't afterthoughts. They're architectural decisions made at the beginning.",
  },
  {
    title: "The best DX is no friction",
    body: "Developer tooling should disappear into the workflow. If engineers notice the tool, it's not invisible enough.",
  },
]

export const experience = [
  {
    id: "sse",
    title: "Senior Software Engineer",
    company: "Iamneo — An NIIT Venture",
    logo: "/images/iamneo.png",
    period: "Apr 2026 — Present",
    type: "current",
    location: "Tiruppur, Tamil Nadu",
    highlights: [
      {
        title: "End-to-End RBAC Architecture",
        body: "Designed and delivered complete role-based access control for NeoPAT 2.0 ERP — permission hierarchy, role assignment workflows, and UI-level access enforcement across the entire platform.",
        impact: "Platform-wide security",
        impactColor: "cyan",
      },
      {
        title: "AI Mock Interview Platform",
        body: "Built a real-time AI interview simulator with WebSocket speech transcription, contextual conversation memory, and async evaluation pipelines enabling scalable interview practice at enterprise scale.",
        impact: "Async eval at scale",
        impactColor: "violet",
      },
      {
        title: "Engineering Mentorship",
        body: "Actively mentoring interns across modules, establishing code review processes and architectural patterns that accelerated team delivery velocity.",
        impact: "Team acceleration",
        impactColor: "emerald",
      },
    ],
  },
  {
    id: "se",
    title: "Software Engineer",
    company: "Iamneo — An NIIT Venture",
    logo: "/images/iamneo.png",
    period: "May 2024 — Apr 2026",
    type: "full-time",
    location: "Tiruppur, Tamil Nadu",
    highlights: [
      {
        title: "WhatsApp Notification Infrastructure",
        body: "Built a real-time placement notification system via WhatsApp Business API, reaching 40,000+ students and administrators with near-zero latency and configurable message templates.",
        impact: "40K+ users reached",
        impactColor: "brand",
      },
      {
        title: "Resume Generator at Scale",
        body: "Developed Resume Generator and Placement Wrapped with LinkedIn OAuth — 30,000+ users processed 50,000+ document generations in the launch month alone.",
        impact: "50K+ / launch month",
        impactColor: "violet",
      },
      {
        title: "Mobile-to-Web Migration",
        body: "Migrated the entire student-side mobile app to web within a single month, achieving full feature parity and significantly improving desktop adoption.",
        impact: "Full parity in 4 weeks",
        impactColor: "cyan",
      },
      {
        title: "Performance & Reliability",
        body: "Resolved 200+ critical issues across frontend and backend. Refactored Meta Business API integration, reducing API latency by 40% through caching and batching strategies.",
        impact: "40% latency reduction",
        impactColor: "emerald",
      },
    ],
  },
  {
    id: "intern",
    title: "Software Engineer, Intern",
    company: "Iamneo — An NIIT Venture",
    logo: "/images/iamneo.png",
    period: "Aug 2023 — May 2024",
    type: "internship",
    location: "Tiruppur, Tamil Nadu",
    highlights: [
      {
        title: "Engagement Automation",
        body: "Built automated drive reminders and configurable push notification system with client-specific field configuration, measurably increasing platform engagement from day one.",
        impact: "Engagement increase",
        impactColor: "brand",
      },
      {
        title: "Real-time Operations",
        body: "Developed Automatic Drive Republisher and Live Action Centre — eliminating manual overhead and improving real-time data throughput across operational workflows.",
        impact: "Manual ops eliminated",
        impactColor: "cyan",
      },
      {
        title: "Platform Security",
        body: "Implemented IP-based access controls and QR-code verification workflows that reduced fraudulent access attempts by 95% within weeks of deployment.",
        impact: "95% fraud reduction",
        impactColor: "emerald",
      },
    ],
  },
  {
    id: "trainer",
    title: "Student Technical Trainer",
    company: "Bannari Amman Institute of Technology",
    logo: "/images/bit.png",
    period: "2022 — 2024",
    type: "part-time",
    location: "Erode, Tamil Nadu",
    highlights: [
      {
        title: "Technical Education Program",
        body: "Designed and delivered curriculum across C/C++, Machine Learning, and MERN Stack for 105+ students over three academic levels — contributing to measurable improvement in placement outcomes.",
        impact: "105+ students",
        impactColor: "violet",
      },
    ],
  },
]

export const projects = [
  {
    id: "ninaivugal",
    name: "Ninaivugal",
    tagline: "A private AI that remembers who you were",
    description:
      "Multilingual AI diary that transforms raw thoughts into structured memory — and lets you have conversations with your past self across six Indic languages.",
    problem:
      "Journaling apps store text. Ninaivugal stores context, emotion, and memory — making past entries searchable, conversational, and deeply personal. The challenge: meaningful AI recall with absolute user privacy.",
    architecture:
      "FastAPI backend with contextual retrieval via Supermemory. End-to-end encrypted storage ensures zero-knowledge architecture — entries never leave the user's control unencrypted. Groq for low-latency inference, Gemini for structured thought transformation.",
    challenges: [
      "E2E encryption that doesn't break semantic search — required careful key-derivation design",
      "Consistent AI quality across 6 Indic languages with varying tokenizer support",
      "Contextual recall across thousands of entries without latency degradation",
    ],
    tech: ["Angular", "FastAPI", "Firebase", "MongoDB", "Groq", "Gemini AI", "Cloudflare"],
    category: "AI / Privacy",
    year: "2025",
    live: "https://ninaivugal.space",
    featured: true,
    gradient: "from-violet-500/10 to-indigo-500/10",
    metrics: ["6 languages", "E2E encrypted", "Semantic recall"],
  },
  {
    id: "neopat",
    name: "NeoPAT 2.0",
    tagline: "Campus placement infrastructure for 40,000+ users",
    description:
      "Complete redesign and re-architecture of an enterprise campus ERP — driving reliability, modularity, and real-time engagement at production scale.",
    problem:
      "The legacy platform couldn't scale, had performance bottlenecks, and lacked real-time capabilities that modern placement operations require. A complete architectural rethink was needed — not just a UI refresh.",
    architecture:
      "Modular Angular architecture with lazy loading and aggressive caching. Firestore for real-time features, NestJS backend with service-oriented structure. WhatsApp Business API integrated for notification infrastructure. RBAC built as a first-class concern.",
    challenges: [
      "Migrating to modular architecture while the platform was live with 40K+ daily users",
      "RBAC hierarchy spanning college → department → student with delegation chains",
      "Optimizing infrastructure costs while handling 40K+ concurrent users",
    ],
    tech: ["Angular", "Ionic", "NestJS", "MySQL", "Firestore"],
    category: "Enterprise / EdTech",
    year: "2023 — Present",
    live: "https://app.neopat.ai",
    logo: "/images/neopat.png",
    featured: true,
    gradient: "from-cyan-500/10 to-blue-500/10",
    metrics: ["40K+ users", "Real-time infra", "RBAC complete"],
  },
  {
    id: "instagram-wrapped",
    name: "Instagram Wrapped",
    tagline: "Your year in review — zero data leaves your device",
    description:
      "Personalized year-in-review platform with ML-driven persona analysis — built entirely client-side with zero-knowledge architecture and cinematic reveal animations.",
    problem:
      "Year-in-review products require uploading private data to servers. This built the same experience with a hard constraint: all Instagram data parsing happens in the browser, nothing touches a server.",
    architecture:
      "Cloudflare Workers for edge inference with Llama-3. All Instagram data parsing runs client-side in JavaScript — zero-knowledge by design. Framer Motion for cinematic reveal sequences. Vite for bundle performance.",
    challenges: [
      "Running ML inference at the edge on Cloudflare Workers with memory constraints",
      "Zero-knowledge constraint required restructuring the entire data pipeline",
      "Building cinematic transitions that stay smooth on low-end mobile devices",
    ],
    tech: ["React", "Vite", "Framer Motion", "Cloudflare Workers", "Llama-3"],
    category: "Consumer / Privacy",
    year: "Dec 2024",
    live: "https://inwrapped.vimalrajsvr404.workers.dev/",
    featured: true,
    gradient: "from-pink-500/10 to-rose-500/10",
    metrics: ["Zero-knowledge", "Edge ML", "Client-side only"],
  },
  {
    id: "linewise",
    name: "Linewise",
    tagline: "Code review where you actually write code",
    description:
      "VS Code extension providing automated code review, inline commenting, and vulnerability detection — surfacing issues before the PR even opens.",
    problem:
      "Code review is reactive. By the time a PR opens, patterns are baked in. Linewise brings review to the editor, surfacing OWASP top-10 vulnerabilities and code smell as they're written.",
    architecture:
      "TypeScript + VS Code Extension API with AST-level analysis. Inline diagnostics via the VS Code diagnostic provider. Detection patterns cover OWASP top-10 vulnerabilities with tunable false-positive thresholds.",
    challenges: [
      "Analysis must be near-instant — any perceptible delay breaks typing flow",
      "Avoiding false positives without missing real issues requires careful AST traversal",
      "Non-intrusive inline comments that don't compete with the editor's native UX",
    ],
    tech: ["TypeScript", "VS Code Extension API", "AST Analysis"],
    category: "Developer Tooling",
    year: "2024",
    live: "https://marketplace.visualstudio.com/items?itemName=vimalrajs0957.linewise&ssr=false",
    featured: false,
    gradient: "from-indigo-500/10 to-violet-500/10",
    metrics: ["Inline review", "OWASP detection", "Zero setup"],
  },
  {
    id: "remit",
    name: "Rem.it",
    tagline: "px → rem, automatically, format-safe",
    description:
      "Lightweight VS Code extension that converts px to rem across CSS/SCSS using TypeScript AST parsing — no regex, no formatting changes.",
    problem:
      "Responsive design requires rem units. Converting manually is tedious and error-prone. Regex-based solutions break calc(), var(), and media query contexts. AST parsing solves all of them.",
    architecture:
      "TypeScript AST parsing to locate numeric values only in CSS property value contexts. Format-preserving replacement via position-aware string surgery. Configurable base font size. SCSS support included.",
    challenges: [
      "AST-based parsing to avoid false positives in comments, strings, and non-CSS contexts",
      "Format-preserving replacement — zero unintended whitespace or semicolon changes",
      "Edge cases: calc(), var(), clamp(), CSS custom properties",
    ],
    tech: ["TypeScript", "VS Code Extension API", "CSS/SCSS AST"],
    category: "Developer Tooling",
    year: "2024",
    live: "https://marketplace.visualstudio.com/items?itemName=VimalSvr.rem-it",
    featured: false,
    gradient: "from-emerald-500/10 to-teal-500/10",
    metrics: ["Format-safe", "AST parsing", "SCSS support"],
  },
]

export const skills = [
  {
    category: "Frontend",
    color: "indigo",
    items: ["Angular", "React", "TypeScript", "HTML5", "CSS3", "Framer Motion", "PrimeNG", "Material UI", "Ionic"],
  },
  {
    category: "Backend",
    color: "violet",
    items: ["Node.js", "NestJS", "FastAPI", "REST APIs", "WebSockets", "Celery"],
  },
  {
    category: "Databases",
    color: "cyan",
    items: ["MySQL", "Firestore", "MongoDB", "ClickHouse", "Elasticsearch"],
  },
  {
    category: "AI & Automation",
    color: "purple",
    items: ["Google Gemini AI", "Groq", "Llama-3", "AssemblyAI", "STT/TTS Pipelines", "Supermemory", "n8n", "Prompt Engineering"],
  },
  {
    category: "Cloud & DevOps",
    color: "emerald",
    items: ["GCP (GKE, VPC, Functions)", "Cloudflare Workers", "Microsoft Azure", "Docker", "Firebase"],
  },
  {
    category: "Developer Tools",
    color: "orange",
    items: ["VS Code Extension API", "Git", "Postman", "Jira", "TypeScript AST"],
  },
]

export const awards = [
  {
    title: "Super Newcomer of the Year",
    org: "Iamneo",
    period: "April 2024",
    description: "Recognised for spearheading product optimisations and driving feature innovation across the platform.",
  },
  {
    title: "Neo-Champion: Commitment to Code",
    org: "Iamneo",
    period: "FY 2024–25",
    description: "Honoured for technical excellence and consistent high-impact contributions over the full financial year.",
  },
  {
    title: "2× Performer of the Month",
    org: "Iamneo",
    period: "Multiple",
    description: "Awarded for exceptional ownership in resolving critical production issues and delivering quality under pressure.",
  },
]

export const teaching = [
  {
    title: "Technical Training Program",
    org: "Bannari Amman Institute of Technology",
    period: "2022 — 2024",
    description:
      "Designed and delivered curriculum across C/C++, Machine Learning, and MERN Stack for 105+ students across three academic levels. Not a TA reading slides — a practitioner building instinct in others.",
    students: 105,
    topics: ["C / C++", "Machine Learning", "MERN Stack"],
    outcome: "Measurable placement outcome improvement",
  },
  {
    title: "Engineering Mentorship",
    org: "Iamneo",
    period: "April 2026 — Present",
    description:
      "Mentoring interns across product modules — establishing architectural patterns, code review culture, and engineering instincts that accelerate team delivery without sacrificing quality.",
    students: null,
    topics: ["System design", "Code review", "Angular architecture"],
    outcome: "Accelerated team delivery cycles",
  },
]

export const writingTopics = [
  "Type-safe Angular architecture at scale",
  "Zero-knowledge product design",
  "RBAC patterns for multi-tenant platforms",
  "Edge ML with Cloudflare Workers",
  "Building AI products that respect privacy",
  "Developer experience as a product discipline",
]

export const commandItems = [
  {
    group: "Navigate",
    items: [
      { id: "about", label: "About", description: "Who I am and what drives me", href: "#about" },
      { id: "experience", label: "Experience", description: "Career journey and impact", href: "#experience" },
      { id: "projects", label: "Projects", description: "Things I've shipped", href: "#projects" },
      { id: "skills", label: "Skills", description: "Tools and technologies", href: "#skills" },
      { id: "teaching", label: "Teaching", description: "Knowledge sharing", href: "#teaching" },
      { id: "contact", label: "Contact", description: "Get in touch", href: "#contact" },
    ],
  },
  {
    group: "Projects",
    items: [
      { id: "ninaivugal", label: "Ninaivugal ↗", description: "Multilingual AI diary", href: "https://ninaivugal.space", external: true },
      { id: "neopat", label: "NeoPAT 2.0 ↗", description: "Campus placement ERP", href: "https://app.neopat.ai", external: true },
      { id: "inwrapped", label: "Instagram Wrapped ↗", description: "Zero-knowledge year-in-review", href: "https://inwrapped.vimalrajsvr404.workers.dev/", external: true },
      { id: "linewise", label: "Linewise ↗", description: "VS Code code review extension", href: "https://marketplace.visualstudio.com/items?itemName=vimalrajs0957.linewise&ssr=false", external: true },
      { id: "remit", label: "Rem.it ↗", description: "px → rem VS Code extension", href: "https://marketplace.visualstudio.com/items?itemName=VimalSvr.rem-it", external: true },
    ],
  },
  {
    group: "Connect",
    items: [
      { id: "email-primary", label: "Email (Primary)", description: "hello@thisisvimal.xyz", href: "mailto:hello@thisisvimal.xyz", external: true },
      { id: "email-hotmail", label: "Email (Hotmail)", description: "vimalrajsvr@hotmail.com", href: "mailto:vimalrajsvr@hotmail.com", external: true },
      { id: "email-gmail", label: "Email (Gmail)", description: "vimalrajsvr404@gmail.com", href: "mailto:vimalrajsvr404@gmail.com", external: true },
      { id: "linkedin", label: "LinkedIn ↗", description: "linkedin.com/in/vimalrajs2002", href: "https://linkedin.com/in/vimalrajs2002", external: true },
      { id: "github", label: "GitHub ↗", description: "github.com/vimalrajsvr404", href: "https://github.com/vimalrajsvr404", external: true },
    ],
  },
]
