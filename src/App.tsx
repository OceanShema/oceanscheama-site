import { Hero } from './components/Hero'
import { About } from './components/About'
import { IndustryFocus } from './components/IndustryFocus'
import { Philosophy } from './components/Philosophy'
import { ManualVsAutomated } from './components/ManualVsAutomated'
import { Features } from './components/Features'
import { Navbar } from './components/Navbar'
import { MaritimeMap } from './components/MaritimeMap'
import { CatchIntelligence } from './components/CatchIntelligence'
import { Contact } from './components/Contact'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
                      <main>
                        <Hero />
                        <About />
                        <IndustryFocus />
                        <Philosophy />
                        <ManualVsAutomated />
                        <Features />
                      <MaritimeMap />
        <CatchIntelligence />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2026 OceanSchema. All Rights Reserved.</p>
          <nav className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
