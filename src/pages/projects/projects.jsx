"use client";
import "./projects.css"; // Asegúrate de que este archivo CSS esté bien configurado
import Header from "../../components/layout/header/header";
import { MagicCard } from "../../components/ui/magic-card"; // Asegúrate de que la ruta sea correcta
import { Meteors } from "../../components/ui/meteors"; // Asegúrate de que la ruta sea correcta

import jtag from "../../assets/images/projects/jtag.png";
import autogleam from "../../assets/images/projects/autogleam.png";
import portfolio from "../../assets/images/projects/portfolio.png";
import portfoliobasic from "../../assets/images/projects/portfoliobasic.png";
import stockify from "../../assets/images/projects/stockify.png";
import electronic from "../../assets/images/projects/electronic.png";
import enrollmentsystem from "../../assets/images/projects/enrollmentsystem.png";
import professionalcv from "../../assets/images/projects/professionalcv.png";






const projects = [
  {
    id: 1,
    title: "Auto Gleam",
    description: "Aplicación web tipo SPA desarrollada en Angular para gestión de servicios de lavado de autos. Incluye autenticación por roles, citas, reportes y diseño centrado en la experiencia del usuario.",
    image: autogleam,
    demoUrl: "https://autogleam.vercel.app", // ejemplo

  },
  {
    id: 2,
    title: "J Tag Events",
    description:"Sitio web desarrollado con HTML, CSS y JavaScript para una empresa de eventos. Incluye catálogo de servicios, secciones informativas y diseño responsive.",
    image: jtag,
    demoUrl: "https://j-tag-events.vercel.app/",

  },

   {
    id: 3,
    title: "Stockify",
    description:"Aplicación de escritorio en C# y Windows Forms para gestión de inventario, ventas y facturación. Usa MySQL y genera reportes en PDF.",
    image: stockify,
    demoUrl: "https://github.com/EmilEchavarria/Stockify",

  },

  {
    id: 4,
    title: "Enrollment System",
    description:"Sistema de inscripción web en HTML, CSS y JavaScript. Permite registrar datos personales, seleccionar materias con horarios y generar un resumen exportable en PDF. Incluye sección de ayuda interactiva.",
    image: enrollmentsystem,
    demoUrl: "https://student-enrollment-system-six.vercel.app",

  },
  

  {
    id: 5,
    title: "Portfolio",
    description:"Portafolio personal moderno creado con React y Tailwind CSS. Muestra proyectos, habilidades y trayectoria como desarrollador front-end.",
    image: portfolio,
    demoUrl: "https://emilechavarria.vercel.app/",

  },
 
   {
    id: 6,
    title: "Professionalcv",
    description:"Generador de CV interactivo en HTML, CSS y JavaScript. El usuario ingresa sus datos y obtiene un currículum dinámico renderizado en la misma página.",
    image: professionalcv,
    demoUrl: "https://student-enrollment-system-six.vercel.app",

  },

  {
    id: 7,
    title: "Basic Portfolio",
    description:"Primera versión de mi portafolio creada con HTML, CSS y JavaScript. Muestra mis primeros proyectos y habilidades iniciales.",
    image: portfoliobasic,
    demoUrl: "https://github.com/EmilEchavarria/Portfolio-Homework-1",

  },
  {
    id: 8,
    title: "Electronic Organizer",
    description:"Aplicación de escritorio en C# para gestionar contactos. Realiza operaciones CRUD en una base de datos local con interfaz sencilla.",
    image: electronic,
    demoUrl: "https://github.com/EmilEchavarria/Electronic-Organizer?tab=readme-ov-file",

  },
];

export function Projects() {
  return (
    <main>
      <Header />
      <section id="about-header" className="text-center my-8">
        <h1 className="gradient-text">Projects</h1>
      </section>
      <div className="projects-grid">
        {projects.map((project) => (
          <MagicCard key={project.id} className="project-magic-card">
            <div className="project-card">
              {/* Meteors como fondo de la tarjeta */}
              <div className="meteors-wrapper">
                <Meteors />
              </div>

              <img src={project.image} alt={project.title} className="project-image" />
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-buttons">
                <button className="project-button">See More</button>
<a
  href={project.demoUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="project-demo-button"
  role="button"
>
  Demo
</a>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </main>
  );
}


export default Projects;
