"use client";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/layout/header/header";
import { MagicCard } from "../../components/ui/magic-card";
import { Meteors } from "../../components/ui/meteors";

import jtag from "../../assets/images/projects/jtag.png";
import autogleam from "../../assets/images/projects/autogleam.png";
import portfolio from "../../assets/images/projects/portfolio.png";
import portfoliobasic from "../../assets/images/projects/portfoliobasic.png";
import stockify from "../../assets/images/projects/stockify.png";
import electronic from "../../assets/images/projects/electronic.png";
import enrollmentsystem from "../../assets/images/projects/enrollmentsystem.png";
import professionalcv from "../../assets/images/projects/professionalcv.png";
import agrogestor from "../../assets/images/projects/agrogestor.png";

const projects = [
  {
    id: 1,
    title: "AgroGestor",
    description: "Agrogestor is a digital platform that helps manage and optimize agricultural processes through real-time control of crops, resources, and data.",
    image: agrogestor,
    demoUrl: "https://agrogestor.vercel.app",
  },
  {
    id: 2,
    title: "Auto Gleam",
    description: "Aplicación web tipo SPA desarrollada en Angular para gestión de servicios de lavado de autos. Incluye autenticación por roles, citas, reportes y diseño centrado en la experiencia del usuario.",
    image: autogleam,
    demoUrl: "https://autogleam.vercel.app",
  },
  {
    id: 3,
    title: "J Tag Events",
    description: "Sitio web desarrollado con HTML, CSS y JavaScript para una empresa de eventos. Incluye catálogo de servicios, secciones informativas y diseño responsive.",
    image: jtag,
    demoUrl: "https://j-tag-events.vercel.app/",
  },
  {
    id: 4,
    title: "Stockify",
    description: "Aplicación de escritorio en C# y Windows Forms para gestión de inventario, ventas y facturación. Usa MySQL y genera reportes en PDF.",
    image: stockify,
    demoUrl: "https://github.com/EmilEchavarria/Stockify",
  },
  {
    id: 5,
    title: "Enrollment System",
    description: "Sistema de inscripción web en HTML, CSS y JavaScript. Permite registrar datos personales, seleccionar materias con horarios y generar un resumen exportable en PDF. Incluye sección de ayuda interactiva.",
    image: enrollmentsystem,
    demoUrl: "https://student-enrollment-system-six.vercel.app",
  },
  {
    id: 6,
    title: "Portfolio",
    description: "Portafolio personal moderno creado con React y Tailwind CSS. Muestra proyectos, habilidades y trayectoria como desarrollador front-end.",
    image: portfolio,
    demoUrl: "https://emilechavarria.vercel.app/",
  },
  {
    id: 7,
    title: "Professionalcv",
    description: "Generador de CV interactivo en HTML, CSS y JavaScript. El usuario ingresa sus datos y obtiene un currículum dinámico renderizado en la misma página.",
    image: professionalcv,
    demoUrl: "https://student-enrollment-system-six.vercel.app",
  },
  {
    id: 8,
    title: "Basic Portfolio",
    description: "Primera versión de mi portafolio creada con HTML, CSS y JavaScript. Muestra mis primeros proyectos y habilidades iniciales.",
    image: portfoliobasic,
    demoUrl: "https://github.com/EmilEchavarria/Portfolio-Homework-1",
  },
  {
    id: 9,
    title: "Electronic Organizer",
    description: "Aplicación de escritorio en C# para gestionar contactos. Realiza operaciones CRUD en una base de datos local con interfaz sencilla.",
    image: electronic,
    demoUrl: "https://github.com/EmilEchavarria/Electronic-Organizer?tab=readme-ov-file",
  },
];

// Hook personalizado para detectar elementos en viewport
const useIntersectionObserver = (options = {}) => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const elementsRef = useRef(new Map());

  useEffect(() => {
    // Crear copia de la referencia actual para el cleanup
    const currentElements = elementsRef.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const elementId = entry.target.getAttribute('data-id');
        if (entry.isIntersecting) {
          setVisibleElements(prev => new Set([...prev, elementId]));
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    currentElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      currentElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [options]); // Agregada la dependencia options

  const setElementRef = (id, element) => {
    if (element) {
      elementsRef.current.set(id, element);
    } else {
      elementsRef.current.delete(id);
    }
  };

  return { visibleElements, setElementRef };
};

export function Projects() {
  const { visibleElements, setElementRef } = useIntersectionObserver();
  const [scrollY, setScrollY] = useState(0);

  // Efecto parallax suave
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para obtener el delay de animación
  const getAnimationDelay = (index) => {
    return `${index * 0.1}s`;
  };

  // Función para obtener las clases de animación
  const getAnimationClasses = (projectId, index) => {
    const isVisible = visibleElements.has(projectId.toString());
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
    
    // Diferentes tipos de entrada según el índice
    const animationType = index % 4;
    switch (animationType) {
      case 0:
        return `${baseClasses} opacity-0 translate-y-16 scale-95`;
      case 1:
        return `${baseClasses} opacity-0 -translate-x-16 scale-95`;
      case 2:
        return `${baseClasses} opacity-0 translate-x-16 scale-95`;
      default:
        return `${baseClasses} opacity-0 translate-y-12 -translate-x-8 scale-90`;
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      
      {/* Header Section con parallax */}
      <section 
        className="text-center py-8 px-4 sm:py-12 lg:py-16 relative"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <h1 className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
          Projects
        </h1>
        <p 
          className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Explora mi colección de proyectos que demuestran mis habilidades en desarrollo web y de software
        </p>
      </section>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => setElementRef(project.id, el)}
              data-id={project.id}
              className={getAnimationClasses(project.id, index)}
              style={{
                animationDelay: getAnimationDelay(index),
                animationFillMode: 'forwards'
              }}
            >
              <MagicCard className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-2">
                {/* Meteors Background */}
                <div className="absolute inset-0 overflow-hidden">
                  <Meteors />
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="w-full h-48 sm:h-52 lg:h-48 xl:h-52 mb-4 rounded-xl overflow-hidden bg-gray-800/50 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="flex-grow flex flex-col">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-all duration-300 transform group-hover:translate-x-1">
                      {project.title}
                    </h2>
                    
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 flex-grow line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <button className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]">
                        See More
                      </button>
                      
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2.5 bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-blue-300 hover:text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] hover:-translate-y-0.5 text-center active:scale-[0.98]"
                      >
                        Demo
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay Effect mejorado */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </MagicCard>
            </div>
          ))}
        </div>
      </div>

      {/* Estilos CSS adicionales */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}

export default Projects;