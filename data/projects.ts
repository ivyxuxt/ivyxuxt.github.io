export interface Project {
  title: string;
  bullets: string[];
  tags: string[];
  industries: string[];
  links: { label: string; href: string }[];
  coverImage: string;
}

export const projects: Project[] = [
  {
    title: "Optimization Booking Intake",
    bullets: [
      "Developed a forecasting model to predict raw customer demand for shipping vessel bookings using clustering and segmentation techniques",
      "Built an optimization simulator to maximize profit and support decision-making on cargo allocation and booking intake",
    ],
    tags: ["Maritime Logistics", "Revenue Optimization", "Python"],
    industries: ["Shipping demand forecasting", "Profit optimization for booking decisions"],
    links: [
      { label: "GitHub", href: "https://github.com/ivyxuxt" },
    ],
    coverImage: "/covers/shipping.png",
  },
  {
    title: "Continual Learning Agents",
    bullets: [
      "Built a retrieval-based agent using Vision-Language Models to process automotive repair order documents",
      "Designed a prompt-optimization framework with iterative feedback loops to score and improve agent outputs",
    ],
    tags: ["GenAI", "Prompt Optimization", "Python"],
    industries: ["Automotive service operations", "Document intelligence for daily workflows"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/barathvelmu/continual-learning-agents-research",
      },
    ],
    coverImage: "/covers/genai.png",
  },
  {
    title: "Fraud Prevention in Commercial Lending",
    bullets: [
      "Built end-to-end fraud detection pipelines in Python for early-stage commercial loan screening",
      "Trained logistic regression and CatBoost on highly imbalanced data, engineering 20+ behavioral features across bank activity and credit risk signals",
    ],
    tags: ["Feature Engineering", "Machine Learning", "FinTech", "Python"],
    industries: ["FinTech risk screening"],
    links: [
      { label: "GitHub", href: "https://github.com/Linda0840/Alab" },
      { label: "Slides", href: "/fraud-slides.pdf" },
      { label: "Report", href: "/fraud-report.pdf" },
    ],
    coverImage: "/covers/fraud.png",
  },
  {
    title: "Email Spam Detection",
    bullets: [
      "Compared TF-IDF + Logistic Regression, BERT, and Hierarchical Attention Network (HAN) for spam classification",
      "Improved detection accuracy by leveraging contextual embeddings over traditional bag-of-words baselines",
    ],
    tags: ["NLP", "BERT"],
    industries: ["Enterprise email security", "Customer communication filtering"],
    links: [
      {
        label: "Colab",
        href: "https://colab.research.google.com/drive/1QJJTQGDohRoLAtjUem0IS-3HbosLQ05s",
      },
      { label: "Report", href: "/spam-report.pdf" },
    ],
    coverImage: "/covers/spam.png",
  },
  {
    title: "Parkinson's Disease Severity Prediction",
    bullets: [
      "Built an ML pipeline predicting Parkinson's disease severity from acoustic voice features",
      "Benchmarked OLS, LASSO, MIO sparse regression, CART, XGBoost, and Regression Trees for UPDRS score prediction",
    ],
    tags: ["Interpretable ML", "Python", "Julia"],
    industries: ["Digital health analytics", "Clinical decision support"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ivyxuxt/Predicting-Parkinson-s-Disease-Progression",
      },
      { label: "Slides", href: "/parkinsons-slides.pdf" },
      { label: "Report", href: "/parkinsons-report.pdf" },
    ],
    coverImage: "/covers/parkinsons.png",
  },
  {
    title: "EV Charging Infrastructure Optimization in NY State",
    bullets: [
      "Optimally relocated EV charging ports across New York under budget, demand, and traffic constraints",
      "Applied adaptive MIP optimization to plan a $1B charging network expansion across NY ZIP codes",
    ],
    tags: ["MIP", "Gurobi"],
    industries: ["Energy infrastructure planning", "Smart mobility network optimization"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/hanna0601/ev-charging-optimization",
      },
      { label: "Slides", href: "/ev-slides.pdf" },
      { label: "Report", href: "/ev-report.pdf" },
    ],
    coverImage: "/covers/ev.png",
  },
  {
    title: "Sustainable Farming in India",
    bullets: [
      "Applied causal inference and regression to farmer RCT data to estimate effects of financial incentives on Direct-Seeded Rice adoption",
      "Conducted robustness checks and sensitivity analyses to validate treatment effect estimates",
    ],
    tags: ["Causal Inference", "Randomized Controlled Trial Experiment", "AI for Good"],
    industries: ["Data for Impact"],
    links: [{ label: "Slides", href: "/farming-paper.pdf" }],
    coverImage: "/covers/farming.png",
  },
  {
    title: "Quantitative Juvenile Justice Policy Analysis",
    bullets: [
      "Examined how \"Raise the Age\" legislative changes influenced juvenile justice policy implementation and judicial outcomes across states",
      "Analyzed 60,000+ court records over 5+ years using logistic regression, hypothesis testing, and standard error corrections for a large-scale empirical study",
    ],
    tags: ["Public Policy", "Data for Impact", "Statistical Modeling"],
    industries: ["Judicial outcomes analysis", "Policy impact evaluation"],
    links: [
      { label: "GitHub", href: "https://github.com/ivyxuxt" },
    ],
    coverImage: "/covers/age.png",
  },
];
