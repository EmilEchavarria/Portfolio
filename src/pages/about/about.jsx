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
  
  return <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500">{count}</span>;
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
    const baseClasses = "group relative p-4 sm:p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all duration-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-2";
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
    
    // Diferentes tipos de entrada según el índice
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

  // Función para obtener las clases de animación de elementos principales
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

      {/* Título principal sin parallax */}
      <section 
        id="about-header" 
        className="text-center py-6 sm:py-8 md:py-10 px-4 relative mb-2"
      >
        <h1 className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 animate-fade-in">
          About Me
        </h1>
        <p 
          className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-0 animate-[fade-in-up_1.2s_ease-out_0.3s_forwards]"
        >
          Passionate developer creating digital experiences
        </p>
      </section>

 {/* Descripción personal */}
<section
  id="about-description-container"
  className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 max-w-6xl mt-[-0.5rem]"
>
  <div className="flex flex-col items-center lg:flex-row justify-center gap-6 lg:gap-12">
    {/* Contenido de texto */}
    <div 
      ref={(el) => setElementRef('text-content', el)}
      data-id="text-content"
      className={`flex-1 max-w-2xl ${getMainAnimationClasses('text-content', 'fade-right')}`}
    >
      <div className="text-center lg:text-left mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
          Emil Echavarria
        </h1>
        <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-medium">
          Software Developer
        </h2>
      </div>

      <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
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
        className={`mt-8 sm:mt-12 ${getMainAnimationClasses('stats', 'fade-up')}`}
      >
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
          <div className="text-center">
            <AnimatedCounter 
              end={19} 
              duration={1500} 
              isVisible={visibleElements.has('stats')} 
            />
            <p className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wide">Years Old</p>
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
            <p className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wide">Technologies</p>
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
            <p className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wide">Projects</p>
          </div>
        </div>
      </div>
    </div>

    {/* Imagen de perfil */}
    <div 
      ref={(el) => setElementRef('profile-image', el)}
      data-id="profile-image"
      className={`flex-shrink-0 order-first lg:order-last mx-auto ${getMainAnimationClasses('profile-image', 'fade-left')}`}
    >
      <div className="relative group">
        <img
          src={photo}
          alt="Emil Echavarria"
          id="profile-photo"
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-2 border-gray-600 transition-all duration-300 group-hover:border-blue-400"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-800/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  </div>
</section>
      {/* Sección de Stack tecnológico */}
      <section id="tech-stack-section" className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Header de la sección */}
          <div 
            ref={(el) => setElementRef('tech-header', el)}
            data-id="tech-header"
            className={`text-center mb-10 sm:mb-16 ${getMainAnimationClasses('tech-header', 'scale')}`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              MY TECH STACK
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl sm:max-w-2xl mx-auto">
              Technologies I work with
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
                Developer Tools
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