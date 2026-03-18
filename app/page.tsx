import Nav from "@/components/Nav";
import About from "@/components/About";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <About />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
