import ProjectFeature from "./ProjectFeature/ProjectFeature";
import Hero from "./Hero/Hero";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Footer from "../Footer/Footer";

export default function Landing() {
  return (
    <>
      <Hero />
      <ProjectFeature />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}
