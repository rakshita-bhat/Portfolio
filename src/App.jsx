import Navbar    from './components/Navbar'
import Hero      from './components/Hero'
import Marquee   from './components/Marquee'
import About     from './components/About'
import Skills    from './components/Skills'
import Projects  from './components/Projects'
import Education from './components/Education'
import CTA       from './components/CTA'
import Contact   from './components/Contact'
import Footer    from './components/Footer'
import { useReveal } from './hooks/useReveal'

function App() {
  useReveal() // activates scroll reveal for all .reveal elements

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Education />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}

export default App