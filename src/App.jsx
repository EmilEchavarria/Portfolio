//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//gitpracticaimport viteLogo from '/vite.svg'
/*import './App.css'
import { Home } from './pages/home/home'


function App() {
 return <Home />
}

export default App
// src/App.jsx

*/
import { RetroGrid } from './components/ui/retro-grid'; 
import { Home } from './pages/home/home';

function App() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Fondo Retro */}
      <RetroGrid className="absolute inset-0 z-0 retro-grid-background" />

      {/* Contenido de Home sobre el fondo */}
      <div className="absolute inset-0 z-10 flex flex-col">
        {/* Dock como header fijo */}
        <div className="fixed top-0 left-0 w-full z-20">
          <Home />
        </div>
      </div>
    </div>
  );
}


export default App;
