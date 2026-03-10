import Nav from "@/components/Nav";
import ProjectsGrid from "@/components/ProjectsGrid";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <ProjectsGrid />
        <About />
      </main>
      <Footer />
    </>
  );
}
