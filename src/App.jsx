import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <div className="app">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
    </div>
  )
}

export default App
