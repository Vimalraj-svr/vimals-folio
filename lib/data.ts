export const profile = {
  name: "Vimalraj S",
  role: "Senior Software Engineer",
  company: "Iamneo — An NIIT Venture",
  location: "Tiruppur, Tamil Nadu",
  email: "hello@thisisvimal.xyz",
  emailAlt: "vimalrajsvr@hotmail.com",
  emailGmail: "vimalrajsvr404@gmail.com",
  linkedin: "https://linkedin.com/in/vimalrajs2002",
  github: "https://github.com/Vimalraj-svr",
  phone: "+91 7604912953",
  tagline: "Building at the intersection of scale, intelligence, and craft.",
  summary:
    "Senior Software Engineer leading a team of 5 on a 110,000+ user campus placement platform, from product requirements and NestJS/FastAPI services to AI features, MCP integrations, GKE reliability, cloud security and cost optimisation.",
}

export const heroRoles = [
  "Team Lead",
  "AI Systems Builder",
  "Cloud Reliability & Security",
  "Developer Tools Maker",
]

export const stats = [
  { value: 110, suffix: "K+", label: "Users Served", sub: "NeoPAT · students & admins" },
  { value: 200, suffix: "+", label: "Issues Resolved", sub: "high-impact · production" },
  { value: 105, suffix: "+", label: "Students Trained", sub: "C/C++, ML, MERN Stack" },
  { value: 40, suffix: "%", label: "Latency Cut", sub: "frontend refactor · Meta API" },
]

export const philosophy = [
  {
    title: "Systems over features",
    body: "I think about what breaks before I think about what ships. Designing for failure is not pessimism. It's engineering.",
  },
  {
    title: "Performance is a product decision",
    body: "Latency is felt. Every 100ms added is a UX regression. Optimization isn't a phase. It's a design constraint from day one.",
  },
  {
    title: "Security by design, not bolt-on",
    body: "IP controls, E2E encryption, RBAC hierarchies. These aren't afterthoughts. They're architectural decisions made at the beginning.",
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
    location: "Coimbatore, Tamil Nadu",
    highlights: [
      {
        title: "Team Leadership",
        body: "Lead a team of 5 engineers on NeoPAT: finalising product requirements with stakeholders, resolving open spec decisions, and owning code reviews and production delivery. Also contribute to Python/FastAPI services on a second product platform.",
        impact: "Team of 5",
        impactColor: "emerald",
      },
      {
        title: "Platform-wide RBAC",
        body: "Designed and delivered RBAC covering permission hierarchies, backend authorization, role-management workflows and frontend access control.",
        impact: "Platform-wide security",
        impactColor: "cyan",
      },
      {
        title: "AI Mock Interview Platform",
        body: "Built an AI mock-interview platform combining real-time speech transcription, contextual conversation memory and asynchronous evaluation pipelines.",
        impact: "Async eval at scale",
        impactColor: "violet",
      },
      {
        title: "NeoPAT MCP Server",
        body: "Built the NeoPAT MCP server, exposing platform data and workflows as tools so AI agents can query and act on placement operations.",
        impact: "Agent-ready platform",
        impactColor: "brand",
      },
      {
        title: "GCP Cost Optimisation",
        body: "Led a GCP cost review of production, finding 75% of spend was fixed capacity running at 3–6% node CPU, and drove a rightsizing plan projecting 25–40% monthly savings. Cut Elastic Cloud dev spend via shard and monitor cleanup.",
        impact: "25–40% projected savings",
        impactColor: "emerald",
      },
      {
        title: "GKE Reliability",
        body: "Eliminated a recurring production outage traced to Spot VM node cycling and CoreDNS cold starts. Hardened GKE workloads with anti-affinity, PodDisruptionBudgets, multi-replica scaling and health probes.",
        impact: "Recurring outage eliminated",
        impactColor: "cyan",
      },
      {
        title: "Security Audit & Hardening",
        body: "Led a post-incident security audit of production GCP (IAM, GKE, network, storage, Cloud SQL) and remediated critical findings with zero downtime. Hardened the public API with Cloudflare WAF rules and SigNoz-based abuse alerting.",
        impact: "Zero-downtime remediation",
        impactColor: "violet",
      },
      {
        title: "Data-layer Performance",
        body: "Fixed Redis latency from oversized (366KB+) RBAC cache keys and ClickHouse connection resets. Profiled the 100 slowest ClickHouse queries to drive analytics query optimisation.",
        impact: "Redis & ClickHouse tuned",
        impactColor: "brand",
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
    location: "Coimbatore, Tamil Nadu",
    highlights: [
      {
        title: "WhatsApp Notification Infrastructure",
        body: "Built a real-time placement notification system on the WhatsApp Business API for 110,000+ students and administrators.",
        impact: "110K+ users reached",
        impactColor: "brand",
      },
      {
        title: "Mobile-to-Web Migration",
        body: "Migrated the complete student mobile app experience to the web in one month with full feature parity.",
        impact: "Full parity in 1 month",
        impactColor: "cyan",
      },
      {
        title: "Performance & Reliability",
        body: "Reduced API latency by 40% through frontend refactoring and Meta Business API optimisations, and resolved 200+ high-impact production issues across frontend and backend modules.",
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
        title: "Placement Operations Tooling",
        body: "Built drive reminders, push notifications, Automatic Drive Republisher and Live Action Centre for placement operations.",
        impact: "Manual ops eliminated",
        impactColor: "cyan",
      },
      {
        title: "Platform Security",
        body: "Implemented IP-based access controls and QR-code verification, reducing fraudulent access attempts by 95%.",
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
        body: "Trained 105+ students in C/C++, Machine Learning and MERN Stack.",
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
      "Multilingual AI diary supporting six Indian languages and English, turning unstructured thoughts into structured entries with contextual recall of past memories.",
    problem:
      "Journaling apps store text. Ninaivugal stores context, emotion, and memory. Making past entries searchable, conversational, and deeply personal. The challenge: meaningful AI recall with absolute user privacy.",
    architecture:
      "FastAPI backend with contextual retrieval via Supermemory. End-to-end encrypted storage ensures zero-knowledge architecture. Entries never leave the user's control unencrypted. Groq for low-latency inference, Gemini for structured thought transformation.",
    challenges: [
      "E2E encryption that doesn't break semantic search. Required careful key-derivation design",
      "Consistent AI quality across 6 Indic languages with varying tokenizer support.",
      "Contextual recall across thousands of entries without latency degradation.",
    ],
    tech: ["Angular", "FastAPI", "Firebase", "MongoDB", "Groq", "Gemini AI", "Cloudflare"],
    category: "AI / Privacy",
    year: "2025",
    live: "https://ninaivugal.space",
    preview: true,
    featured: true,
    gradient: "from-violet-500/10 to-indigo-500/10",
    metrics: ["6 languages", "E2E encrypted", "Semantic recall"],
  },
  {
    id: "neopat",
    name: "NeoPAT 2.0",
    tagline: "Campus placement infrastructure for 110,000+ users",
    description:
      "Complete redesign and re-architecture of an enterprise campus ERP. Driving reliability, modularity, and real-time engagement at production scale.",
    problem:
      "The legacy platform couldn't scale, had performance bottlenecks, and lacked real-time capabilities that modern placement operations require. A complete architectural rethink was needed. Not just a UI refresh.",
    architecture:
      "Modular Angular architecture with lazy loading and aggressive caching. Firestore for real-time features, NestJS backend with service-oriented structure. WhatsApp Business API integrated for notification infrastructure. RBAC built as a first-class concern.",
    challenges: [
      "Migrating to modular architecture while the platform was live with 110K+ users.",
      "RBAC hierarchy spanning college → department → student with delegation chains.",
      "Cutting GCP infrastructure costs (25–40% projected) while keeping a 110K+ user platform reliable.",
    ],
    tech: ["Angular", "Ionic", "NestJS", "MySQL", "Firestore"],
    category: "Enterprise / EdTech",
    year: "2023 — Present",
    live: "https://app.neopat.ai",
    preview: false,
    logo: "/images/neopat.png",
    featured: true,
    gradient: "from-cyan-500/10 to-blue-500/10",
    metrics: ["110K+ users", "Real-time infra", "RBAC complete"],
  },
  {
    id: "instagram-wrapped",
    name: "Instagram Wrapped",
    tagline: "Your year in review — zero data leaves your device",
    description:
      "Personalized year-in-review platform with ML-driven persona analysis. Built entirely client-side with zero-knowledge architecture and cinematic reveal animations.",
    problem:
      "Year-in-review products require uploading private data to servers. This built the same experience with a hard constraint: all Instagram data parsing happens in the browser, nothing touches a server.",
    architecture:
      "Cloudflare Workers for edge inference with Llama-3. All Instagram data parsing runs client-side in JavaScript. Zero-knowledge by design. Framer Motion for cinematic reveal sequences. Vite for bundle performance.",
    challenges: [
      "Running ML inference at the edge on Cloudflare Workers with memory constraints.",
      "Zero-knowledge constraint required restructuring the entire data pipeline.",
      "Building cinematic transitions that stay smooth on low-end mobile devices.",
    ],
    tech: ["React", "Vite", "Framer Motion", "Cloudflare Workers", "Llama-3"],
    category: "Consumer / Privacy",
    year: "2025",
    live: "https://inwrapped.vimalrajsvr404.workers.dev/",
    preview: true,
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
      "Code review is reactive. By the time a PR opens, patterns are baked in. Linewise brings review to the editor. Surfacing OWASP top-10 vulnerabilities and code smell as they're written.",
    architecture:
      "TypeScript + VS Code Extension API with AST-level analysis. Inline diagnostics via the VS Code diagnostic provider. Detection patterns cover OWASP top-10 vulnerabilities with tunable false-positive thresholds.",
    challenges: [
      "Analysis must be near-instant. Any perceptible delay breaks typing flow.",
      "Avoiding false positives without missing real issues requires careful AST traversal.",
      "Non-intrusive inline comments that don't compete with the editor's native UX.",
    ],
    tech: ["TypeScript", "VS Code Extension API", "AST Analysis"],
    category: "Developer Tooling",
    year: "2024",
    live: "https://marketplace.visualstudio.com/items?itemName=vimalrajs0957.linewise&ssr=false",
    preview: false,
    featured: false,
    gradient: "from-indigo-500/10 to-violet-500/10",
    metrics: ["Inline review", "OWASP detection", "Zero setup"],
  },
  {
    id: "remit",
    name: "Rem.it",
    tagline: "px → rem, automatically, format-safe",
    description:
      "Lightweight VS Code extension that converts px to rem across CSS/SCSS using TypeScript AST parsing. No regex, no formatting changes.",
    problem:
      "Responsive design requires rem units. Converting manually is tedious and error-prone. Regex-based solutions break calc(), var(), and media query contexts. AST parsing solves all of them.",
    architecture:
      "TypeScript AST parsing to locate numeric values only in CSS property value contexts. Format-preserving replacement via position-aware string surgery. Configurable base font size. SCSS support included.",
    challenges: [
      "AST-based parsing to avoid false positives in comments, strings, and non-CSS contexts.",
      "Format-preserving replacement. Zero unintended whitespace or semicolon changes.",
      "Edge cases: calc(), var(), clamp(), CSS custom properties.",
    ],
    tech: ["TypeScript", "VS Code Extension API", "CSS/SCSS AST"],
    category: "Developer Tooling",
    year: "2024",
    live: "https://marketplace.visualstudio.com/items?itemName=VimalSvr.rem-it",
    preview: false,
    featured: false,
    gradient: "from-emerald-500/10 to-teal-500/10",
    metrics: ["Format-safe", "AST parsing", "SCSS support"],
  },
]

export const skills = [
  {
    category: "Languages",
    color: "indigo",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Backend",
    color: "violet",
    items: ["Node.js", "NestJS", "FastAPI", "REST APIs", "Celery", "Pub/Sub", "Asynchronous Processing"],
  },
  {
    category: "Frontend",
    color: "cyan",
    items: ["Angular", "React", "Ionic", "HTML/CSS"],
  },
  {
    category: "Data",
    color: "orange",
    items: ["MySQL", "MongoDB", "Firestore", "Redis", "Elasticsearch", "ClickHouse"],
  },
  {
    category: "Cloud & Infrastructure",
    color: "emerald",
    items: ["GCP", "GKE/Kubernetes", "Docker", "Cloudflare (CDN/WAF)", "Firebase", "Azure ACS", "CI/CD"],
  },
  {
    category: "Observability & Security",
    color: "indigo",
    items: ["SigNoz (logs, traces, alerting)", "GCP IAM", "WAF & Bot Protection", "Cloud Security Audits"],
  },
  {
    category: "AI",
    color: "purple",
    items: ["LLM Integrations", "Structured Outputs", "Gemini", "Groq", "Llama-3", "STT/TTS Pipelines"],
  },
]

export const awards = [
  {
    title: "Super Newcomer of the Year",
    org: "Iamneo",
    period: "2024",
    description: "Recognized for spearheading product optimisations and driving feature innovation across the platform",
  },
  {
    title: "Neo-Champion: Commitment to Code",
    org: "Iamneo",
    period: "FY 2024–25",
    description: "Honored for technical excellence and consistent high-impact contributions over the full financial year",
  },
  {
    title: "2× Performer of the Month",
    org: "Iamneo",
    period: "Multiple",
    description: "Awarded for exceptional ownership in resolving critical production issues and delivering quality under pressure",
  },
]

export const teaching = [
  {
    title: "Technical Training Program",
    org: "Bannari Amman Institute of Technology",
    period: "2022 — 2024",
    description:
      "Trained 105+ students in C/C++, Machine Learning and MERN Stack.",
    students: 105,
    topics: ["C / C++", "Machine Learning", "MERN Stack"],
    outcome: "105+ students trained",
  },
  {
    title: "Team Leadership & Talks",
    org: "Iamneo",
    period: "2026 — Present",
    description:
      "Leading a team of 5 engineers with code reviews and production ownership. Speaker at an LLMs in Production seminar on Type-Safe AI, and an AI bootcamp on agents, MCP and prompt-injection defence (2026).",
    students: null,
    topics: ["Code review", "Type-Safe AI", "Agents & MCP"],
    outcome: "Team of 5 · 2 talks",
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
      { id: "github", label: "GitHub ↗", description: "github.com/Vimalraj-svr", href: "https://github.com/Vimalraj-svr", external: true },
    ],
  },
]
