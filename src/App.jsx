import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import { RetroGrid } from './components/ui/retro-grid'; 
import { Home } from './pages/home/home'; 
import About from './pages/about/about'; 
import Projects from './pages/projects/projects'; 
import Education from './pages/education/education'; 
import Certificates from './pages/certificates/certificates'; 
import Contact from './pages/contact/contact'; 






function App() {
  return (
    <Router>
      <div className="h-screen overflow-hidden">
        {/* Fondo Retro */}
        <RetroGrid className="absolute inset-0 z-0 retro-grid-background" />

        {/* Contenido de Home sobre el fondo */}
        <div className="absolute inset-0 z-10 flex flex-col">
          {/* Dock como header fijo */}
          <div className="top-0 left-0 w-full z-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/education" element={<Education/>} />
              <Route path="/certificates" element={<Certificates/>} />
              <Route path="/contact" element={<Contact/>} />



            

            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
