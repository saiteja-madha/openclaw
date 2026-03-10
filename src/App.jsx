import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <About />
      <Projects />
    </div>
  )
}

export default App
