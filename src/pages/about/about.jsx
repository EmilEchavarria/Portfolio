"use client";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import "./about.css";

import Header from "../../components/layout/header/header";
import photo from "../../assets/images/description/photo.png";
//import { IconCloud } from "../../components/ui/icon-cloud";

//ICON CLOUD IMAGES

import js from "../../assets/images/about/js.png";
import mysql from "../../assets/images/about/mysql.png";
import html from "../../assets/images/about/html.png";
import css from "../../assets/images/about/css.png";
import ts from "../../assets/images/about/typescript.png";
import angular from "../../assets/images/about/angular.png";
import react from "../../assets/images/about/react.png";
import csharp from "../../assets/images/about/csharp.png";
import github from "../../assets/images/about/github.png";
import git from "../../assets/images/about/git.png";
import figma from "../../assets/images/about/figma.png";
import sqlserver from "../../assets/images/about/sqlserver.png";
import vs from "../../assets/images/about/vs.png";
import vsc from "../../assets/images/about/vsc.png";
import docker from "../../assets/images/about/docker.png";
import nodejs from "../../assets/images/about/nodejs.png";
// import powerbi from "../../assets/images/about/powerbi.png";

// Tech stack data organized by category
const techStackData = {
  frontend: [
    { img: js, name: "JavaScript" },
    { img: ts, name: "TypeScript" },
    { img: react, name: "React" },
    { img: angular, name: "Angular" },
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: figma, name: "Figma" },
    { img: figma, name: "Next.js" },
    { img: figma, name: "Astro" }
  ],
  backend: [
    { img: csharp, name: ".NET Framework" },
    { img: mysql, name: "MySQL" },
    { img: sqlserver, name: "SQL Server" },
    { img: nodejs, name: "Node.js" },
    { img: nodejs, name: "Express.js" }
  ],
  tools: [
    { img: git, name: "Git" },
    { img: github, name: "GitHub" },
    { img: vs, name: "Visual Studio" },
    { img: vsc, name: "VS Code" },
    { img: docker, name: "Railway" },
    { img: docker, name: "Vercel" }
  ]
};

// Hook personalizado para detectar elementos en viewport
const useIntersectionObserver = (options = {}) => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const elementsRef = useRef(new Map());

  useEffect(() => {
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
  }, [options]);

  const setElementRef = (id, element) => {
    if (element) {
      elementsRef.current.set(id, element);
    } else {
      elementsRef.current.delete(id);
    }
  };

  return { visibleElements, setElementRef };
};

// Componente para contadores animados
const AnimatedCounter = ({ end, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      const progress = Math.min(1, 1 - remaining / duration);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOutCubic * end);
      
      setCount(current);
      
      if (remaining === 0) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16); // ~60fps
    
    return () => clearInterval(timer);
  }, [end, duration, isVisible]);
  
  return <span className="text-3xl sm:text-4xl font-bold text-blue-500">{count}</span>;
};

// PropTypes para AnimatedCounter
AnimatedCounter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  isVisible: PropTypes.bool.isRequired
};

// Componente para las tarjetas de tecnología
const TechCard = ({ tech, index, isVisible, delay = 0 }) => {
  const getAnimationClasses = () => {
    const baseClasses = "group relative p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-2";
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
    
    // Diferentes tipos de entrada según el índice
    const animationType = index % 4;
    switch (animationType) {
      case 0:
        return `${baseClasses} opacity-0 translate-y-16 scale-90`;
      case 1:
        return `${baseClasses} opacity-0 -translate-x-16 scale-90`;
      case 2:
        return `${baseClasses} opacity-0 translate-x-16 scale-90`;
      default:
        return `${baseClasses} opacity-0 translate-y-12 -translate-x-8 scale-85`;
    }
  };

  return (
    <div
      className={getAnimationClasses()}
      style={{
        animationDelay: `${delay + (index * 0.1)}s`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Card content */}
      <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
        <div className="flex-shrink-0">
          <img 
            src={tech.img} 
            alt={tech.name} 
            className="w-12 h-12 lg:w-14 lg:h-14 transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
        <span className="text-white text-lg sm:text-xl font-medium text-center sm:text-left group-hover:text-blue-300 transition-colors duration-300">
          {tech.name}
        </span>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

// PropTypes para el componente TechCard
TechCard.propTypes = {
  tech: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool.isRequired,
  delay: PropTypes.number
};

export function About() {
  const { visibleElements, setElementRef } = useIntersectionObserver();
  const [scrollY, setScrollY] = useState(0);

  // Efecto parallax suave
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para obtener las clases de animación de elementos principales
  const getMainAnimationClasses = (elementId, animationType = 'fade-up') => {
    const isVisible = visibleElements.has(elementId);
    const baseClasses = "transition-all duration-1000 ease-out";
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
    
    switch (animationType) {
      case 'fade-up':
        return `${baseClasses} opacity-0 translate-y-16`;
      case 'fade-left':
        return `${baseClasses} opacity-0 translate-x-16`;
      case 'fade-right':
        return `${baseClasses} opacity-0 -translate-x-16`;
      case 'scale':
        return `${baseClasses} opacity-0 scale-90`;
      default:
        return `${baseClasses} opacity-0 translate-y-16`;
    }
  };

  return (
    <main className="about-container min-h-screen overflow-x-hidden">
      <Header />

      {/* Título principal con parallax */}
      <section 
        id="about-header" 
        className="text-center py-6 px-4 sm:py-8 lg:py-10 relative mb-2"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <h1 className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 animate-fade-in">
          About Me
        </h1>
        <p 
          className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto opacity-0 animate-fade-in-up mb-0"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          Passionate developer creating digital experiences
        </p>
      </section>

      {/* Descripción personal */}
      <section
        id="about-description-container"
        className="container mx-auto px-4 pb-16 max-w-7xl mt-4"
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
          {/* Contenido de texto */}
          <div 
            ref={(el) => setElementRef('text-content', el)}
            data-id="text-content"
            className={`text-container flex-1 max-w-2xl ${getMainAnimationClasses('text-content', 'fade-right')}`}
          >
            <div className="text-center lg:text-left mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                Emil Echavarria
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-blue-400 font-medium">
                Software Developer
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg leading-relaxed mw">
              <p className="text-gray-300">
                💻 I&apos;m <span className="text-blue-500 font-medium">Emil Echavarria</span>, 19
                years old, and a{" "}
                <span className="text-blue-500 font-medium">junior software developer</span>.
                While my focus spans various areas of programming, my true passion
                lies in front-end development, where I enjoy creating interactive
                and visually engaging experiences.
              </p>
              
              <p className="text-gray-300">
                <span className="text-blue-500 font-medium">
                  I love exploring new technologies
                </span>{" "}
                and constantly learning, which allows me to enhance my skills and
                approach projects with a more holistic perspective on the software
                development process.
              </p>
              
              <p className="text-gray-300">
                I&apos;m always looking for{" "}
                <span className="text-blue-500 font-medium">new challenges</span> that allow me
                to grow professionally, collaborate on projects that have a positive
                impact on technology, and stay at the forefront of trends shaping
                the future of development. 🚀
              </p>
            </div>

            {/* Estadísticas con contadores animados */}
            <div 
              ref={(el) => setElementRef('stats', el)}
              data-id="stats"
              className={`mt-12 ${getMainAnimationClasses('stats', 'fade-up')}`}
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-8">
                <div className="text-center">
                  <AnimatedCounter 
                    end={19} 
                    duration={1500} 
                    isVisible={visibleElements.has('stats')} 
                  />
                  <p className="text-sm text-gray-400 mt-1 uppercase tracking-wide">Years Old</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <AnimatedCounter 
                      end={15} 
                      duration={2000} 
                      isVisible={visibleElements.has('stats')} 
                    />
                    <span className="text-2xl font-bold text-blue-500 ml-1">+</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1 uppercase tracking-wide">Technologies</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <AnimatedCounter 
                      end={10} 
                      duration={1800} 
                      isVisible={visibleElements.has('stats')} 
                    />
                    <span className="text-2xl font-bold text-blue-500 ml-1">+</span>
                  </div>
                  <p className="text-sm text-gray-400 mt-1 uppercase tracking-wide">Projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen de perfil */}
          <div 
            ref={(el) => setElementRef('profile-image', el)}
            data-id="profile-image"
            className={`flex-shrink-0 order-first lg:order-last ${getMainAnimationClasses('profile-image', 'fade-left')}`}
          >
            <div className="relative group">
              <img
                src={photo}
                alt="Emil Echavarria"
                id="profile-photo"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl border-4 border-gray-700 transition-all duration-700 group-hover:border-blue-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/25"
              />
              {/* Efecto de overlay sutil */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Stack tecnológico */}
      <section id="tech-stack-section" className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header de la sección */}
          <div 
            ref={(el) => setElementRef('tech-header', el)}
            data-id="tech-header"
            className={`text-center mb-16 ${getMainAnimationClasses('tech-header', 'scale')}`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              MY TECH STACK
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto">
              Technologies I work with
            </p>
          </div>

          {/* Frontend Section */}
          <div className="mb-20">
            <div 
              ref={(el) => setElementRef('frontend-title', el)}
              data-id="frontend-title"
              className={`mb-8 ${getMainAnimationClasses('frontend-title', 'fade-up')}`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
                Frontend
              </h3>
            </div>
            
            <div 
              ref={(el) => setElementRef('frontend-grid', el)}
              data-id="frontend-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {techStackData.frontend.map((tech, index) => (
                <TechCard
                  key={`frontend-${index}`}
                  tech={tech}
                  index={index}
                  isVisible={visibleElements.has('frontend-grid')}
                  delay={0.2}
                />
              ))}
            </div>
          </div>

          {/* Backend Section */}
          <div className="mb-20">
            <div 
              ref={(el) => setElementRef('backend-title', el)}
              data-id="backend-title"
              className={`mb-8 ${getMainAnimationClasses('backend-title', 'fade-up')}`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
                Backend
              </h3>
            </div>
            
            <div 
              ref={(el) => setElementRef('backend-grid', el)}
              data-id="backend-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {techStackData.backend.map((tech, index) => (
                <TechCard
                  key={`backend-${index}`}
                  tech={tech}
                  index={index}
                  isVisible={visibleElements.has('backend-grid')}
                  delay={0.3}
                />
              ))}
            </div>
          </div>

          {/* Developer Tools Section */}
          <div className="mb-16">
            <div 
              ref={(el) => setElementRef('tools-title', el)}
              data-id="tools-title"
              className={`mb-8 ${getMainAnimationClasses('tools-title', 'fade-up')}`}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
                Developer Tools
              </h3>
            </div>
            
            <div 
              ref={(el) => setElementRef('tools-grid', el)}
              data-id="tools-grid"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {techStackData.tools.map((tech, index) => (
                <TechCard
                  key={`tools-${index}`}
                  tech={tech}
                  index={index}
                  isVisible={visibleElements.has('tools-grid')}
                  delay={0.4}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nube de Iconos - Centrada 
      <div className="icon-cloud">
        <IconCloud
          images={[js,ts,react,angular,html,css,git,github,figma,mysql,csharp,]}
        />
      </div>*/}

      {/* Estilos CSS adicionales */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out forwards;
        }

        /* Mejoras de scroll suave */
        html {
          scroll-behavior: smooth;
        }

        /* Optimizaciones de rendimiento */
        .transition-all {
          will-change: transform, opacity;
        }

        /* Efectos de hover mejorados */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </main>
  );
}

export default About;