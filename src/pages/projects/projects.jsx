"use client";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
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
    description: "AgroGestor es una plataforma digital completa diseñada para revolucionar la gestión agrícola moderna. Esta aplicación web permite a los agricultores y empresas del sector agroindustrial optimizar sus procesos productivos mediante el control en tiempo real de cultivos, recursos y datos críticos. La plataforma integra tecnologías IoT para el monitoreo continuo de condiciones ambientales, niveles de humedad del suelo, temperatura y otros parámetros vitales. Con un dashboard intuitivo y herramientas de análisis predictivo, AgroGestor facilita la toma de decisiones informadas, mejora la eficiencia de los recursos y maximiza los rendimientos de los cultivos. El sistema también incluye funcionalidades avanzadas como la gestión automatizada de riego, alertas personalizables y reportes detallados que permiten un seguimiento exhaustivo de todas las operaciones agrícolas.",
    shortDescription: "Agrogestor is a digital platform that helps manage and optimize agricultural processes through real-time control of crops, resources, and data.",
    image: agrogestor,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    demoUrl: "https://agrogestor.vercel.app",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    features: [
      "Dashboard interactivo en tiempo real",
      "Gestión integral de cultivos",
      "Monitoreo de recursos agrícolas",
      "Reportes y análisis de datos",
      "Sistema de alertas automáticas"
    ],
    challenges: "Integración de sensores IoT para monitoreo agrícola en tiempo real y optimización de la gestión de recursos.",
    githubUrl: "https://github.com/tu-usuario/agrogestor",
    category: "Web Application"
  },
  {
    id: 2,
    title: "Auto Gleam",
    description: "Auto Gleam es una aplicación web tipo SPA (Single Page Application) desarrollada en Angular que transforma completamente la experiencia de gestión de servicios de lavado de autos. Esta plataforma moderna ofrece un sistema integral que combina tecnología avanzada con diseño centrado en el usuario para proporcionar una solución completa tanto para clientes como para administradores. La aplicación cuenta con un robusto sistema de autenticación basado en roles que garantiza la seguridad y personalización de la experiencia según el tipo de usuario. Los clientes pueden programar citas de manera intuitiva, seleccionar servicios específicos y realizar seguimiento en tiempo real del estado de sus vehículos. Los administradores tienen acceso a un dashboard completo con métricas detalladas, gestión de empleados, control de inventario y herramientas de análisis de rendimiento. El sistema también incluye funcionalidades avanzadas como notificaciones push, integración con sistemas de pago, generación automática de facturas y reportes personalizables que facilitan la toma de decisiones estratégicas.",
    shortDescription: "Aplicación web tipo SPA desarrollada en Angular para gestión de servicios de lavado de autos. Incluye autenticación por roles, citas, reportes y diseño centrado en la experiencia del usuario.",
    image: autogleam,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    demoUrl: "https://autogleam.vercel.app",
    technologies: ["Angular", "TypeScript", "Firebase", "Material Design", "RxJS"],
    features: [
      "Sistema de autenticación por roles",
      "Gestión de citas en tiempo real",
      "Dashboard administrativo",
      "Generación de reportes PDF",
      "Interfaz responsive y moderna"
    ],
    challenges: "Implementación de sistema de reservas en tiempo real con sincronización automática y manejo de estados complejos.",
    githubUrl: "https://github.com/tu-usuario/autogleam",
    category: "SPA Application"
  },
  {
    id: 3,
    title: "J Tag Events",
    description: "J Tag Events es un sitio web corporativo elegante y funcional desarrollado específicamente para una empresa líder en organización de eventos. Este proyecto representa una solución web completa construida con tecnologías fundamentales como HTML5, CSS3 y JavaScript vanilla, demostrando que es posible crear experiencias digitales impactantes sin depender de frameworks complejos. El sitio web presenta un catálogo interactivo y visualmente atractivo de todos los servicios ofrecidos por la empresa, desde eventos corporativos hasta celebraciones privadas. Cada sección del sitio ha sido cuidadosamente diseñada para destacar la profesionalidad y creatividad de la empresa, incluyendo una galería dinámica que muestra eventos realizados con efectos de transición suaves y un sistema de filtrado por categorías. La plataforma también incorpora un formulario de contacto completamente funcional con validación en tiempo real, sistema de cotizaciones automáticas y integración con redes sociales. El diseño responsive garantiza una experiencia óptima en todos los dispositivos, mientras que las animaciones y efectos visuales cuidadosamente implementados crean una navegación fluida y engaging.",
    shortDescription: "Sitio web desarrollado con HTML, CSS y JavaScript para una empresa de eventos. Incluye catálogo de servicios, secciones informativas y diseño responsive.",
    image: jtag,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    demoUrl: "https://j-tag-events.vercel.app/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "AOS"],
    features: [
      "Catálogo interactivo de servicios",
      "Galería de eventos realizados",
      "Formulario de contacto funcional",
      "Diseño responsive optimizado",
      "Animaciones y efectos visuales"
    ],
    challenges: "Crear una experiencia visual impactante usando solo tecnologías vanilla con animaciones fluidas.",
    githubUrl: "https://github.com/tu-usuario/jtag-events",
    category: "Website"
  },
  {
    id: 4,
    title: "Stockify",
    description: "Stockify es una potente aplicación de escritorio desarrollada en C# con Windows Forms que revoluciona la gestión empresarial a través de un sistema integral de inventario, ventas y facturación. Esta solución empresarial robusta ha sido diseñada para satisfacer las necesidades de pequeñas y medianas empresas que requieren un control preciso y eficiente de sus operaciones comerciales. La aplicación utiliza MySQL como motor de base de datos, garantizando la integridad y seguridad de los datos empresariales críticos. Stockify ofrece un módulo completo de gestión de inventario que permite el seguimiento en tiempo real de productos, control de stock mínimo con alertas automáticas, gestión de proveedores y categorización avanzada de productos. El sistema de ventas integrado facilita la creación rápida de facturas, aplicación de descuentos, cálculo automático de impuestos y generación de reportes de ventas detallados. Una de las características más destacadas es su capacidad para generar reportes profesionales en PDF utilizando Crystal Reports, proporcionando análisis detallados de rendimiento empresarial, estados financieros y reportes de inventario que facilitan la toma de decisiones estratégicas.",
    shortDescription: "Aplicación de escritorio en C# y Windows Forms para gestión de inventario, ventas y facturación. Usa MySQL y genera reportes en PDF.",
    image: stockify,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    demoUrl: "https://github.com/EmilEchavarria/Stockify",
    technologies: ["C#", "Windows Forms", "MySQL", "Entity Framework", "Crystal Reports"],
    features: [
      "Gestión completa de inventario",
      "Sistema de ventas y facturación",
      "Reportes detallados en PDF",
      "Control de usuarios y permisos",
      "Backup automático de datos"
    ],
    challenges: "Optimización de consultas de base de datos para manejar grandes volúmenes de productos y transacciones.",
    githubUrl: "https://github.com/EmilEchavarria/Stockify",
    category: "Desktop Application"
  },
  {
    id: 5,
    title: "Enrollment System",
    description: "El Sistema de Inscripción Estudiantil es una aplicación web innovadora desarrollada con tecnologías front-end fundamentales que digitaliza y optimiza completamente el proceso de matrícula académica. Este sistema inteligente permite a los estudiantes gestionar su inscripción de manera autónoma y eficiente, eliminando las largas filas y procesos burocráticos tradicionales. La plataforma cuenta con un formulario de registro exhaustivo que captura todos los datos personales y académicos necesarios, implementando validaciones en tiempo real para garantizar la integridad de la información. Una de sus características más destacadas es el sistema inteligente de selección de materias que incluye verificación automática de prerrequisitos, detección de conflictos de horarios y sugerencias de horarios alternativos. El sistema utiliza algoritmos sofisticados para validar la disponibilidad de cupos y prevenir solapamientos de horarios, proporcionando retroalimentación inmediata al estudiante. Al finalizar el proceso de inscripción, la aplicación genera automáticamente un resumen completo en formato PDF que incluye toda la información del estudiante, las materias seleccionadas, horarios detallados y costos asociados. La interfaz incluye también un sistema de ayuda interactivo con tutoriales paso a paso y preguntas frecuentes.",
    shortDescription: "Sistema de inscripción web en HTML, CSS y JavaScript. Permite registrar datos personales, seleccionar materias con horarios y generar un resumen exportable en PDF. Incluye sección de ayuda interactiva.",
    image: enrollmentsystem,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    demoUrl: "https://student-enrollment-system-six.vercel.app",
    technologies: ["HTML5", "CSS3", "JavaScript", "jsPDF", "LocalStorage"],
    features: [
      "Registro de datos estudiantiles",
      "Selección de materias con horarios",
      "Validación de conflictos horarios",
      "Generación de PDF automática",
      "Sistema de ayuda interactivo"
    ],
    challenges: "Implementar lógica compleja de validación de horarios y conflictos usando solo JavaScript vanilla.",
    githubUrl: "https://github.com/tu-usuario/enrollment-system",
    category: "Web Application"
  },
  {
    id: 6,
    title: "Portfolio",
    description: "Mi portafolio personal representa la culminación de mis habilidades como desarrollador front-end, construido con las tecnologías más modernas y las mejores prácticas de la industria. Este proyecto va más allá de ser simplemente una vitrina de trabajos; es una experiencia digital inmersiva que refleja mi evolución profesional y pasión por crear interfaces excepcionales. Desarrollado con React y estilizado con Tailwind CSS, el portafolio implementa un sistema de componentes reutilizables y un diseño completamente responsive que se adapta perfectamente a cualquier dispositivo. La integración de Framer Motion permite animaciones sofisticadas y transiciones fluidas que guían al usuario a través de una narrativa visual cohesiva. El sitio presenta secciones cuidadosamente diseñadas que incluyen mi trayectoria profesional, habilidades técnicas con niveles de competencia, proyectos destacados con estudios de caso detallados y testimonios de clientes y colaboradores. Cada proyecto se presenta con capturas de pantalla interactivas, explicaciones técnicas detalladas y enlaces directos tanto a demos en vivo como a repositorios de código. El portafolio también incluye un blog técnico donde comparto conocimientos, tutoriales y reflexiones sobre las últimas tendencias en desarrollo web.",
    shortDescription: "Portafolio personal moderno creado con React y Tailwind CSS. Muestra proyectos, habilidades y trayectoria como desarrollador front-end.",
    image: portfolio,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    demoUrl: "https://emilechavarria.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"],
    features: [
      "Diseño moderno y responsive",
      "Animaciones suaves y atractivas",
      "Sección de proyectos interactiva",
      "Formulario de contacto funcional",
      "Optimizado para SEO"
    ],
    challenges: "Crear una experiencia visual única con animaciones complejas mientras mantengo la performance óptima.",
    githubUrl: "https://github.com/tu-usuario/portfolio",
    category: "Portfolio"
  },
  {
    id: 7,
    title: "Professional CV",
    description: "El Generador de CV Profesional es una herramienta web innovadora que democratiza la creación de currículums de alta calidad, eliminando las barreras técnicas y de diseño que tradicionalmente limitaban a los usuarios. Esta aplicación sofisticada, desarrollada completamente con tecnologías web fundamentales, permite a cualquier persona crear currículums visualmente impactantes y profesionalmente estructurados sin necesidad de conocimientos de diseño gráfico. La plataforma ofrece una biblioteca diversa de plantillas profesionales, cada una cuidadosamente diseñada para diferentes industrias y niveles de experiencia, desde recién graduados hasta ejecutivos senior. El sistema inteligente de generación de contenido guía a los usuarios a través de un proceso paso a paso, proporcionando sugerencias contextuales, ejemplos de contenido y mejores prácticas para cada sección del currículum. La función de previsualización en tiempo real permite a los usuarios ver instantáneamente cómo se verá su currículum mientras ingresan la información, facilitando ajustes y mejoras continuas. Una vez completado, el sistema utiliza tecnologías avanzadas de renderizado para generar archivos PDF de calidad editorial que mantienen el formato perfecto en cualquier dispositivo o plataforma de impresión.",
    shortDescription: "Generador de CV interactivo en HTML, CSS y JavaScript. El usuario ingresa sus datos y obtiene un currículum dinámico renderizado en la misma página.",
    image: professionalcv,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    demoUrl: "https://student-enrollment-system-six.vercel.app",
    technologies: ["HTML5", "CSS3", "JavaScript", "jsPDF", "Canvas API"],
    features: [
      "Generación dinámica de CV",
      "Múltiples plantillas disponibles",
      "Previsualización en tiempo real",
      "Exportación a PDF de alta calidad",
      "Interfaz intuitiva y moderna"
    ],
    challenges: "Crear un sistema de plantillas flexible que genere PDFs de calidad profesional.",
    githubUrl: "https://github.com/tu-usuario/professional-cv",
    category: "Web Tool"
  },
  {
    id: 8,
    title: "Basic Portfolio",
    description: "Mi primer portafolio representa un hito fundamental en mi journey como desarrollador, marcando el momento en que decidí transformar mi pasión por la tecnología en una carrera profesional. Este proyecto, aunque aparentemente simple en comparación con mis trabajos más recientes, encapsula la esencia del aprendizaje autodidacta y la determinación de dominar las bases del desarrollo web. Construido meticulosamente con HTML5, CSS3 y JavaScript vanilla, este portafolio demuestra un entendimiento sólido de los fundamentos web sin depender de frameworks o librerías externas. Cada línea de código fue escrita con la intención de aprender y comprender profundamente cómo funcionan las tecnologías web en su forma más pura. El diseño, aunque minimalista, refleja principios sólidos de UX/UI, con una navegación intuitiva, jerarquía visual clara y un layout responsive que funciona perfectamente en dispositivos móviles y desktop. La paleta de colores profesional y la tipografía cuidadosamente seleccionada crean una impresión duradera, mientras que las transiciones CSS suaves añaden un toque de sofisticación. Este proyecto no solo muestra mis primeros trabajos, sino que también documenta mi evolución como desarrollador, sirviendo como un recordatorio tangible de donde comenzó todo y la base sólida sobre la cual construí mi expertise actual.",
    shortDescription: "Primera versión de mi portafolio creada con HTML, CSS y JavaScript. Muestra mis primeros proyectos y habilidades iniciales.",
    image: portfoliobasic,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    demoUrl: "https://github.com/EmilEchavarria/Portfolio-Homework-1",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    features: [
      "Diseño limpio y profesional",
      "Sección de proyectos básicos",
      "Información personal y habilidades",
      "Formulario de contacto simple",
      "Compatibilidad con navegadores antiguos"
    ],
    challenges: "Mi primer proyecto web completo, enfocado en aprender las bases del desarrollo front-end.",
    githubUrl: "https://github.com/EmilEchavarria/Portfolio-Homework-1",
    category: "Portfolio"
  },
  {
    id: 9,
    title: "Electronic Organizer",
    description: "Electronic Organizer es mi introducción al mundo del desarrollo de aplicaciones de escritorio y gestión de bases de datos, representando un paso crucial en mi formación como desarrollador full-stack. Esta aplicación de escritorio, desarrollada en C# con Windows Forms, surge de la necesidad de digitalizar y organizar la información de contactos de manera más eficiente que los métodos tradicionales. El proyecto demuestra una comprensión sólida de los principios fundamentales de desarrollo de software, incluyendo arquitectura de aplicaciones, diseño de bases de datos relacionales y implementación de operaciones CRUD (Create, Read, Update, Delete). La aplicación utiliza SQLite como motor de base de datos local, garantizando portabilidad y facilidad de instalación sin comprometer la funcionalidad. La interfaz de usuario, aunque funcional y directa, está diseñada siguiendo principios de usabilidad, con controles intuitivos y flujos de trabajo lógicos que facilitan la gestión de grandes volúmenes de contactos. El sistema incluye funcionalidades avanzadas como búsqueda y filtrado por múltiples criterios, importación y exportación de datos en diferentes formatos, y un sistema de backup automático que protege la información crítica. Este proyecto no solo demuestra competencias técnicas específicas, sino también la capacidad de identificar problemas reales y desarrollar soluciones prácticas y eficientes.",
    shortDescription: "Aplicación de escritorio en C# para gestionar contactos. Realiza operaciones CRUD en una base de datos local con interfaz sencilla.",
    image: electronic,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder URL
    demoUrl: "https://github.com/EmilEchavarria/Electronic-Organizer?tab=readme-ov-file",
    technologies: ["C#", "Windows Forms", "SQLite", ".NET Framework", "LINQ"],
    features: [
      "Gestión completa de contactos",
      "Búsqueda y filtrado avanzado",
      "Importación y exportación de datos",
      "Interfaz intuitiva y rápida",
      "Base de datos local segura"
    ],
    challenges: "Primer proyecto con base de datos, enfocado en aprender operaciones CRUD y diseño de interfaces.",
    githubUrl: "https://github.com/EmilEchavarria/Electronic-Organizer",
    category: "Desktop Application"
  },
];

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

// Componente Modal mejorado
const ProjectModal = ({ project, isOpen, onClose, projects, onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (project) {
      const index = projects.findIndex(p => p.id === project.id);
      setCurrentIndex(index);
    }
  }, [project, projects]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const navigateProject = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % projects.length 
      : (currentIndex - 1 + projects.length) % projects.length;
    
    setCurrentIndex(newIndex);
    onNavigate(projects[newIndex]);
  };

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop with enhanced blur */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg"
        onClick={onClose}
      />
      
      {/* Modal with improved styling */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-hidden border border-gray-600 shadow-2xl shadow-blue-500/20">
        
        {/* Enhanced Header */}
        <div className="sticky top-0 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm border-b border-gray-600 p-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {project.title}
                </h2>
                <div className="h-8 w-px bg-gradient-to-b from-blue-400 to-transparent"></div>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 text-blue-300 text-sm rounded-full border border-blue-500/30">
                  {project.category}
                </span>
              </div>
              
              {/* Tab Navigation */}
              <div className="flex gap-1 mt-4">
                {[
                  { id: 'overview', label: 'Overview', icon: '📋' },
                  { id: 'demo', label: 'Demo', icon: '🎬' },
                  { id: 'technical', label: 'Technical', icon: '⚙️' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                    }`}
                  >
                    <span className="text-sm">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-red-500/10 hover:border-red-500/30 border border-transparent"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content with scroll */}
        <div className="overflow-y-auto max-h-[calc(95vh-200px)] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          <div className="p-6">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Project Image */}
                <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Enhanced Description */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-blue-400">📖</span>
                    Descripción Detallada
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                </div>

                {/* Features Grid */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-green-400">✨</span>
                    Características Principales
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-700/30 rounded-xl border border-gray-600/30 hover:border-blue-500/30 transition-all duration-300">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 rounded-2xl p-6 border border-amber-500/30">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="text-amber-400">🎯</span>
                    Desafíos Técnicos
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl border-l-4 border-amber-500">
                    {project.challenges}
                  </p>
                </div>
              </div>
            )}

            {/* Demo Tab */}
            {activeTab === 'demo' && (
              <div className="space-y-8">
                {/* Video Demo */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-red-400">🎬</span>
                    Demo del Proyecto
                  </h3>
                  <div className="aspect-video rounded-xl overflow-hidden bg-gray-800 shadow-2xl">
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.videoUrl}
                      title={`${project.title} Demo`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>

                {/* Project Screenshots */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-purple-400">📸</span>
                    Capturas de Pantalla
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="aspect-video rounded-xl overflow-hidden bg-gray-700">
                      <img 
                        src={project.image} 
                        alt={`${project.title} screenshot 1`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="aspect-video rounded-xl overflow-hidden bg-gray-700">
                      <img 
                        src={project.image} 
                        alt={`${project.title} screenshot 2`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                      />
                    </div>
                  </div>
                </div>

                {/* Live Demo Button */}
                <div className="text-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 hover:-translate-y-1"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Demo en Vivo
                  </a>
                </div>
              </div>
            )}

            {/* Technical Tab */}
            {activeTab === 'technical' && (
              <div className="space-y-8">
                {/* Technologies */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-cyan-400">🛠️</span>
                    Stack Tecnológico
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-300 rounded-xl text-lg font-medium border border-gray-600 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture */}
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="text-green-400">🏗️</span>
                    Arquitectura del Proyecto
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-700/30 rounded-xl">
                      <h4 className="text-lg font-semibold text-blue-300 mb-2">Frontend</h4>
                      <p className="text-gray-300">Interfaz de usuario responsiva con componentes reutilizables y manejo eficiente del estado.</p>
                    </div>
                    <div className="p-4 bg-gray-700/30 rounded-xl">
                      <h4 className="text-lg font-semibold text-green-300 mb-2">Backend</h4>
                      <p className="text-gray-300">API RESTful con autenticación, validación de datos y gestión de base de datos optimizada.</p>
                    </div>
                    <div className="p-4 bg-gray-700/30 rounded-xl">
                      <h4 className="text-lg font-semibold text-purple-300 mb-2">Base de Datos</h4>
                      <p className="text-gray-300">Diseño de esquema normalizado con índices optimizados para consultas eficientes.</p>
                    </div>
                  </div>
                </div>

                {/* GitHub Link */}
                <div className="text-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-gray-500/50 border border-gray-600 hover:border-gray-500 transform hover:scale-105"
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Ver Código Fuente
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Footer Navigation */}
        <div className="sticky bottom-0 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm border-t border-gray-600 p-6">
          <div className="flex justify-between items-center">
            <button
              onClick={() => navigateProject('prev')}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-gray-300 hover:text-white transition-all duration-300 rounded-xl border border-gray-600 hover:border-gray-500 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Anterior
            </button>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-lg">
                <span className="text-blue-400 font-bold">{currentIndex + 1}</span> de {projects.length}
              </span>
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-blue-500 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={() => navigateProject('next')}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-gray-300 hover:text-white transition-all duration-300 rounded-xl border border-gray-600 hover:border-gray-500 transform hover:scale-105"
            >
              Siguiente
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes para el modal
ProjectModal.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    videoUrl: PropTypes.string.isRequired,
    demoUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    challenges: PropTypes.string.isRequired
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  onNavigate: PropTypes.func.isRequired
};

export function Projects() {
  const { visibleElements, setElementRef } = useIntersectionObserver();
  const [scrollY, setScrollY] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efecto parallax suave
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSeeMore = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleProjectNavigation = (project) => {
    setSelectedProject(project);
  };

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
        className="text-center mb-2 py-6 px-4 sm:py-8 lg:py-10 relative"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <h1 className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 animate-fade-in">
          Projects
        </h1>
        <p 
          className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto opacity-0 animate-fade-in-up mb-0"
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
                      {project.shortDescription}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <button 
                        onClick={() => handleSeeMore(project)}
                        className="flex-1 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
                      >
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

                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </MagicCard>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
        projects={projects}
        onNavigate={handleProjectNavigation}
      />

      {/* Enhanced Styles */}
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

        /* Custom scrollbar */
        .scrollbar-thin::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb {
          background-color: #4b5563;
          border-radius: 4px;
        }

        .scrollbar-thumb-gray-600::-webkit-scrollbar-thumb:hover {
          background-color: #6b7280;
        }

        .scrollbar-track-transparent::-webkit-scrollbar-track {
          background: transparent;
        }
      `}</style>
    </main>
  );
}

export default Projects;