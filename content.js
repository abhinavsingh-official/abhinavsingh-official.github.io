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

const NPTEL_CERTIFICATIONS = [
  "Business Intelligence & Analytics (71%)",
  "Foundation of Cloud IoT Edge ML (72%)",
  "Big Data Computing (71%)",
  "The Joy of Computing using Python (69%)",
  "Responsible & Safe AI Systems (66%)",
  "Data Analytics with Python (65%)",
  "Recommender Systems (67%)",
  "Data Mining (60%)",
  "Probability for Computer Science (57%)",
  "Design and Analysis of Algorithms (51%)",
];

const OTHER_CERTIFICATIONS = [
  "IBM SkillsBuild — From Learner to Builder: Become an AI Agent Architect",
  "Deloitte Australia — Data Analytics Job Simulation (Forage)",
  "SWAYAM — Data Analysis",
];

const EXTRACURRICULARS = [
  "2nd Position, Research Paper Presentation — Stratum'24, Ramanujan College (DU)",
  "HackVSIT 5th Edition — Certificate of Appreciation",
  "Vihaan 007 Hackathon — IEEE DTU",
  "Core Member, Technical Club ACE",
  "Women's safety & empowerment NGO work (GC Club)",
  "College hackathon management",
];
