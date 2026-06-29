import ParticleCanvas from './components/ParticleCanvas';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Vision from './components/Vision';
import Product from './components/Product';
import WhyNow from './components/WhyNow';
import Market from './components/Market';
import WhyUs from './components/WhyUs';
import Laboratory from './components/Laboratory';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="app-container">
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <main>
        <Problem />
        <Vision />
        <Product />
        <WhyNow />
        <Market />
        <WhyUs />
        <Laboratory />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;
