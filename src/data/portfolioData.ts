export const developerInfo = {
  name: "Muhammad Hamza",
  title: "Data Scientist & ML Engineer",
  tagline: "Building intelligent, data-driven solutions that enhance business performance and operational efficiency",
  email: "mr.hamxa942@gmail.com",
  phone: "(647)-878-3422",
  location: "Oakville, ON",
  linkedin: "https://linkedin.com/in/muhammad-hamza-khattak/",
  github: "https://github.com/mrhamxo",
  bio: `Results-oriented Data Scientist and Machine Learning Engineer with 2+ years of experience building, deploying, and maintaining data-driven solutions that enhance business performance and operational efficiency.

Skilled in designing scalable ML models and analytics pipelines using Python, TensorFlow, PyTorch, and Scikit-learn. Strong background in data exploration, feature engineering, and predictive modeling to generate actionable insights and support data-driven decision-making.

Experienced in collaborating with cross-functional teams to develop AI and ML products that optimize business processes and improve financial and operational outcomes. Master's degree in Data Science with a proven track record of delivering impactful, production-ready models that drive measurable value.`,
  resumeUrl: "#",
};

export const projects = [
  {
    id: 1,
    title: "LangGraph-Powered Agentic Chatbot",
    description: "Built intelligent multi-agent chatbot system with dynamic task switching and autonomous decision-making capabilities. Designed modular agent framework enabling one-click prompt templates, optional web search integration, and rapid prototyping of agent behaviors.",
    tags: ["LangGraph", "FastAPI", "Streamlit", "Groq API", "OpenAI", "Tavily"],
    image: "/placeholder.svg",
    github: "https://github.com/mrhamxo/langgraph-agentic-chatbot",
    demo: "#",
    metrics: { conversations: "100+", features: "Multi-Agent", integration: "Web Search" },
  },
  {
    id: 2,
    title: "Modular RAG-Powered PDF Chatbot",
    description: "Architected enterprise-grade RAG system for multi-PDF document Q&A supporting 10+ simultaneous documents. Implemented secure document parsing, vector embeddings, and semantic search with ChromaDB for efficient retrieval.",
    tags: ["FastAPI", "ChromaDB", "LLaMA-3", "Streamlit", "LangChain"],
    image: "/placeholder.svg",
    github: "https://github.com/mrhamxo/rag-pdf-chatbot",
    demo: "#",
    metrics: { timeReduction: "60%", documents: "10+", type: "Enterprise RAG" },
  },
  {
    id: 3,
    title: "Intelligent Log Message Classification",
    description: "Created hybrid log analysis system combining rule-based Regex, BERT embeddings, and LLaMA-3 verification achieving 92% classification accuracy. Deployed Streamlit dashboard supporting real-time and batch processing.",
    tags: ["BERT", "LLaMA-3", "Regex", "Streamlit", "NLP"],
    image: "/placeholder.svg",
    github: "https://github.com/mrhamxo/log-classification",
    demo: "#",
    metrics: { accuracy: "92%", throughput: "10K+/hr", triageReduction: "70%" },
  },
  {
    id: 4,
    title: "AI-Based Disease & Treatment Advisor",
    description: "Developed ML healthcare assistant predicting diseases from user symptoms with 89% diagnostic accuracy across 40+ conditions. Built comprehensive application providing personalized disease information, medications, diet plans, and workout recommendations.",
    tags: ["Scikit-learn", "Decision Trees", "Random Forest", "Streamlit"],
    image: "/placeholder.svg",
    github: "https://github.com/mrhamxo/disease-treatment-advisor",
    demo: "#",
    metrics: { accuracy: "89%", conditions: "40+", users: "500+" },
  },
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "PostgreSQL/MySQL", level: 85 },
    { name: "PHP", level: 70 },
  ],
  frameworks: [
    { name: "TensorFlow/Keras", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "Scikit-learn", level: 95 },
    { name: "LangChain/LangGraph", level: 90 },
  ],
  tools: [
    { name: "Git/GitHub", level: 95 },
    { name: "FastAPI", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS/GCP/Azure", level: 70 },
  ],
  specializations: [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Generative AI",
    "RAG Systems",
    "LLM Development",
    "Computer Vision",
    "Data Analytics",
    "Feature Engineering",
    "Model Deployment",
  ],
};

export const experience = [
  {
    title: "ML Engineer",
    company: "ITSOLERA",
    location: "Remote",
    period: "Nov 2022 – Feb 2025",
    highlights: [
      "Developed and optimized deep learning models for image and text analysis, improving classification accuracy by 18%",
      "Built end-to-end data preprocessing pipelines increasing training dataset quality by 25%",
      "Implemented CNN and transformer-based architectures reducing training time by 30%",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "National Center of AI (NCAI)",
    location: "Pakistan",
    period: "Feb 2022 – Nov 2022",
    highlights: [
      "Engineered PHP-based smart parking system improving campus parking efficiency by 40%",
      "Built dynamic weather forecasting web application serving 1,000+ monthly active users",
      "Created and annotated 10,000+ image datasets for AI classification projects",
    ],
  },
];

export const education = [
  {
    degree: "MS Data Science",
    school: "Pak-Austria Fachhochschule Institute of Applied Sciences & Technology",
    period: "Oct 2023 – Jun 2025",
    coursework: "Machine Learning, Deep Learning, Natural Language Processing, Computer Vision, Big Data Analytics",
  },
  {
    degree: "BS Software Engineering",
    school: "Islamia College University, Peshawar",
    period: "Sep 2018 – Aug 2022",
    coursework: "Data Structures, Database Systems, AI Fundamentals, Software Design",
  },
];

export const certifications = [
  "Generative AI Application Developer Certificate (Pak Angel) – RAG and Agentic AI Applications | 2025",
  "Generative AI Engineering with LLMs Specialization (Coursera) | 2024",
  "AI for Medicine Specialization (Coursera) | 2024",
  "Google Data Analytics Specialization (Coursera) | 2023",
  "Machine Learning, AI & Data Science Certificate (Ehunar Institute) | 2023",
];

export const chatbotContext = `
You are Muhammad Hamza's AI assistant on his portfolio website. You help visitors learn about Hamza's:
- Background: Data Scientist & ML Engineer with 2+ years of experience, based in Oakville, ON, Canada
- Education: MS in Data Science (Pak-Austria Fachhochschule), BS in Software Engineering
- Experience: ML Engineer at ITSOLERA (2+ years), Web Developer Intern at NCAI
- Key Projects: LangGraph Agentic Chatbot, RAG PDF Chatbot (60% time reduction), Log Classification (92% accuracy), Disease Advisor (89% accuracy)
- Skills: Python, TensorFlow, PyTorch, Scikit-learn, LangChain, LangGraph, SQL, FastAPI, Docker, AWS/GCP
- Specializations: Generative AI, RAG Systems, LLM Development, NLP, Deep Learning
- Certifications: Generative AI, AI for Medicine, Google Data Analytics

Be friendly, professional, and concise. Highlight achievements with specific metrics when relevant.
If asked about hiring or contact, encourage them to use the contact form or email: mr.hamxa942@gmail.com
Keep responses under 3 sentences unless asked for details.
`;
