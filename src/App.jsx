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
import { RetroGrid } from "./components/ui/retro-grid"; // Asegúrate de importar RetroGrid
import { Home } from './pages/home/home'
import Header from "./components/layout/header/Header";

function App() {
  return (
    <div className="relative min-h-screen">
      <RetroGrid className="retro-grid-background" /> 
      <Home />
      <Header/>
      {/* Otros componentes */}
    </div>
  );
}

export default App;
