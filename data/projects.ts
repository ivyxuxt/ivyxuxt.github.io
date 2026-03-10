export interface Project {
  title: string;
  bullets: string[];
  tags: string[];
  links: { label: string; href: string }[];
  coverImage: string;
}

export const projects: Project[] = [
  {
    title: "GenAI Lab — Continual Learning Agents",
    bullets: [
      "Built a retrieval-based agent using Vision-Language Models to process automotive repair order documents",
      "Designed a prompt-optimization framework with iterative feedback loops to score and improve agent outputs",
    ],
    tags: ["GenAI", "Prompt Optimization", "Python"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/barathvelmu/continual-learning-agents-research",
      },
    ],
    coverImage: "/covers/genai.jpg",
  },
  {
    title: "Analytics Lab — Fraud Prevention in Commercial Lending",
    bullets: [
      "Built end-to-end fraud detection pipelines in Python for early-stage commercial loan screening",
      "Trained logistic regression and CatBoost on highly imbalanced data, engineering 20+ behavioral features across bank activity and credit risk signals",
    ],
    tags: ["Feature Engineering", "Machine Learning", "FinTech", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/Linda0840/Alab" },
      { label: "Report", href: "/fraud-report.pdf" },
    ],
    coverImage: "/covers/fraud.jpg",
  },
  {
    title: "Email Spam Detection",
    bullets: [
      "Compared TF-IDF + Logistic Regression, BERT, and Hierarchical Attention Network (HAN) for spam classification",
      "Improved detection accuracy by leveraging contextual embeddings over traditional bag-of-words baselines",
    ],
    tags: ["NLP", "BERT", "PyTorch", "Python"],
    links: [
      {
        label: "Colab",
        href: "https://colab.research.google.com/drive/1QJJTQGDohRoLAtjUem0IS-3HbosLQ05s",
      },
    ],
    coverImage: "/covers/spam.jpg",
  },
  {
    title: "Parkinson's Disease Severity Prediction",
    bullets: [
      "Built an ML pipeline predicting Parkinson's disease severity from acoustic voice features",
      "Benchmarked OLS, LASSO, MIO sparse regression, CART, XGBoost, and Regression Trees for UPDRS score prediction",
    ],
    tags: ["Interpretable ML", "Optimization", "Python", "R"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ivyxuxt/Predicting-Parkinson-s-Disease-Progression",
      },
    ],
    coverImage: "/covers/parkinsons.jpg",
  },
  {
    title: "EV Charging Infrastructure Optimization in NY State",
    bullets: [
      "Optimally relocated EV charging ports across New York under budget, demand, and traffic constraints",
      "Applied adaptive MIP optimization to plan a $1B charging network expansion across NY ZIP codes",
    ],
    tags: ["MIP", "Gurobi", "Operations Research", "Python"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hanna0601/ev-charging-optimization",
      },
    ],
    coverImage: "/covers/ev.jpg",
  },
  {
    title: "Sustainable Farming in India",
    bullets: [
      "Applied causal inference and regression to farmer RCT data to estimate effects of financial incentives on Direct-Seeded Rice adoption",
      "Conducted robustness checks and sensitivity analyses to validate treatment effect estimates",
    ],
    tags: ["Causal Inference", "RCT", "Experimental Design"],
    links: [{ label: "Slides", href: "/farming-paper.pdf" }],
    coverImage: "/covers/farming.jpg",
  },
];
