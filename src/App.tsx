import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Navbar } from './components/Navbar'
import { MaritimeMap } from './components/MaritimeMap'
import { CatchIntelligence } from './components/CatchIntelligence'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <MaritimeMap />
        <CatchIntelligence />
      </main>
      <footer className="footer">
        <p>&copy; 2026 OceanSchema. Professional Maritime Systems.</p>
      </footer>
    </div>
  )
}

export default App
