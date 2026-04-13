// ── Navigation Links ─────────────────────────────────────────────
export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Education', 'Contact']

// ── Marquee ticker items ──────────────────────────────────────────
export const MARQUEE_ITEMS = [
  'Java Full Stack', 'Spring Boot', 'React.js', 'Node.js', 'MySQL',
  'Python', 'DSA', 'Git', 'Firebase', 'AI Integrations',
  'REST APIs', 'Clean Code', 'Problem Solving', '300+ LeetCode',
]

// ── Skills grouped by category ────────────────────────────────────
export const SKILLS = {
  'Languages': ['C/C++', 'Java', 'JavaScript', 'Python'],
  'Frontend':  ['HTML', 'CSS', 'Bootstrap', 'React.js'],
  'Backend':   ['Node.js', 'Express.js', 'Spring Boot'],
  'Database':  ['MySQL', 'PostgreSQL'],
  'Tools':     ['Git', 'GitHub', 'Postman'],
  'AI Tools':  ['ChatGPT', 'Claude', 'Gemini', 'NotebookLM', 'OpenCode', 'Yupp.ai'],
}

// ── CSS class map for skill category colour dots ──────────────────
export const SKILL_CAT_CLASS = {
  'Languages': 'cat-lang',
  'Frontend':  'cat-fe',
  'Backend':   'cat-be',
  'Database':  'cat-db',
  'Tools':     'cat-tool',
  'AI Tools':  'cat-ai',
}

// ── Projects ──────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    num: '01',
    title: 'MockMate',
    sub: 'AI-Powered Interview Platform',
    cat: 'Web App',
    feat: true,
    desc: 'AI mock interview platform with real-time voice conversations using Vapi.ai + Google Gemini analysis. Increased user engagement 40% with Firebase backend managing 1000+ records.',
    pts: [
      'Voice-to-voice interview simulation with real-time AI feedback',
      'Fallback system ensuring 100% feedback delivery at API quota limits',
      'Processed 20+ transcripts with structured analysis pipeline',
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'Gemini AI', 'Vapi.ai'],
    github: 'https://github.com/rakshita-bhat/MockMate',
    demo: null,
  },
  {
    id: 2,
    num: '02',
    title: 'Personal Voice Assistant',
    sub: 'Python-Powered Automation',
    cat: 'Web App',
    feat: false,
    desc: 'Voice assistant with <1s command-response latency and 95% recognition accuracy via 6+ integrated libraries.',
    pts: [
      'Integrated PyAudio, PyAutoGUI, PyWhatKit, PvPorcupine, Hugchat, SQLite',
      'Full-stack solution: UI design + backend logic + database management',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Eel Framework'],
    github: 'https://github.com/rakshita-bhat/Personal-Voice-Based-Assistant',
    demo: null,
  },
  {
    id: 3,
    num: '03',
    title: 'Retail Shop Management System',
    sub: 'Database Architecture',
    cat: 'Database',
    feat: false,
    desc: 'Optimized relational database achieving 30% query performance boost on 1000+ records via stored procedures.',
    pts: [
      '6+ interconnected tables covering customers, products, orders',
      'Structured CRUD testing across all operations',
    ],
    stack: ['SQL Server Management'],
    github: null,
    demo: null,
  },
  {
    id: 4,
    num: '04',
    title: 'Stray Savers',
    sub: 'Animal Welfare Platform',
    cat: 'Web App',
    feat: true,
    desc: 'Top 50 — Google Solution Challenge India Regional Bootcamp 2024. Connects 20+ NGOs, educates on 10+ animal diseases.',
    pts: [
      '6+ responsive pages structured for accessibility',
      '4-member cross-functional team coordination',
    ],
    stack: ['Angular.js', 'HTML', 'CSS', 'Node.js'],
    github: null,
    demo: null,
  },
]

// ── Education ─────────────────────────────────────────────────────
export const EDUCATION = {
  degree:   'Bachelor of Engineering — Information Science',
  institute:'Dr. Ambedkar Institute of Technology',
  location: 'Bengaluru, India',
  period:   'Expected 2026',
  cgpa:     '8.55 / 10',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
    'Software Development Life Cycle',
  ],
  achievements: [
    'Top 50 teams — Google Solution Challenge India Regional Bootcamp 2024',
    'Solved 300+ coding problems on LeetCode, Code360 & other platforms',
  ],
}

// ── Contact Info ─────────────────────────────────────────────────
export const CONTACT_LINKS = [
  { label: 'EMAIL',    val: 'rakshitabhat02@gmail.com', href: 'mailto:rakshitabhat02@gmail.com' },
  { label: 'LOCATION', val: 'Bengaluru, India',         href: null },
  { label: 'LINKEDIN', val: '/in/rakshita--bhat',       href: 'https://www.linkedin.com/in/rakshita--bhat/' },
  { label: 'GITHUB',   val: '/rakshita-bhat',           href: 'https://github.com/rakshita-bhat' },
]

// ── Social Links (hero section) ───────────────────────────────────
export const RESUME_URL = 'https://drive.google.com/file/d/1vI9BmnOujhTmp6lzaI9RZpnmHIkaImEc/view?usp=drive_link'