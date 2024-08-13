import ProjectFeature from "./ProjectFeature/ProjectFeature";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Landing() {
  return (
    <Navbar>
      <Hero />
      <ProjectFeature />
      <Skills />
      <Projects />
      <Footer />
    </Navbar>
  );
}
