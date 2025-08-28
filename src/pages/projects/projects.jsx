"use client";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import Header from "../../components/layout/header/header";
import { MagicCard } from "../../components/ui/magic-card";
import { Meteors } from "../../components/ui/meteors";

import jtag from "../../assets/images/projects/jtag.png";
import autogleam from "../../assets/images/projects/autogleam.png";
import portfoliobasic from "../../assets/images/projects/portfoliobasic.png";
import stockify from "../../assets/images/projects/stockify.png";
import electronic from "../../assets/images/projects/electronic.png";
import enrollmentsystem from "../../assets/images/projects/enrollmentsystem.png";
import professionalcv from "../../assets/images/projects/professionalcv.png";
import agrogestor from "../../assets/images/projects/agrogestor.png";

// DASHBITE IMAGES 
import dashbite from "../../assets/images/projects/dashbite/dashbite.png";
import profiledb from "../../assets/images/projects/dashbite/profile.png";
import productlistdb from "../../assets/images/projects/dashbite/productlist.png";
import productlistbdb from "../../assets/images/projects/dashbite/productlistb.png";
import pedidosdb from "../../assets/images/projects/dashbite/pedidos.png";
import orderdb from "../../assets/images/projects/dashbite/order.png";
import logindb from "../../assets/images/projects/dashbite/login.png";
import homedb from "../../assets/images/projects/dashbite/home.png";
import favoritesdb from "../../assets/images/projects/dashbite/favorites.png";
import commercedb from "../../assets/images/projects/dashbite/commerce.png";
import cartdb from "../../assets/images/projects/dashbite/cart.png";
import addressesdb from "../../assets/images/projects/dashbite/addresses.png";



// J TAG EVENTS IMAGES 
import aboutjtagevents from "../../assets/images/projects/jtagevents/about.png";
import carcjtagevents from "../../assets/images/projects/jtagevents/caracteristicas.png";
import catajtagevents from "../../assets/images/projects/jtagevents/catalogo.png";
import espjtagevents from "../../assets/images/projects/jtagevents/especialidad.png";
import galjtagevents from "../../assets/images/projects/jtagevents/gallery.png";
import pantajtagevents from "../../assets/images/projects/jtagevents/pantallas.png";
import productjtagevents from "../../assets/images/projects/jtagevents/productos.png";

const projects = [
  {
    id: 1,
    title: "DashBite",
    description: "DashBite es una plataforma fullstack diseñada para optimizar pedidos en línea y la gestión de operaciones para clientes, negocios, repartidores y administradores. Integra módulos completos que incluyen inicio de sesión y registro, gestión de perfiles, catálogos de productos, pedidos, direcciones, favoritos y paneles administrativos con reportes detallados. La plataforma está diseñada para mejorar la eficiencia del flujo de trabajo, ofreciendo una experiencia de usuario fluida y accesible, con un enfoque en la optimización de procesos operativos.",
    shortDescription: "Plataforma fullstack para pedidos en línea y gestión, integrando módulos para clientes, negocios, repartidores y administradores.",
    image: dashbite,
    videoUrl: "https://www.youtube.com/embed/FPDnm7rTNsI",
    demoUrl: "https://dashbite.up.railway.app/auth/login",
    technologies: ["Express.js", "Handlebars", "JavaScript", "Tailwind CSS", "MySQL", "Railway"],
    features: [
      "Gestión integral de pedidos en línea",
      "Paneles administrativos con reportes en tiempo real",
      "Sistema de autenticación y gestión de perfiles",
      "Catálogos interactivos y favoritos personalizados",
      "Interfaz optimizada para múltiples tipos de usuarios"
    ],
    challenges: "Implementación de un sistema escalable para manejar múltiples tipos de usuarios y sincronización en tiempo real de pedidos.",
    githubUrl: "https://github.com/EmilEchavarria/DashBite",
    category: "Web Application",
    screenshots: [logindb,homedb,profiledb,favoritesdb,productlistdb,productlistbdb,cartdb,pedidosdb,orderdb,addressesdb,commercedb,dashbite,],
    architecture: {
      layers: [
        {
          name: "Frontend - Handlebars & Tailwind CSS",
          description: "Interfaz dinámica renderizada con Handlebars y estilizada con Tailwind CSS para un diseño responsive y moderno.",
          technologies: ["Handlebars", "Tailwind CSS", "JavaScript"]
        },
        {
          name: "Backend - Express.js",
          description: "API RESTful con Express.js para la gestión de pedidos, usuarios y reportes, con rutas optimizadas y autenticación segura.",
          technologies: ["Express.js", "Node.js", "JWT"]
        },
        {
          name: "Base de Datos - MySQL",
          description: "Base de datos relacional con esquemas optimizados para consultas rápidas y manejo de grandes volúmenes de datos.",
          technologies: ["MySQL", "Sequelize", "Indexes"]
        },
        {
          name: "Despliegue - Railway",
          description: "Infraestructura de despliegue continuo con Railway, optimización automática y escalabilidad para alto tráfico.",
          technologies: ["Railway", "CI/CD", "Docker"]
        }
      ]
    }
  },
  {
    id: 2,
    title: "AgroGestor",
    description: "AgroGestor es una plataforma digital completa diseñada para revolucionar la gestión agrícola moderna. Esta aplicación web permite a los agricultores y empresas del sector agroindustrial optimizar sus procesos productivos mediante el control en tiempo real de cultivos, recursos y datos críticos. La plataforma integra tecnologías IoT para el monitoreo continuo de condiciones ambientales, niveles de humedad del suelo, temperatura y otros parámetros vitales. Con un dashboard intuitivo y herramientas de análisis predictivo, AgroGestor facilita la toma de decisiones informadas, mejora la eficiencia de los recursos y maximiza los rendimientos de los cultivos. Ofrece planes de membresía escalables y notificaciones en tiempo real, con un enfoque en seguridad, accesibilidad y una experiencia de usuario intuitiva.",
    shortDescription: "Aplicación fullstack para la gestión agrícola con un panel central que automatiza tareas, ventas y reportes.",
    image: agrogestor,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    demoUrl: "https://agrogestor.vercel.app",
    technologies: ["Express.js", "Next.js", "Tailwind CSS", "MySQL", "Railway", "React", "Node.js", "MongoDB", "Socket.io"],
    features: [
      "Dashboard interactivo en tiempo real",
      "Gestión integral de cultivos",
      "Monitoreo de recursos agrícolas con IoT",
      "Reportes y análisis de datos automatizados",
      "Sistema de alertas automáticas y notificaciones en tiempo real"
    ],
    challenges: "Integración de sensores IoT para monitoreo agrícola en tiempo real y optimización de la gestión de recursos.",
    githubUrl: "https://github.com/tu-usuario/agrogestor",
    category: "Web Application",
    screenshots: [agrogestor, autogleam, jtag, enrollmentsystem],
    architecture: {
      layers: [
        {
          name: "Frontend - React & Next.js",
          description: "Dashboard interactivo construido con React y Next.js, gráficos en tiempo real usando Chart.js y componentes reutilizables para visualización de datos agrícolas.",
          technologies: ["React", "Next.js", "Chart.js", "Tailwind CSS"]
        },
        {
          name: "Backend - API REST",
          description: "API RESTful con Node.js y Express para manejar datos de sensores IoT, procesamiento de alertas y generación de reportes automáticos.",
          technologies: ["Node.js", "Express", "JWT"]
        },
        {
          name: "Base de Datos - MongoDB & MySQL",
          description: "MongoDB para datos de sensores en tiempo real con índices temporales y MySQL for datos relacionales optimizados.",
          technologies: ["MongoDB", "Mongoose", "MySQL", "Sequelize"]
        },
        {
          name: "IoT Integration",
          description: "Sistema de comunicación con sensores agrícolas usando Socket.io para datos en tiempo real y protocolos MQTT para dispositivos IoT.",
          technologies: ["Socket.io", "MQTT", "Arduino"]
        },
        {
          name: "Despliegue - Railway",
          description: "Despliegue continuo con Railway, optimización automática y escalabilidad para alto tráfico.",
          technologies: ["Railway", "CI/CD", "Docker"]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Stockify",
    description: "Stockify es una potente aplicación de escritorio desarrollada en C# con Windows Forms que revoluciona la gestión empresarial a través de un sistema integral de inventario, ventas y facturación. Esta solución empresarial robusta ha sido diseñada para satisfacer las necesidades de pequeñas y medianas empresas que requieren un control preciso y eficiente de sus operaciones comerciales. La aplicación utiliza MySQL como motor de base de datos, garantizando la integridad y seguridad de los datos empresariales críticos. Stockify ofrece un módulo completo de gestión de inventario que permite el seguimiento en tiempo real de productos, control de stock mínimo con alertas automáticas, gestión de proveedores y categorización avanzada de productos. El sistema de ventas integrado facilita la creación rápida de facturas, aplicación de descuentos, cálculo automático de impuestos y generación de reportes de ventas detallados en PDF.",
    shortDescription: "Aplicación de escritorio en C# y Windows Forms para gestión de inventario, ventas y facturación. Usa MySQL y genera reportes en PDF.",
    image: stockify,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    demoUrl: "https://github.com/EmilEchavarria/Stockify",
    technologies: ["C#", ".NET Framework", "Windows Forms", "MySQL", "Entity Framework", "Crystal Reports"],
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
    id: 4,
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
    title: "J Tag Events",
    description: "J Tag Events es un sitio web corporativo elegante y funcional desarrollado específicamente para una empresa líder en organización de eventos. Este proyecto representa una solución web completa construida con tecnologías fundamentales como HTML5, CSS3 y JavaScript vanilla, demostrando que es posible crear experiencias digitales impactantes sin depender de frameworks complejos. El sitio web presenta un catálogo interactivo y visualmente atractivo de todos los servicios ofrecidos por la empresa, desde eventos corporativos hasta celebraciones privadas. Cada sección del sitio ha sido cuidadosamente diseñada para destacar la profesionalidad y creatividad de la empresa, incluyendo una galería dinámica que muestra eventos realizados con efectos de transición suaves y un sistema de filtrado por categorías. La plataforma también incorpora un formulario de contacto completamente funcional con validación en tiempo real, sistema de cotizaciones automáticas y integración con redes sociales. El diseño responsive garantiza una experiencia óptima en todos los dispositivos, mientras que las animaciones y efectos visuales cuidadosamente implementados crean una navegación fluida y engaging.",
    shortDescription: "Sitio web desarrollado con HTML, CSS y JavaScript para una empresa de eventos. Incluye catálogo de servicios, secciones informativas y diseño responsive.",
    image: jtag,
    videoUrl: "https://www.youtube.com/embed/b60qi57gUHU",
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
    screenshots: [jtag, aboutjtagevents, carcjtagevents, catajtagevents,espjtagevents,galjtagevents,pantajtagevents,productjtagevents],
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
    screenshots: [professionalcv, stockify, jtag, enrollmentsystem],
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
        <div className="relative max-w-7xl max-h-[95vh] w-full h-full flex flex-col items-center justify-center p-1 sm:p-2">
          
          {/* Close Button - Always above image, never overlapping */}
          <button
            onClick={closeFullscreen}
            className="absolute top-0 right-2 sm:top-2 sm:right-4 z-20 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center sm:transition-all sm:duration-200 sm:hover:scale-125 mb-2"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Previous Button - No mobile hover */}
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 sm:left-4 z-20 text-white bg-black/70 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg sm:transition-all sm:duration-200 sm:hover:text-gray-300 sm:hover:bg-black/90 sm:hover:scale-110"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          
          {/* Image Container - Positioned below close button */}
          <div className="relative flex items-center justify-center max-w-full max-h-full px-2 sm:px-8 mt-2 sm:mt-4">
            <img 
              src={images[currentImage]} 
              alt={`${title} screenshot ${currentImage + 1}`}
              className="max-w-full max-h-[85vh] sm:max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />
          </div>
          
          {/* Next Button - No mobile hover */}
          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 sm:right-4 z-20 text-white bg-black/70 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg sm:transition-all sm:duration-200 sm:hover:text-gray-300 sm:hover:bg-black/90 sm:hover:scale-110"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
          
          {/* Image Counter - Adjusted for larger image */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:bottom-4 z-20 bg-black/80 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/20 shadow-lg">
              {currentImage + 1} de {images.length}
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
<div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl max-w-6xl w-full max-h-[97vh] sm:max-h-[97vh] overflow-hidden border border-gray-600 shadow-2xl shadow-blue-500/20">
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

    {/* Tab Navigation - Botones del mismo ancho */}
    <div className="flex gap-1 sm:gap-2 overflow-hidden">
      {[
        { id: 'overview', label: 'Overview' },
        { id: 'demo', label: 'Demo' },
        { id: 'technical', label: 'Technical' }
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative flex-1 px-3 py-1 sm:px-6 sm:py-2 text-xs sm:text-base font-medium rounded-md transition-all duration-200 whitespace-nowrap text-center ${
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
  <div className="overflow-y-auto max-h-[calc(100vh-180px)] sm:max-h-[calc(95vh-200px)] scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-transparent">
    <div className="p-3 sm:p-4 lg:p-6">
      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Project Image */}
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
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
{activeTab === 'demo' && typeof activeTab === 'string' && (
  <div className="space-y-6 sm:space-y-8 lg:space-y-10">
    {/* Video Demo */}
    <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-2xl p-1 border border-slate-700/50 shadow-2xl overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5 pointer-events-none"></div>
      
      <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Demo del Proyecto
          </h3>
        </div>
        
        <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl ring-1 ring-slate-700/50 hover:ring-blue-500/30 transition-all duration-500">
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
    </div>

    {/* Screenshots Gallery */}
    <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-2xl p-1 border border-slate-700/50 shadow-2xl overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-pink-600/5 pointer-events-none"></div>
      
      <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Imagenes
          </h3>
        </div>
        
        <div className="rounded-xl overflow-hidden">
          <ImageGallery images={project.screenshots} title={project.title} />
        </div>
      </div>
    </div>

    {/* Live Demo Button */}
    <div className="text-center">
      <div className="inline-block relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl blur-xl opacity-20 scale-110"></div>
        
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 hover:from-blue-500 hover:via-blue-600 hover:to-cyan-500 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 transform hover:scale-105 hover:-translate-y-1 text-base sm:text-lg border border-blue-500/30 backdrop-blur-sm"
        >
          <svg className="w-6 h-6 sm:w-7 sm:h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span className="relative">Ver Demo en Vivo</span>
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 -top-px overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:animate-shimmer"></div>
          </div>
        </a>
      </div>
    </div>
  </div>
)}
{/* Technical Tab */}
      {activeTab === 'technical' && (
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Technologies */}
          <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-2xl p-1 border border-slate-700/50 shadow-2xl overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/5 via-transparent to-teal-600/5 pointer-events-none"></div>
            
            <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full"></div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Stack Tecnológico
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {project.technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden"
                  >
                    {/* Tech badge glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <span className="relative inline-block px-4 py-2.5 bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm text-slate-200 rounded-xl text-sm sm:text-base font-semibold border border-slate-600/60 hover:border-emerald-400/60 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-lg hover:shadow-emerald-500/10">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture */}
          <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 backdrop-blur-xl rounded-2xl p-1 border border-slate-700/50 shadow-2xl overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5 pointer-events-none"></div>
            
            <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Arquitectura del Proyecto
                </h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {project.architecture.layers.map((layer, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-gradient-to-r from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-slate-600/50 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 overflow-hidden"
                  >
                    {/* Layer card glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:via-blue-600/3 group-hover:to-blue-600/5 transition-all duration-300"></div>
                    
                    <div className="relative flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-1.5 h-6 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                          <h4 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {layer.name}
                          </h4>
                        </div>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {layer.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 sm:gap-3 lg:max-w-xs">
                        {layer.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-600/30 to-cyan-600/30 backdrop-blur-sm text-blue-200 text-xs sm:text-sm font-medium rounded-lg border border-blue-500/40 hover:border-blue-400/60 hover:bg-gradient-to-r hover:from-blue-600/40 hover:to-cyan-600/40 hover:text-blue-100 transition-all duration-300 transform hover:scale-105"
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
          </div>

          {/* GitHub Link */}
          <div className="text-center">
            <div className="inline-block relative">
              {/* GitHub button glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-500 rounded-xl blur-xl opacity-20 scale-110"></div>
              
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 hover:from-slate-700 hover:via-slate-600 hover:to-slate-700 text-white font-bold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/30 border border-slate-600/60 hover:border-slate-500/80 transform hover:scale-105 hover:-translate-y-1 text-base sm:text-lg backdrop-blur-sm group overflow-hidden"
              >
                {/* Button shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                
                <span className="relative">Ver Código Fuente</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>

 <div className="sticky bottom-0 bg-gradient-to-r from-slate-950/98 via-slate-900/98 to-slate-950/98 backdrop-blur-2xl border-t border-slate-700/60 shadow-2xl shadow-black/20">
  <div className="relative overflow-hidden">
    {/* Decorative gradient line */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    
    <div className="px-4 py-4 sm:px-6 sm:py-5 lg:py-6">
      <div className="flex justify-between items-center mx-auto max-w-7xl">
        
        {/* Previous Button */}
        <button
          onClick={() => navigateProject('prev')}
          className="group relative flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[140px] rounded-xl bg-slate-800/50 hover:bg-slate-700/60 border border-slate-700/50 hover:border-blue-500/40 backdrop-blur-sm overflow-hidden"
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-blue-600/10 transition-all duration-300"></div>
          
          <div className="relative flex items-center gap-2 sm:gap-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline text-sm sm:text-base font-semibold">Previous</span>
          </div>
        </button>

        {/* Center Dots Indicator */}
        <div className="flex items-center gap-2 sm:gap-3 mx-4 sm:mx-8 px-4 py-2 bg-slate-800/40 backdrop-blur-sm rounded-full border border-slate-700/40">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-blue-500' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => navigateProject('next')}
          className="group relative flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 px-4 py-3 sm:px-6 sm:py-4 min-w-[70px] sm:min-w-[140px] rounded-xl bg-slate-800/50 hover:bg-slate-700/60 border border-slate-700/50 hover:border-blue-500/40 backdrop-blur-sm overflow-hidden"
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-blue-600/5 group-hover:to-blue-600/10 transition-all duration-300"></div>
          
          <div className="relative flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline text-sm sm:text-base font-semibold">Next</span>
            <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

      </div>
    </div>

    {/* Bottom decorative element */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent rounded-full"></div>
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