// Single source of truth for the Projects / Experience / Skills sections.
// Edit this file to add the 10th project once it's pushed, or to fill in
// the resume link / placement-cell dates.

const RESUME_URL = "#"; // TODO: point this at your hosted resume (GitHub or Drive link)

const PROJECTS = [
  {
    name: "Learndata",
    tag: "Flagship",
    desc: "A hands-on data engineering platform: fix real injected ETL faults across Postgres, MongoDB, a Spark warehouse, a data lake, and a lakehouse, graded with real remediation writeups.",
    tech: ["Python", "Next.js", "PostgreSQL", "MongoDB", "Apache Spark"],
    demo: "https://data-infra-learn.vercel.app",
    repo: "https://github.com/abhinavsingh-official/data-infra-learn",
  },
  {
    name: "Posture-Check",
    tag: "Computer Vision",
    desc: "A multi-mode OpenCV/MediaPipe playground: yoga form correction, workout rep counting, hand-gesture stickers, an air canvas, a virtual mouse, and a drowsiness monitor, all in one app.",
    tech: ["Python", "OpenCV", "MediaPipe", "Streamlit"],
    repo: "https://github.com/abhinavsingh-official/Posture-Check",
  },
  {
    name: "EmotionDetect",
    tag: "Audio / ML",
    desc: "Voice emotion detection with a real timeline mode for longer clips and conversations, not just single-utterance classification.",
    tech: ["Python", "PyTorch", "scikit-learn", "Streamlit"],
    repo: "https://github.com/abhinavsingh-official/EmotionDetect",
  },
  {
    name: "SentimentAutomated",
    tag: "Data Pipeline",
    desc: "Live sentiment ingestion and analysis pipeline with heatmap reporting, built around a real streaming data source.",
    tech: ["Python", "Hugging Face", "SQLite", "Streamlit"],
    repo: "https://github.com/abhinavsingh-official/SentimentAutomated",
  },
  {
    name: "RAGReliabilityChecker",
    tag: "LLM Reliability",
    desc: "Checks whether a RAG answer is actually grounded in its retrieved context: span-level hallucination detection, not another RAG chatbot.",
    tech: ["Python", "PyTorch", "Hugging Face", "scikit-learn"],
    repo: "https://github.com/abhinavsingh-official/RAGReliabilityChecker",
  },
  {
    name: "SafeNL2SQL",
    tag: "LLM Safety",
    desc: "Natural-language-to-SQL with a real safety layer: sqlglot validates every generated query is a plain read-only SELECT before it ever touches the database.",
    tech: ["Python", "PyTorch", "SQLite", "sqlglot"],
    repo: "https://github.com/abhinavsingh-official/SafeNL2SQL",
  },
  {
    name: "DriftWatchdog",
    tag: "MLOps",
    desc: "Watches a real deployed classifier for data/model drift: synthetic drift injection, statistical detection (ml3-drift), and live accuracy-decay tracking.",
    tech: ["Python", "scikit-learn", "Plotly", "Streamlit"],
    repo: "https://github.com/abhinavsingh-official/DriftWatchdog",
  },
  {
    name: "BlurGate",
    tag: "Computer Vision",
    desc: "Document/photo blur quality gate: a classical Laplacian-variance detector and a learned multi-feature classifier scored side by side, flagging where they disagree.",
    tech: ["Python", "OpenCV", "scikit-learn", "Streamlit"],
    repo: "https://github.com/abhinavsingh-official/BlurGate",
  },
  {
    name: "SkillGapMatcher",
    tag: "NLP",
    desc: "ATS-style resume-to-job-description matcher with an explicit skills-gap breakdown, not just a single similarity score.",
    tech: ["Python", "spaCy", "scikit-learn", "Streamlit"],
    repo: "https://github.com/abhinavsingh-official/SkillGapMatcher",
  },
];

const EXPERIENCE = [
  {
    title: "AI Associate",
    org: "Vezras Technologies Pvt. Ltd.",
    location: "Noida, India (On-site)",
    dates: "Jul 2026 — Present",
    points: [
      "Work primarily in data engineering, building and maintaining ETL pipelines that power the company's core platform",
      "Built platform connectors integrating external systems into the broader data pipeline",
      "Contributed across the stack: backend services, API routers, and contract design, with some frontend work as needed",
      "Defined business logic underpinning how key company metrics are calculated and reported",
    ],
  },
  {
    title: "AI/ML Intern",
    org: "Xansr Media",
    location: "Gurugram, India (Hybrid)",
    dates: "Feb 2026 — Jul 2026",
    points: [
      "Built sports-analytics prediction models that outperformed the market benchmark probability by ~10 percentage points (62% vs. a 52% baseline)",
      "Researched and evaluated different algorithmic modeling approaches to identify the best-performing techniques",
      "Engineered features and cleaned large-scale sports datasets to feed the modeling pipeline",
      "Tuned hyperparameters extensively to improve model accuracy and generalization",
      "Built and documented a FastAPI service (with Swagger) to serve predictions",
    ],
  },
  {
    title: "Business Analyst",
    org: "Apex Systems",
    location: "Delhi, India (Hybrid)",
    dates: "Jul 2025 — Oct 2025",
    points: [
      "Led core data digitalization efforts for a traditionally manual business, introducing industry-standard formatting and structured storage for the first time",
      "Analyzed inventory using SQL to identify aged and non-sellable stock, optimizing stock levels and improving turnover",
      "Built interactive Tableau/Power BI dashboards to track sales and performance, replacing manual reporting",
    ],
  },
  {
    title: "Data Analyst",
    org: "International Institute of SDG's and Public Policy Research",
    location: "Delhi, India (Remote)",
    dates: "Jul 2025 — Sep 2025",
    points: [
      "Analyzed multi-year (2019–2023) National Social Assistance Programme (NSAP) datasets to support policy evaluation and decision-making",
      "Cleaned and visualized large-scale fund-release and beneficiary-coverage data, surfacing implementation-efficiency trends",
      "Built analytical reports and presentation decks translating findings into recommendations for policy improvement",
    ],
  },
];

const EDUCATION = {
  degree: "BCA",
  school: "VIPS",
  dates: "2023 — 2026",
  points: [
    "9.1 CGPA, with a focus on data and AI",
    "Built early real-world projects (Posture-Check, EmotionDetect, SentimentAutomated) alongside coursework",
    "Placement Cell (2024–2026): digitized physical placement records, coordinated company outreach, and organized company assessment tests",
    "Helped organize and manage college hackathons, and worked with a campus club focused on women's safety and empowerment",
  ],
};

const SKILLS = [
  "Python", "SQL", "PyTorch", "scikit-learn", "OpenCV",
  "Hugging Face / Transformers", "FastAPI", "Streamlit",
  "PostgreSQL", "MongoDB", "Apache Spark", "Databricks",
  "SQLite", "Docker", "Git",
];
