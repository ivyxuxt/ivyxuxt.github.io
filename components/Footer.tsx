export default function Footer() {
  return (
    <footer
      className="py-8 px-6 text-center text-sm border-t border-[#e8e8e8]"
      style={{ fontFamily: "'Space Mono', monospace", color: "#888" }}
    >
      Copyright © {new Date().getFullYear()} Ivy Xu. All Rights Reserved.
    </footer>
  );
}
