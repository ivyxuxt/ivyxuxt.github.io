const skills = [
  "Python",
  "R",
  "SQL",
  "PyTorch",
  "Scikit-learn",
  "XGBoost",
  "CatBoost",
  "Gurobi",
  "NLP",
  "Causal Inference",
  "Machine Learning",
  "Optimization",
];

export default function About() {
  return (
    <section id="about" className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-100">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">About</h2>
      <div className="max-w-2xl">
        <p className="text-slate-600 leading-relaxed mb-8">
          Ivy Xu is a Master of Business Analytics candidate at MIT Sloan School of Management,
          graduating in August 2026. She graduated from Haverford College in May 2025 with a BS in
          Mathematics and BA in Political Science, summa cum laude. Her work has spanned GenAI,
          machine learning, optimization, and causal inference across industries including tech,
          healthcare, and finance. Ivy enjoys applying data-driven solutions to tackle real-world
          business problems. In her free time, she enjoys snowboarding, doing pottery, and exploring
          restaurants with friends.
        </p>
        <div>
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
            Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1 rounded-full border border-slate-200 text-slate-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
