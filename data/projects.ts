export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    title: "GenAI Lab — Continual Learning Agents",
    description:
      "Building a retrieval-based agent using Vision-Language Models to process repair order documents. Designing a prompt-optimization framework to score agent outputs and improve system prompts using iterative feedback loops.",
    tags: ["GenAI", "Prompt Optimization", "Python"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/barathvelmu/continual-learning-agents-research",
      },
    ],
  },
  {
    title: "Analytics Lab — Fraud Prevention in Commercial Lending",
    description:
      "Built end-to-end fraud detection pipelines in Python for early-stage screening. Trained and tuned logistic regression and CatBoost models on highly imbalanced fraud data, engineering 20+ behavioral features capturing bank account activity and credit risk signals.",
    tags: ["Feature Engineering", "Machine Learning", "FinTech", "Python"],
    links: [
      { label: "GitHub", href: "https://github.com/Linda0840/Alab" },
      { label: "Report", href: "/fraud-report.pdf" },
    ],
  },
  {
    title: "Email Spam Detection",
    description:
      "Improved email spam detection accuracy by comparing TF-IDF + Logistic Regression, BERT, and Hierarchical Attention Network (HAN) approaches.",
    tags: ["NLP", "BERT", "PyTorch", "Python"],
    links: [
      {
        label: "Colab",
        href: "https://colab.research.google.com/drive/1QJJTQGDohRoLAtjUem0IS-3HbosLQ05s",
      },
    ],
  },
  {
    title: "Parkinson's Disease Severity Prediction",
    description:
      "Built an ML pipeline predicting Parkinson's disease severity from acoustic features. Compared OLS, LASSO, MIO sparse regression, CART, XGBoost, and Regression Trees for UPDRS prediction.",
    tags: ["Interpretable ML", "Optimization", "Python", "R"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ivyxuxt/Predicting-Parkinson-s-Disease-Progression",
      },
    ],
  },
  {
    title: "EV Charging Infrastructure Optimization in NY State",
    description:
      "Relocated EV charging ports in New York under budget, demand, and traffic constraints. Applied adaptive optimization to plan a $1B EV charging network expansion across NY ZIP codes.",
    tags: ["MIP", "Gurobi", "Operations Research", "Python"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hanna0601/ev-charging-optimization",
      },
    ],
  },
  {
    title: "Sustainable Farming in India",
    description:
      "Applied causal inference and regression models to farmer survey data to estimate treatment effects of financial incentives on Direct-Seeded Rice adoption. Conducted robustness and sensitivity analyses to assess model stability.",
    tags: ["Causal Inference", "RCT", "Experimental Design"],
    links: [{ label: "Slides", href: "/farming-paper.pdf" }],
  },
];
