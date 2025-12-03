export const developerInfo = {
  name: "Alex Chen",
  title: "Junior Data Scientist & ML Engineer",
  tagline: "Transforming data into actionable insights with machine learning",
  email: "alex.chen@example.com",
  location: "San Francisco, CA",
  linkedin: "https://linkedin.com/in/alexchen",
  github: "https://github.com/alexchen",
  bio: `I'm a passionate data scientist and machine learning engineer with a strong foundation in statistical analysis, 
  predictive modeling, and deep learning. With a Master's degree in Data Science and hands-on experience in building 
  end-to-end ML pipelines, I thrive on solving complex problems and extracting meaningful patterns from data.
  
  My journey in tech started with a curiosity about how algorithms can learn from data. This led me to specialize in 
  computer vision, NLP, and time-series forecasting. I'm constantly learning and staying updated with the latest 
  advancements in AI/ML.
  
  When I'm not coding, you'll find me contributing to open-source projects, writing technical blog posts, or 
  participating in Kaggle competitions.`,
  resumeUrl: "#",
};

export const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description: "Built an ensemble ML model achieving 94% accuracy in predicting customer churn for a telecom company. Implemented feature engineering, hyperparameter tuning, and model interpretability with SHAP values.",
    tags: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Pandas"],
    image: "/placeholder.svg",
    github: "https://github.com/alexchen/churn-prediction",
    demo: "#",
    metrics: { accuracy: "94%", precision: "91%", recall: "89%" },
  },
  {
    id: 2,
    title: "Sentiment Analysis API",
    description: "Developed a production-ready NLP API for real-time sentiment analysis of social media posts. Fine-tuned BERT model on custom dataset with 50K+ labeled samples.",
    tags: ["PyTorch", "Transformers", "FastAPI", "Docker", "AWS"],
    image: "/placeholder.svg",
    github: "https://github.com/alexchen/sentiment-api",
    demo: "#",
    metrics: { f1Score: "0.92", latency: "45ms", requests: "10K/day" },
  },
  {
    id: 3,
    title: "Stock Price Forecasting",
    description: "Created LSTM-based time series model for stock price prediction with automated data pipeline. Integrated with real-time market data APIs for live predictions.",
    tags: ["TensorFlow", "Keras", "Time Series", "yfinance", "Streamlit"],
    image: "/placeholder.svg",
    github: "https://github.com/alexchen/stock-forecast",
    demo: "#",
    metrics: { mape: "3.2%", sharpeRatio: "1.8", backtestYears: "5" },
  },
  {
    id: 4,
    title: "Image Classification Pipeline",
    description: "End-to-end computer vision pipeline for medical image classification. Implemented data augmentation, transfer learning with ResNet50, and deployed on AWS SageMaker.",
    tags: ["TensorFlow", "OpenCV", "AWS SageMaker", "MLflow", "DVC"],
    image: "/placeholder.svg",
    github: "https://github.com/alexchen/medical-vision",
    demo: "#",
    metrics: { auc: "0.97", sensitivity: "95%", specificity: "93%" },
  },
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "R", level: 75 },
    { name: "JavaScript", level: 70 },
  ],
  frameworks: [
    { name: "TensorFlow/Keras", level: 90 },
    { name: "PyTorch", level: 85 },
    { name: "Scikit-learn", level: 95 },
    { name: "Pandas/NumPy", level: 95 },
  ],
  tools: [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 80 },
    { name: "AWS/GCP", level: 75 },
    { name: "MLflow/DVC", level: 85 },
  ],
  specializations: [
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Time Series Analysis",
    "Feature Engineering",
    "Model Deployment",
    "Data Visualization",
  ],
};

export const chatbotContext = `
You are Alex Chen's AI assistant on their portfolio website. You help visitors learn about Alex's:
- Background: Junior Data Scientist & ML Engineer based in San Francisco
- Education: Master's in Data Science
- Experience: Specializing in ML/AI, NLP, Computer Vision, Time Series
- Projects: Customer Churn Prediction (94% accuracy), Sentiment Analysis API (BERT), Stock Forecasting (LSTM), Medical Image Classification
- Skills: Python, TensorFlow, PyTorch, Scikit-learn, SQL, AWS, Docker
- Interests: Open-source, Kaggle competitions, technical blogging

Be friendly, professional, and concise. If asked about hiring or contact, encourage them to use the contact form.
Keep responses under 3 sentences unless asked for details.
`;
