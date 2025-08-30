"use client";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import Header from "../../components/layout/header/header";
import photo from "../../assets/images/description/photo.png";
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

// Custom hook for detecting elements in viewport
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

// Component for animated counters
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
  
  return <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">{count}</span>;
};

// PropTypes for AnimatedCounter
AnimatedCounter.propTypes = {
  end: PropTypes.number.isRequired,
  duration: PropTypes.number,
  isVisible: PropTypes.bool.isRequired
};

// Component for tech cards
const TechCard = ({ tech, index, isVisible, delay = 0 }) => {
  const getAnimationClasses = () => {
    const baseClasses = "group relative p-4 sm:p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-2";
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
    
    // Different entry animations based on index
    const animationType = index % 4;
    switch (animationType) {
      case 0:
        return `${baseClasses} opacity-0 translate-y-12 scale-90`;
      case 1:
        return `${baseClasses} opacity-0 -translate-x-12 scale-90`;
      case 2:
        return `${baseClasses} opacity-0 translate-x-12 scale-90`;
      default:
        return `${baseClasses} opacity-0 translate-y-8 -translate-x-8 scale-85`;
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
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
        <span className="text-white text-base sm:text-lg md:text-xl font-medium text-center sm:text-left group-hover:text-blue-300 transition-colors duration-300">
          {tech.name}
        </span>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

// PropTypes for TechCard component
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

  // Function to get animation classes for main elements
  const getMainAnimationClasses = (elementId, animationType = 'fade-up') => {
    const isVisible = visibleElements.has(elementId);
    const baseClasses = "transition-all duration-1000 ease-out";
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
    
    switch (animationType) {
      case 'fade-up':
        return `${baseClasses} opacity-0 translate-y-12`;
      case 'fade-left':
        return `${baseClasses} opacity-0 translate-x-12`;
      case 'fade-right':
        return `${baseClasses} opacity-0 -translate-x-12`;
      case 'scale':
        return `${baseClasses} opacity-0 scale-90`;
      default:
        return `${baseClasses} opacity-0 translate-y-12`;
    }
  };

  return (
    <main className="min-h-screen text-white overflow-x-hidden">
      <Header />

      {/* Main title section without parallax */}
      <section 
        id="about-header" 
        className="text-center py-6 sm:py-8 md:py-10 px-4 relative mb-2"
      >
        <h1 className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 animate-fade-in">
          Sobre Mí
        </h1>
        <p 
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-[fade-in-up_1.2s_ease-out_0.3s_forwards]"
        >
          Desarrollador apasionado creando experiencias digitales
        </p>
      </section>

      {/* Personal description section */}
      <section
        id="about-description-container"
        className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 max-w-7xl mt-[-0.5rem]"
      >
        <div className="flex flex-col items-center lg:flex-row justify-center gap-6 lg:gap-12">
          {/* Text content */}
          <div 
            ref={(el) => setElementRef('text-content', el)}
            data-id="text-content"
            className={`flex-1 max-w-2xl ${getMainAnimationClasses('text-content', 'fade-right')}`}
          >
            <div className="text-center lg:text-left mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                Emil Echavarría
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-medium">
                Desarrollador de Software
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
              <p className="text-gray-300">
                💻 Soy <span className="text-blue-500 font-medium">Emil Echavarría</span>, tengo 19
                años y soy un{" "}
                <span className="text-blue-500 font-medium">desarrollador de software junior</span>.
                Aunque mi enfoque abarca varias áreas de la programación, mi verdadera pasión
                está en el desarrollo front-end, donde disfruto creando experiencias
                interactivas y visualmente atractivas.
              </p>
              
              <p className="text-gray-300">
                <span className="text-blue-500 font-medium">
                  Me encanta explorar nuevas tecnologías
                </span>{" "}
                y aprender constantemente, lo que me permite mejorar mis habilidades y
                abordar los proyectos con una perspectiva más integral sobre el proceso
                de desarrollo de software.
              </p>
              
              <p className="text-gray-300">
                Siempre estoy buscando{" "}
                <span className="text-blue-500 font-medium">nuevos desafíos</span> que me permitan
                crecer profesionalmente, colaborar en proyectos que tengan un impacto positivo
                en la tecnología y mantenerme a la vanguardia de las tendencias que están
                dando forma al futuro del desarrollo. 🚀
              </p>
            </div>

            {/* Stats with animated counters */}
            <div 
              ref={(el) => setElementRef('stats', el)}
              data-id="stats"
              className={`mt-8 sm:mt-12 ${getMainAnimationClasses('stats', 'fade-up')}`}
            >
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
                <div className="text-center">
                  <AnimatedCounter 
                    end={19} 
                    duration={1500} 
                    isVisible={visibleElements.has('stats')} 
                  />
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wide">Años</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <AnimatedCounter 
                      end={15} 
                      duration={2000} 
                      isVisible={visibleElements.has('stats')} 
                    />
                    <span className="text-xl sm:text-2xl font-bold text-blue-500 ml-1">+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wide">Tecnologías</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <AnimatedCounter 
                      end={10} 
                      duration={1800} 
                      isVisible={visibleElements.has('stats')} 
                    />
                    <span className="text-xl sm:text-2xl font-bold text-blue-500 ml-1">+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wide">Proyectos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile image */}
          <div 
            ref={(el) => setElementRef('profile-image', el)}
            data-id="profile-image"
            className={`flex-shrink-0 order-first lg:order-last mx-auto ${getMainAnimationClasses('profile-image', 'fade-left')}`}
          >
            <div className="relative group">
              <img
                src={photo}
                alt="Emil Echavarría"
                id="profile-photo"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-2 border-gray-600 transition-all duration-300 group-hover:border-blue-400"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

{/* Experience section - Responsive Timeline Design */}
<section id="experience-section" className="py-12 sm:py-16 px-4 sm:px-6">
  <div className="container mx-auto max-w-6xl">
    {/* Section header */}
    <div 
      ref={(el) => setElementRef('experience-header', el)}
      data-id="experience-header"
      className={`text-center mb-12 sm:mb-16 ${getMainAnimationClasses('experience-header', 'scale')}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
        Mi Experiencia
      </h2>
    </div>

    {/* Desktop Timeline */}
    <div className="hidden lg:block">
      <div 
        ref={(el) => setElementRef('experience-card', el)}
        data-id="experience-card"
        className={`relative ${getMainAnimationClasses('experience-card', 'fade-up')}`}
      >
        {/* Main vertical timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300 transform -translate-x-1/2"></div>
        
        {/* Timeline item */}
        <div className="relative flex items-center justify-center mb-12">
          
          {/* Timeline dot with SVG icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/50 flex items-center justify-center z-10 group hover:scale-110 transition-transform duration-300">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Content layout */}
          <div className="flex items-start w-full max-w-5xl">
            
            {/* Left side - Job details */}
            <div className="flex-1 pr-8 sm:pr-12 text-center">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-x-2">
                
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3">
                    Desarrollador Web Freelance
                  </h3>
                  <p className="text-blue-400 font-semibold mb-2 text-base sm:text-lg">
                    Wix Studio - Contrato Mensual
                  </p>
                  <p className="text-gray-400 text-sm mb-3 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    Distrito Nacional, República Dominicana
                  </p>
                </div>
                
                {/* Job responsibilities - mejor organizadas */}
                <div className="space-y-3 mb-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-medium text-blue-200 block mb-1">• Gestión integral del sitio web del cliente</span>
                    Asegurando funcionalidad, seguridad y una experiencia de usuario profesional.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-medium text-blue-200 block mb-1">• Diseño e implementación de nuevas secciones y contenidos</span>
                    Alineados con los objetivos estratégicos del cliente.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-medium text-blue-200 block mb-1">• Optimización continua de rendimiento y velocidad</span>
                    Garantizando estabilidad y presentación visual atractiva.
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    <span className="font-medium text-blue-200 block mb-1">• Trabajo autónomo y responsable</span>
                    Cumpliendo entregas mensuales con organización y altos estándares de calidad.
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Wix Studio', 'Web Development', 'UX/UI Design', 'Performance Optimization', 'Content Management'].map((skill, index) => (
                    <span 
                      key={index}
                      className="text-xs px-3 py-1 text-blue-300 bg-blue-500/20 border border-blue-500/30 rounded-full hover:bg-blue-500/30 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Date */}
            <div className="flex-1 pl-8 sm:pl-12 text-left flex items-center">
              <div className="bg-gradient-to-r from-blue-500/10 to-transparent p-4 rounded-lg">
                <span className="text-white font-bold text-xl sm:text-2xl bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent block mb-1">
                  2025-Present
                </span>
                <span className="text-gray-400 text-sm">
                  Actualidad
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Future timeline extension */}
        <div className="relative flex items-center justify-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700/30 rounded-full border-2 border-gray-600/50 flex items-center justify-center z-10 opacity-50">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </div>
          
          <div className="flex items-center w-full max-w-5xl">
            <div className="flex-1 pr-8 sm:pr-12 text-right">
              <div className="opacity-30">
                <p className="text-gray-500 text-sm">Próximas experiencias...</p>
              </div>
            </div>
            
            <div className="flex-1 pl-8 sm:pl-12 text-left">
              <div className="opacity-30">
                <span className="text-gray-500 text-sm">Futuro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Mobile/Tablet Timeline */}
    <div className="block lg:hidden">
      <div 
        ref={(el) => setElementRef('experience-mobile', el)}
        data-id="experience-mobile"
        className={`${getMainAnimationClasses('experience-mobile', 'fade-up')}`}
      >
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-700/50 mx-2 sm:mx-0">
          {/* Header section - más responsive */}
          <div className="flex flex-col xs:flex-row xs:items-center gap-3 xs:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 xs:w-12 xs:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mx-auto xs:mx-0">
              <svg className="w-4 h-4 xs:w-5 xs:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-center xs:text-left flex-1 min-w-0">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white leading-tight mb-1">
                Desarrollador Web Freelance
              </h3>
              <p className="text-blue-400 font-semibold text-xs xs:text-sm">
                2025-Present
              </p>
            </div>
          </div>
          
          {/* Company info */}
          <div className="mb-3 sm:mb-4 text-center xs:text-left">
            <p className="text-blue-400 font-semibold mb-2 text-sm sm:text-base">
              Wix Studio - Contrato Mensual
            </p>
            <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center xs:justify-start gap-2">
              <svg className="w-3 h-3 xs:w-4 xs:h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="break-words">Distrito Nacional, República Dominicana</span>
            </p>
          </div>
          
          {/* Responsibilities - más legible en móvil */}
          <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              <span className="font-medium text-blue-200 block xs:inline">• Gestión integral del sitio web del cliente,</span>
              <span className="block xs:inline"> asegurando funcionalidad, seguridad y experiencia profesional</span>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              <span className="font-medium text-blue-200 block xs:inline">• Diseño e implementación de nuevas secciones</span>
              <span className="block xs:inline"> alineadas con objetivos estratégicos</span>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              <span className="font-medium text-blue-200 block xs:inline">• Optimización continua de rendimiento,</span>
              <span className="block xs:inline"> velocidad y presentación visual</span>
            </div>
            <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              <span className="font-medium text-blue-200 block xs:inline">• Trabajo autónomo con entregas mensuales</span>
              <span className="block xs:inline"> y altos estándares de calidad</span>
            </div>
          </div>
          
          {/* Skills - más responsive */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
            {['Wix Studio', 'Web Development', 'UX/UI Design', 'Performance Optimization', 'Content Management'].map((skill, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 sm:px-3 sm:py-1.5 text-blue-300 bg-blue-500/20 border border-blue-500/30 rounded-full whitespace-nowrap hover:bg-blue-500/30 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Tech stack section */}
      <section id="tech-stack-section" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Section header */}
          <div 
            ref={(el) => setElementRef('tech-header', el)}
            data-id="tech-header"
            className={`text-center mb-10 sm:mb-16 ${getMainAnimationClasses('tech-header', 'scale')}`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Mi Stack Tecnológico
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
              Tecnologías con las que trabajo
            </p>
          </div>

          {/* Frontend Section */}
          <div className="mb-12 sm:mb-20">
            <div 
              ref={(el) => setElementRef('frontend-title', el)}
              data-id="frontend-title"
              className={`mb-6 sm:mb-8 ${getMainAnimationClasses('frontend-title', 'fade-up')}`}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
                Frontend
              </h3>
            </div>
            
            <div 
              ref={(el) => setElementRef('frontend-grid', el)}
              data-id="frontend-grid"
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
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
          <div className="mb-12 sm:mb-20">
            <div 
              ref={(el) => setElementRef('backend-title', el)}
              data-id="backend-title"
              className={`mb-6 sm:mb-8 ${getMainAnimationClasses('backend-title', 'fade-up')}`}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
                Backend
              </h3>
            </div>
            
            <div 
              ref={(el) => setElementRef('backend-grid', el)}
              data-id="backend-grid"
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
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
          <div className="mb-12 sm:mb-16">
            <div 
              ref={(el) => setElementRef('tools-title', el)}
              data-id="tools-title"
              className={`mb-6 sm:mb-8 ${getMainAnimationClasses('tools-title', 'fade-up')}`}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left">
                Herramientas de Desarrollo
              </h3>
            </div>
            
            <div 
              ref={(el) => setElementRef('tools-grid', el)}
              data-id="tools-grid"
              className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
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

      {/* Additional CSS styles */}
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

        html {
          scroll-behavior: smooth;
        }

        .transition-all {
          will-change: transform, opacity;
        }

        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
      `}</style>
    </main>
  );
}

export default About;