"use client";

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center px-8 md:px-16 lg:px-20 pt-24 pb-8"
    >
      <div className="max-w-[1510px] mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Photo */}
        <div className="shrink-0">
          <img
            src="/profile.jpg"
            alt="Ivy Xu"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover"
            style={{ border: "3px solid #e8e8e8" }}
          />
        </div>

        {/* Text */}
        <div>
          <p style={{ fontFamily: "'Space Mono', monospace" }} className="text-sm text-[#999] mb-3">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a1a1a] leading-tight mb-3">
            Ivy Xu
          </h1>
          <p style={{ fontFamily: "'Space Mono', monospace" }} className="text-base text-[#666] mb-6">
            MIT MBAn Candidate · AI, Machine Learning, Data Science &amp; Analytics
          </p>
          <p className="text-[#555] leading-relaxed mb-6 text-base md:text-lg">
            I am a Master of Business Analytics candidate at MIT Sloan School of Management,
            graduating in August 2026. I graduated from Haverford College in May 2025. My work has
            spanned GenAI, machine learning, optimization, and causal inference across industries
            including tech, healthcare, and finance. I enjoy applying data-driven solutions to tackle
            real-world business problems. In my free time, I enjoy snowboarding, doing pottery, and
            exploring restaurants with friends.
          </p>

          {/* Pill buttons */}
          <div className="flex flex-wrap gap-3 mb-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-sm font-semibold border-2 border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-all duration-200"
            >
              Download CV
            </a>
            <a
              href="mailto:ivyxu127@mit.edu"
              className="px-6 py-2.5 rounded-full text-sm font-semibold border-2 border-[#d0d0d0] text-[#555] hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all duration-200"
            >
              Email
            </a>
          </div>

          {/* Social links */}
          <div className="flex gap-5">
            <a
              href="https://github.com/ivyxuxt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Space Mono', monospace" }}
              className="text-sm text-[#999] hover:text-[#1a1a1a] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ivyxuxt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "'Space Mono', monospace" }}
              className="text-sm text-[#999] hover:text-[#1a1a1a] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
