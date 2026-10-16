import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About, Skills } from "./components/About";
import { Projects, Experience, Contact } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}