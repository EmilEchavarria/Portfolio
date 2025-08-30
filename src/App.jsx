import { HashRouter as Router, Route, Routes } from "react-router-dom"; 
import { RetroGrid } from './components/ui/retro-grid'; 
import { Home } from './pages/home/home'; 
import About from './pages/about/about'; 
import Projects from './pages/projects/projects'; 
import Education from './pages/education/education'; 
import Certificates from './pages/certificates/certificates'; 
import Contact from './pages/contact/contact'; 

// Importa SpeedInsights y Analytics
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <div className="h-screen overflow-hidden">
        <RetroGrid className="absolute inset-0 z-0 retro-grid-background" />

        <div className="absolute inset-0 z-10 flex flex-col">
          <div className="top-0 left-0 w-full z-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>

        {/* Componente Speed Insights */}
        <SpeedInsights />

        {/* Componente Analytics para contar visitantes */}
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
