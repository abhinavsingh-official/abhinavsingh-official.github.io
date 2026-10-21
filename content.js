// Single source of truth for the Projects / Experience / Skills sections.
// Edit this file to add the 10th project once it's pushed, or to fill in
// the resume link / placement-cell dates.

const RESUME_URL = "#"; // TODO: point this at your hosted resume (GitHub or Drive link)

const PROJECT_CATEGORIES = ["Computer Vision", "NLP & LLM", "Data & MLOps"];

const PROJECTS = [
  {
    name: "Learndata",
    tag: "Flagship",
    category: "Data & MLOps",
    image: "assets/projects/data-infra-learn.jpg",
    demo: "https://data-infra-learn.vercel.app",
    repo: "https://github.com/abhinavsingh-official/data-infra-learn",
  },
  {
    name: "Posture-Check",
    tag: "Computer Vision",
    category: "Computer Vision",
    image: "assets/projects/posture-check.jpg",
    repo: "https://github.com/abhinavsingh-official/Posture-Check",
  },
  {
    name: "EmotionDetect",
    tag: "Audio / ML",
    category: "NLP & LLM",
    image: "assets/projects/emotiondetect.jpg",
    repo: "https://github.com/abhinavsingh-official/EmotionDetect",
  },
  {
    name: "SentimentAutomated",
    tag: "Data Pipeline",
    category: "NLP & LLM",
    image: "assets/projects/sentimentautomated.jpg",
    repo: "https://github.com/abhinavsingh-official/SentimentAutomated",
  },
  {
    name: "RAGReliabilityChecker",
    tag: "LLM Reliability",
    category: "NLP & LLM",
    image: "assets/projects/ragreliabilitychecker.jpg",
    repo: "https://github.com/abhinavsingh-official/RAGReliabilityChecker",
  },
  {
    name: "SafeNL2SQL",
    tag: "LLM Safety",
    category: "NLP & LLM",
    image: "assets/projects/safenl2sql.jpg",
    repo: "https://github.com/abhinavsingh-official/SafeNL2SQL",
  },
  {
    name: "DriftWatchdog",
    tag: "MLOps",
    category: "Data & MLOps",
    image: "assets/projects/driftwatchdog.jpg",
    repo: "https://github.com/abhinavsingh-official/DriftWatchdog",
  },
  {
    name: "BlurGate",
    tag: "Computer Vision",
    category: "Computer Vision",
    image: "assets/projects/blurgate.jpg",
    repo: "https://github.com/abhinavsingh-official/BlurGate",
  },
  {
    name: "SkillGapMatcher",
    tag: "NLP",
    category: "NLP & LLM",
    image: "assets/projects/skillgapmatcher.jpg",
    repo: "https://github.com/abhinavsingh-official/SkillGapMatcher",
  },
];

const EXPERIENCE = [
  {
    title: "AI Associate",
    org: "Vezras Technologies Pvt. Ltd.",
    location: "Noida, India (On-site)",
    dates: "Jul 2026 — Present",
    summary: "Data engineering, ML, and the backend/API layer tying them together.",
  },
  {
    title: "AI/ML Intern",
    org: "Xansr Media",
    location: "Gurugram, India (Hybrid)",
    dates: "Feb 2026 — Jul 2026",
    summary: "Sports-analytics prediction models, feature engineering, FastAPI deployment.",
  },
  {
    title: "Business Analyst",
    org: "Apex Systems",
    location: "Delhi, India (Hybrid)",
    dates: "Jul 2025 — Oct 2025",
    summary: "Data digitalization, SQL inventory analysis, Tableau/Power BI dashboards.",
  },
  {
    title: "Data Analyst",
    org: "International Institute of SDG's and Public Policy Research",
    location: "Delhi, India (Remote)",
    dates: "Jul 2025 — Sep 2025",
    summary: "Policy-data analysis and reporting on a national welfare programme.",
  },
];

const EDUCATION = {
  degree: "BCA",
  school: "VIPS",
  dates: "2023 — 2026",
  summary: "9.1 CGPA, data and AI focus. Placement Cell (2024–2026).",
};

const SKILLS = [
  "Python", "SQL", "PyTorch", "scikit-learn", "OpenCV",
  "Hugging Face / Transformers", "FastAPI", "Streamlit",
  "PostgreSQL", "MongoDB", "Apache Spark", "Databricks",
  "SQLite", "Docker", "Git",
];

// Courses: NPTEL certificates (with score) + other industry certifications,
// all backed by a real certificate image.
const COURSES = [
  { name: "Data Analytics Job Simulation", meta: "Deloitte Australia (Forage)", image: "assets/certs/other-deloitte-data-analytics.jpg" },
  { name: "From Learner to Builder: AI Agent Architect", meta: "IBM SkillsBuild", image: "assets/certs/other-ibm-ai-agent-architect.jpg" },
  { name: "Business Intelligence & Analytics", meta: "NPTEL · 71%", image: "assets/certs/nptel-business-intelligence-analytics-1.jpg" },
  { name: "Foundation of Cloud IoT Edge ML", meta: "NPTEL · 72%", image: "assets/certs/nptel-foundation-of-cloud-iot-edge-ml-1.jpg" },
  { name: "Big Data Computing", meta: "NPTEL · 71%", image: "assets/certs/nptel-big-data-computing-1.jpg" },
  { name: "The Joy of Computing using Python", meta: "NPTEL · 69%", image: "assets/certs/nptel-the-joy-of-computing-using-python-1.jpg" },
  { name: "Responsible & Safe AI Systems", meta: "NPTEL · 66%", image: "assets/certs/nptel-responsible---safe-ai-systems-1.jpg" },
  { name: "Data Analytics with Python", meta: "NPTEL · 65%", image: "assets/certs/nptel-data-analytics-with-python-1.jpg" },
  { name: "Recommender Systems", meta: "NPTEL · 67%", image: "assets/certs/nptel-recommender-systems-1.jpg" },
  { name: "Data Mining", meta: "NPTEL · 60%", image: "assets/certs/nptel-data-mining-1.jpg" },
  { name: "Probability for Computer Science", meta: "NPTEL · 57%", image: "assets/certs/nptel-probability-for-computer-science-1.jpg" },
  { name: "Design and Analysis of Algorithms", meta: "NPTEL · 51%", image: "assets/certs/nptel-design-and-analysis-of-algorithms-1.jpg" },
  { name: "Data Analysis", meta: "SWAYAM", image: "assets/certs/other-swayam-data-analysis.jpg" },
];

const EXTRACURRICULARS = [
  { name: "2nd Position, Research Paper Presentation", meta: "Stratum'24, Ramanujan College (DU)", image: "assets/certs/extra-stratum24.jpg" },
  { name: "HackVSIT 5th Edition", meta: "Certificate of Appreciation", image: "assets/certs/extra-hackvsit.jpg" },
  { name: "Vihaan 007 Hackathon", meta: "IEEE DTU", image: "assets/certs/extra-vihaan007.jpg" },
];

// No certificate image exists for these - just real activities/roles.
const EXTRACURRICULARS_TEXT = [
  "Core Member, Technical Club ACE",
  "Women's safety & empowerment NGO work (GC Club)",
  "College hackathon management",
];
