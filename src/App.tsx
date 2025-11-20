import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ScrollProgress from "./components/ScrollProgress"
import Skills from "./components/Skills"

export default function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Skills/>
      <Projects />
      <Contact />
    </div>
  )
}
