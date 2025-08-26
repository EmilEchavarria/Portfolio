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
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    category: "Web Application",
    screenshots: [agrogestor, autogleam, jtag, portfolio],
    architecture: {
      layers: [
        {
          name: "Frontend - React & Dashboard",
          description: "Dashboard interactivo construido con React, gráficos en tiempo real usando Chart.js y componentes reutilizables para visualización de datos agrícolas.",
          technologies: ["React", "Chart.js", "Material-UI"]
        },
        {
          name: "Backend - API REST",
          description: "API RESTful con Node.js y Express para manejar datos de sensores IoT, procesamiento de alertas y generación de reportes automáticos.",
          technologies: ["Node.js", "Express", "JWT"]
        },
        {
          name: "Base de Datos - MongoDB",
          description: "Base de datos NoSQL optimizada para almacenar datos de sensores en tiempo real con índices temporales y agregaciones eficientes.",
          technologies: ["MongoDB", "Mongoose", "Redis"]
        },
        {
          name: "IoT Integration",
          description: "Sistema de comunicación con sensores agrícolas usando Socket.io para datos en tiempo real y protocolos MQTT para dispositivos IoT.",
          technologies: ["Socket.io", "MQTT", "Arduino"]
        }
      ]
    }
  },
  {
    id: 2,
    title: "Auto Gleam",
    description: "Auto Gleam es una aplicación web tipo SPA (Single Page Application) desarrollada en Angular que transforma completamente la experiencia de gestión de servicios de lavado de autos. Esta plataforma moderna ofrece un sistema integral que combina tecnología avanzada con diseño centrado en el usuario para proporcionar una solución completa tanto para clientes como para administradores. La aplicación cuenta con un robusto sistema de autenticación basado en roles que garantiza la seguridad y personalización de la experiencia según el tipo de usuario. Los clientes pueden programar citas de manera intuitiva, seleccionar servicios específicos y realizar seguimiento en tiempo real del estado de sus vehículos. Los administradores tienen acceso a un dashboard completo con métricas detalladas, gestión de empleados, control de inventario y herramientas de análisis de rendimiento. El sistema también incluye funcionalidades avanzadas como notificaciones push, integración con sistemas de pago, generación automática de facturas y reportes personalizables que facilitan la toma de decisiones estratégicas.",
    shortDescription: "Aplicación web tipo SPA desarrollada en Angular para gestión de servicios de lavado de autos. Incluye autenticación por roles, citas, reportes y diseño centrado en la experiencia del usuario.",
    image: autogleam,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    category: "SPA Application",
    screenshots: [autogleam, jtag, stockify, enrollmentsystem],
    architecture: {
      layers: [
        {
          name: "Frontend - Angular SPA",
          description: "Aplicación de una sola página con componentes modulares, routing avanzado y manejo reactivo de estados usando RxJS.",
          technologies: ["Angular", "TypeScript", "RxJS"]
        },
        {
          name: "Autenticación - Firebase Auth",
          description: "Sistema de autenticación robusto con roles de usuario, recuperación de contraseñas y autenticación social integrada.",
          technologies: ["Firebase Auth", "JWT", "Guards"]
        },
        {
          name: "Base de Datos - Firestore",
          description: "Base de datos en tiempo real con sincronización automática, consultas optimizadas y reglas de seguridad granulares.",
          technologies: ["Firestore", "Firebase Rules", "Indexes"]
        }
      ]
    }
  },
  {
    id: 3,
    title: "J Tag Events",
    description: "J Tag Events es un sitio web corporativo elegante y funcional desarrollado específicamente para una empresa líder en organización de eventos. Este proyecto representa una solución web completa construida con tecnologías fundamentales como HTML5, CSS3 y JavaScript vanilla, demostrando que es posible crear experiencias digitales impactantes sin depender de frameworks complejos. El sitio web presenta un catálogo interactivo y visualmente atractivo de todos los servicios ofrecidos por la empresa, desde eventos corporativos hasta celebraciones privadas. Cada sección del sitio ha sido cuidadosamente diseñada para destacar la profesionalidad y creatividad de la empresa, incluyendo una galería dinámica que muestra eventos realizados con efectos de transición suaves y un sistema de filtrado por categorías. La plataforma también incorpora un formulario de contacto completamente funcional con validación en tiempo real, sistema de cotizaciones automáticas y integración con redes sociales. El diseño responsive garantiza una experiencia óptima en todos los dispositivos, mientras que las animaciones y efectos visuales cuidadosamente implementados crean una navegación fluida y engaging.",
    shortDescription: "Sitio web desarrollado con HTML, CSS y JavaScript para una empresa de eventos. Incluye catálogo de servicios, secciones informativas y diseño responsive.",
    image: jtag,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    category: "Website",
    screenshots: [jtag, portfolio, autogleam, professionalcv],
    architecture: {
      layers: [
        {
          name: "Frontend - HTML5 & CSS3",
          description: "Estructura semántica con HTML5 y estilos avanzados usando CSS3, incluyendo flexbox, grid y animaciones CSS puras.",
          technologies: ["HTML5", "CSS3", "Flexbox", "Grid"]
        },
        {
          name: "Interactividad - JavaScript Vanilla",
          description: "Funcionalidades dinámicas implementadas con JavaScript puro, incluyendo validación de formularios y efectos de scroll.",
          technologies: ["JavaScript", "DOM API", "Events"]
        },
        {
          name: "UI Framework - Bootstrap",
          description: "Sistema de componentes responsive con Bootstrap para garantizar compatibilidad cross-browser y diseño móvil-first.",
          technologies: ["Bootstrap", "Responsive Design", "Mobile-First"]
        }
      ]
    }
  },
  {
    id: 4,
    title: "Stockify",
    description: "Stockify es una potente aplicación de escritorio desarrollada en C# con Windows Forms que revoluciona la gestión empresarial a través de un sistema integral de inventario, ventas y facturación. Esta solución empresarial robusta ha sido diseñada para satisfacer las necesidades de pequeñas y medianas empresas que requieren un control preciso y eficiente de sus operaciones comerciales. La aplicación utiliza MySQL como motor de base de datos, garantizando la integridad y seguridad de los datos empresariales críticos. Stockify ofrece un módulo completo de gestión de inventario que permite el seguimiento en tiempo real de productos, control de stock mínimo con alertas automáticas, gestión de proveedores y categorización avanzada de productos. El sistema de ventas integrado facilita la creación rápida de facturas, aplicación de descuentos, cálculo automático de impuestos y generación de reportes de ventas detallados. Una de las características más destacadas es su capacidad para generar reportes profesionales en PDF utilizando Crystal Reports, proporcionando análisis detallados de rendimiento empresarial, estados financieros y reportes de inventario que facilitan la toma de decisiones estratégicas.",
    shortDescription: "Aplicación de escritorio en C# y Windows Forms para gestión de inventario, ventas y facturación. Usa MySQL y genera reportes en PDF.",
    image: stockify,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    category: "Desktop Application",
    screenshots: [stockify, electronic, portfoliobasic, agrogestor],
    architecture: {
      layers: [
        {
          name: "Presentación - Windows Forms",
          description: "Interfaz de usuario nativa con Windows Forms, controles personalizados y manejo de eventos para una experiencia desktop fluida.",
          technologies: ["Windows Forms", "C# UI", "Custom Controls"]
        },
        {
          name: "Lógica de Negocio - C# Classes",
          description: "Capa de lógica empresarial con clases C# para manejo de inventario, cálculos de ventas y validaciones de negocio.",
          technologies: ["C#", "Business Logic", "Data Validation"]
        },
        {
          name: "Acceso a Datos - Entity Framework",
          description: "Mapeo objeto-relacional con Entity Framework para operaciones CRUD optimizadas y manejo de transacciones.",
          technologies: ["Entity Framework", "LINQ", "Code First"]
        },
        {
          name: "Base de Datos - MySQL",
          description: "Base de datos relacional con MySQL, procedimientos almacenados y índices optimizados para consultas empresariales.",
          technologies: ["MySQL", "Stored Procedures", "Indexes"]
        }
      ]
    }
  },
  {
    id: 5,
    title: "Enrollment System",
    description: "El Sistema de Inscripción Estudiantil es una aplicación web innovadora desarrollada con tecnologías front-end fundamentales que digitaliza y optimiza completamente el proceso de matrícula académica. Este sistema inteligente permite a los estudiantes gestionar su inscripción de manera autónoma y eficiente, eliminando las largas filas y procesos burocráticos tradicionales. La plataforma cuenta con un formulario de registro exhaustivo que captura todos los datos personales y académicos necesarios, implementando validaciones en tiempo real para garantizar la integridad de la información. Una de sus características más destacadas es el sistema inteligente de selección de materias que incluye verificación automática de prerrequisitos, detección de conflictos de horarios y sugerencias de horarios alternativos. El sistema utiliza algoritmos sofisticados para validar la disponibilidad de cupos y prevenir solapamientos de horarios, proporcionando retroalimentación inmediata al estudiante. Al finalizar el proceso de inscripción, la aplicación genera automáticamente un resumen completo en formato PDF que incluye toda la información del estudiante, las materias seleccionadas, horarios detallados y costos asociados. La interfaz incluye también un sistema de ayuda interactivo con tutoriales paso a paso y preguntas frecuentes.",
    shortDescription: "Sistema de inscripción web en HTML, CSS y JavaScript. Permite registrar datos personales, seleccionar materias con horarios y generar un resumen exportable en PDF. Incluye sección de ayuda interactiva.",
    image: enrollmentsystem,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    category: "Web Application",
    screenshots: [enrollmentsystem, professionalcv, jtag, stockify],
    architecture: {
      layers: [
        {
          name: "Frontend - HTML5 Semántico",
          description: "Estructura de formularios multi-paso con HTML5 semántico, validación nativa y accessibility features integradas.",
          technologies: ["HTML5", "Semantic HTML", "Form Validation"]
        },
        {
          name: "Lógica de Validación - JavaScript",
          description: "Algoritmos de validación de horarios, detección de conflictos y cálculo de prerrequisitos implementados en JavaScript puro.",
          technologies: ["JavaScript", "Algorithms", "DOM Manipulation"]
        },
        {
          name: "Generación de PDF - jsPDF",
          description: "Sistema de generación de documentos PDF con jsPDF, incluyendo formateo automático y diseño profesional de reportes.",
          technologies: ["jsPDF", "PDF Generation", "Document Design"]
        },
        {
          name: "Almacenamiento - LocalStorage",
          description: "Persistencia de datos del formulario usando LocalStorage para mantener el progreso del usuario entre sesiones.",
          technologies: ["LocalStorage", "Data Persistence", "Session Management"]
        }
      ]
    }
  },
  {
    id: 6,
    title: "Portfolio",
    description: "Mi portafolio personal representa la culminación de mis habilidades como desarrollador front-end, construido con las tecnologías más modernas y las mejores prácticas de la industria. Este proyecto va más allá de ser simplemente una vitrina de trabajos; es una experiencia digital inmersiva que refleja mi evolución profesional y pasión por crear interfaces excepcionales. Desarrollado con React y estilizado con Tailwind CSS, el portafolio implementa un sistema de componentes reutilizables y un diseño completamente responsive que se adapta perfectamente a cualquier dispositivo. La integración de Framer Motion permite animaciones sofisticadas y transiciones fluidas que guían al usuario a través de una narrativa visual cohesiva. El sitio presenta secciones cuidadosamente diseñadas que incluyen mi trayectoria profesional, habilidades técnicas con niveles de competencia, proyectos destacados con estudios de caso detallados y testimonios de clientes y colaboradores. Cada proyecto se presenta con capturas de pantalla interactivas, explicaciones técnicas detalladas y enlaces directos tanto a demos en vivo como a repositorios de código. El portafolio también incluye un blog técnico donde comparto conocimientos, tutoriales y reflexiones sobre las últimas tendencias en desarrollo web.",
    shortDescription: "Portafolio personal moderno creado con React y Tailwind CSS. Muestra proyectos, habilidades y trayectoria como desarrollador front-end.",
    image: portfolio,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    category: "Portfolio",
    screenshots: [portfolio, agrogestor, autogleam, enrollmentsystem],
    architecture: {
      layers: [
        {
          name: "Frontend - React & Hooks",
          description: "Aplicación React moderna con hooks personalizados, componentes funcionales y manejo eficiente del estado global.",
          technologies: ["React", "React Hooks", "JSX"]
        },
        {
          name: "Estilos - Tailwind CSS",
          description: "Sistema de diseño utility-first con Tailwind CSS, responsive design y dark mode implementado con CSS custom properties.",
          technologies: ["Tailwind CSS", "Responsive Design", "Dark Mode"]
        },
        {
          name: "Animaciones - Framer Motion",
          description: "Animaciones declarativas y transiciones de página usando Framer Motion con optimizaciones de performance.",
          technologies: ["Framer Motion", "CSS Animations", "Performance"]
        },
        {
          name: "Deployment - Vercel",
          description: "Despliegue continuo con Vercel, optimización automática de assets y configuración de dominio personalizado.",
          technologies: ["Vercel", "CI/CD", "Edge Functions"]
        }
      ]
    }
  },
  {
    id: 7,
    title: "Professional CV",
    description: "El Generador de CV Profesional es una herramienta web innovadora que democratiza la creación de currículums de alta calidad, eliminando las barreras técnicas y de diseño que tradicionalmente limitaban a los usuarios. Esta aplicación sofisticada, desarrollada completamente con tecnologías web fundamentales, permite a cualquier persona crear currículums visualmente impactantes y profesionalmente estructurados sin necesidad de conocimientos de diseño gráfico. La plataforma ofrece una biblioteca diversa de plantillas profesionales, cada una cuidadosamente diseñada para diferentes industrias y niveles de experiencia, desde recién graduados hasta ejecutivos senior. El sistema inteligente de generación de contenido guía a los usuarios a través de un proceso paso a paso, proporcionando sugerencias contextuales, ejemplos de contenido y mejores prácticas para cada sección del currículum. La función de previsualización en tiempo real permite a los usuarios ver instantáneamente cómo se verá su currículum mientras ingresan la información, facilitando ajustes y mejoras continuas. Una vez completado, el sistema utiliza tecnologías avanzadas de renderizado para generar archivos PDF de calidad editorial que mantienen el formato perfecto en cualquier dispositivo o plataforma de impresión.",
    shortDescription: "Generador de CV interactivo en HTML, CSS y JavaScript. El usuario ingresa sus datos y obtiene un currículum dinámico renderizado en la misma página.",
    image: professionalcv,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    category: "Web Tool",
    screenshots: [professionalcv, stockify, portfolio, jtag],
    architecture: {
      layers: [
        {
          name: "Template Engine - JavaScript",
          description: "Motor de plantillas dinámico que renderiza CVs en tiempo real usando JavaScript y manipulación del DOM.",
          technologies: ["JavaScript", "Template Literals", "DOM API"]
        },
        {
          name: "PDF Generation - jsPDF & Canvas",
          description: "Generación de PDFs vectoriales usando jsPDF combinado con Canvas API para renderizado preciso de elementos visuales.",
          technologies: ["jsPDF", "Canvas API", "Vector Graphics"]
        },
        {
          name: "Layout System - CSS Grid",
          description: "Sistema de layout flexible con CSS Grid y Flexbox para crear diseños profesionales responsive y print-ready.",
          technologies: ["CSS Grid", "Flexbox", "Print Styles"]
        }
      ]
    }
  }
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

// Componente para la galería de imágenes
const ImageGallery = ({ images, title }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openFullscreen = (index) => {
    setCurrentImage(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div key={index} className="aspect-video rounded-lg overflow-hidden bg-gray-700 cursor-pointer hover:opacity-80 transition-opacity">
            <img 
              src={image} 
              alt={`${title} screenshot ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              onClick={() => openFullscreen(index)}
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center">
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeFullscreen}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black bg-opacity-50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Button */}
            {images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <img 
              src={images[currentImage]} 
              alt={`${title} screenshot ${currentImage + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Next Button */}
            {images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                {currentImage + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

// PropTypes para ImageGallery
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired
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
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 backdrop-blur-lg"
        onClick={onClose}
      />
      
  {/* Modal */}
<div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl max-w-6xl w-full max-h-[99vh] sm:max-h-[97vh] overflow-hidden border border-gray-600 shadow-2xl shadow-blue-500/20">
  {/* Header */}
  <div className="sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-xl border-b border-gray-700/50 shadow-sm overflow-hidden">
    <div className="px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 mx-auto max-w-7xl">
      <div className="grid items-center gap-2 sm:gap-4 mb-2 sm:mb-3" style={{gridTemplateColumns: 'minmax(0, 1fr) auto auto'}}>
        {/* Title - Left */}
        <div className="flex justify-start min-w-0">
          <h2 className="text-sm sm:text-xl lg:text-2xl font-semibold text-white truncate">
            {project.title}
          </h2>
        </div>

        {/* Category - Center on desktop, right on mobile */}
        <div className="flex justify-center flex-shrink-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 bg-gray-700/50 text-gray-200 text-xs sm:text-sm font-medium rounded-full border border-gray-600/30 whitespace-nowrap">
            {project.category}
          </span>
        </div>

        {/* Close Button - Right */}
        <div className="flex justify-end flex-shrink-0">
          <svg 
            onClick={onClose}
            className="w-5 h-5 sm:w-7 sm:h-7 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-1 sm:gap-2 overflow-hidden">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'demo', label: 'Demo' },
          { id: 'technical', label: 'Technical' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-2 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-base font-medium rounded-md transition-all duration-200 whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-gray-700 text-white border-gray-600'
                : 'text-gray-400 hover:text-white hover:bg-gray-700/30 border-transparent hover:border-gray-600/30'
            } border`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"></div>
            )}
          </button>
        ))}
      </div>
    </div>

    {/* Progress Bar */}
    <div className="h-0.5 bg-gray-800 overflow-hidden">
      <div 
        className="h-full bg-blue-500 transition-all duration-300 ease-out will-change-transform"
        style={{
          width: `${((['overview', 'demo', 'technical'].indexOf(activeTab) + 1) / 3) * 100}%`,
          transform: 'translateZ(0)'
        }}
      ></div>
    </div>
  </div>

  {/* Content */}
  <div className="overflow-y-auto max-h-[calc(99vh-200px)] sm:max-h-[calc(97vh-200px)] scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-transparent">
    <div className="p-3 sm:p-4 lg:p-6">
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Project Image */}
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Description */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-600/40 shadow-xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Descripción Detallada</h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{project.description}</p>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-600/40 shadow-xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Características Principales</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start p-3 sm:p-4 bg-slate-700/40 rounded-lg border border-slate-600/40 hover:border-blue-400/50 hover:bg-slate-700/60 transition-all duration-300 group">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-slate-300 font-medium text-xs sm:text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-amber-500/40 shadow-xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Desafíos Técnicos</h3>
            <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 backdrop-blur-sm p-4 sm:p-5 rounded-lg border-l-4 border-amber-400">
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {project.challenges}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Demo Tab */}
      {activeTab === 'demo' && (
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Video Demo */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-600/40 shadow-xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Demo del Proyecto</h3>
            <div className="aspect-video rounded-lg overflow-hidden bg-slate-800 shadow-2xl">
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

          {/* Screenshots Gallery */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-600/40 shadow-xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Capturas de Pantalla</h3>
            <ImageGallery images={project.screenshots} title={project.title} />
          </div>

          {/* Live Demo Button */}
          <div className="text-center">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Ver Demo en Vivo
            </a>
          </div>
        </div>
      )}

      {/* Technical Tab */}
      {activeTab === 'technical' && (
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Technologies */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-600/40 shadow-xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Stack Tecnológico</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-2 bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm text-slate-300 rounded-lg text-xs sm:text-sm font-medium border border-slate-600/50 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-slate-600/40 shadow-xl">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4">Arquitectura del Proyecto</h3>
            <div className="space-y-3 sm:space-y-4">
              {project.architecture.layers.map((layer, index) => (
                <div key={index} className="p-4 sm:p-5 bg-slate-700/40 rounded-lg border border-slate-600/40 hover:border-slate-500/60 hover:bg-slate-700/60 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-3 sm:gap-4">
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-2">{layer.name}</h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">{layer.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {layer.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-blue-600/30 text-blue-300 text-xs rounded border border-blue-500/40 hover:bg-blue-600/40 hover:text-blue-200 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Link */}
          <div className="text-center">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 sm:px-6 py-3 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 hover:from-slate-700 hover:via-slate-600 hover:to-slate-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/30 border border-slate-600/60 hover:border-slate-500 transform hover:scale-105 text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Ver Código Fuente
            </a>
          </div>
        </div>
      )}
    </div>
  </div>

  {/* Navigation Bar */}
  <div className="sticky bottom-0 bg-gradient-to-r from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm border-t border-gray-600 px-3 py-2 sm:px-4 sm:py-1.5 lg:py-4">
    <div className="flex justify-between items-center mx-auto max-w-7xl">
      {/* Previous Button */}
      <button
        onClick={() => navigateProject('prev')}
        className="flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 px-3 py-2 sm:px-4 sm:py-3 min-w-[80px] sm:min-w-[120px] rounded-lg"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-xs sm:text-base font-medium">Previous</span>
        </div>
      </button>

      {/* Center Dots */}
      <div className="flex gap-1 sm:gap-2 mx-8 sm:mx-12">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => navigateProject('next')}
        className="flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200 px-3 py-2 sm:px-4 sm:py-3 min-w-[80px] sm:min-w-[120px] rounded-lg"
      >
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-base font-medium">Next</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
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
    challenges: PropTypes.string.isRequired,
    screenshots: PropTypes.arrayOf(PropTypes.string).isRequired,
    architecture: PropTypes.shape({
      layers: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technologies: PropTypes.arrayOf(PropTypes.string).isRequired
      })).isRequired
    }).isRequired
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
      {/* Conditionally render Header based on isModalOpen */}
      {!isModalOpen && <Header />}
      
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

        .scrollbar-thumb-grayradar-600::-webkit-scrollbar-thumb {
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