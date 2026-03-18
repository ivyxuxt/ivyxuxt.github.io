import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ivy Xu — Data Science & Analytics",
  description:
    "Portfolio of Ivy Xu, MIT MBAn candidate. Projects in GenAI, machine learning, optimization, and causal inference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-[#1a1a1a]`}>
        {children}
      </body>
    </html>
  );
}
