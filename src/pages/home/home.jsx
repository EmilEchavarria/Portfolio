import { useEffect, useState } from 'react';
import Header from '../../components/layout/header/header';
import './home.css';
import photo from '../../assets/images/description/photo.avif';

// Objeto de traducciones
const translations = {
  es: {
    role: 'Desarrollador de Software',
    description: '👨‍💻 Soy Desarrollador Full Stack Junior con experiencia en proyectos académicos, personales y freelance, creando soluciones completas desde UX/UI y frontend hasta backend y bases de datos. Destaco por mi proactividad y aprendizaje continuo. 🚀',
    githubLabel: 'Visita el perfil de GitHub de Emil',
    linkedinLabel: 'Visita el perfil de LinkedIn de Emil',
    instagramLabel: 'Visita el perfil de Instagram de Emil',
    resumeLabel: 'Descarga el currículum de Emil',
    photoAlt: 'Emil Echavarría - Desarrollador de Software',
    translateBtn: 'English'
  },
  en: {
    role: 'Software Developer',
    description: '👨‍💻 I am a Junior Full Stack Developer with experience in academic, personal and freelance projects, creating complete solutions from UX/UI and frontend to backend and databases. I stand out for my proactivity and continuous learning. 🚀',
    githubLabel: 'Visit Emil\'s GitHub profile',
    linkedinLabel: 'Visit Emil\'s LinkedIn profile',
    instagramLabel: 'Visit Emil\'s Instagram profile',
    resumeLabel: 'Download Emil\'s resume',
    photoAlt: 'Emil Echavarría - Software Developer',
    translateBtn: 'Español'
  }
};

export function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [language, setLanguage] = useState('es'); // Estado para el idioma
  const fullName = 'Emil Echavarría';

  // Función para cambiar idioma
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'es' ? 'en' : 'es');
  };

  // Obtener traducciones actuales
  const t = translations[language];

  useEffect(() => {
    // Add class to container and control overflow
    const homeContainer = document.getElementById('home-container');
    if (homeContainer) {
      homeContainer.classList.add('home-style');
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Cleanup on component unmount
    return () => {
      if (homeContainer) {
        homeContainer.classList.remove('home-style');
      }
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    // Typewriter animation
    let currentIndex = 0;
    setDisplayedText(''); // Reset text when language changes
    
    const typewriterInterval = setInterval(() => {
      if (currentIndex < fullName.length) {
        setDisplayedText(fullName.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typewriterInterval);
      }
    }, 100); // Typing speed: 100ms per character

    return () => {
      clearInterval(typewriterInterval);
    };
  }, [language]); // Re-run animation when language changes

  // SVG Components
  const GitHubIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="social-icon github-icon"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="social-icon linkedin-icon"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="social-icon instagram-icon"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const ResumeIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="social-icon cv-icon"
    >
      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
    </svg>
  );

  const TranslateIcon = () => (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="md:w-4 md:h-4"
    >
      <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/>
    </svg>
  );

  return (
    <main id="home-container">
      <Header />
      
      {/* Botón de traducción */}
      <button 
        className="fixed top-5 right-5 z-50 flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white text-sm font-medium cursor-pointer transition-all duration-300 shadow-lg hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 md:top-4 md:right-4 md:px-3 md:py-2 md:text-xs"
        onClick={toggleLanguage}
        aria-label={`Change language to ${language === 'es' ? 'English' : 'Español'}`}
      >
        <TranslateIcon />
        <span>{t.translateBtn}</span>
      </button>
      
      <section id="description-container">
        <div id="img-container">
          <img 
            src={photo} 
            alt={t.photoAlt}
            loading="eager"
          />
        </div>
        
        <div id="description">
          <div id="home-name">
            <h1>
              <span className="gradient-text">
                {displayedText}
              </span>
            </h1>
          </div>
 
          <h2>{t.role}</h2>
          <p>{t.description}</p>
          
          <div className="social-icons">
            <a 
              href="https://github.com/EmilEchavarria" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t.githubLabel}
            >
              <GitHubIcon />
            </a>
            <a 
              href="https://www.linkedin.com/in/emil-echavarria/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t.linkedinLabel}
            >
              <LinkedInIcon />
            </a>
            <a 
              href="https://www.instagram.com/emilechavarria.c/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t.instagramLabel}
            >
              <InstagramIcon />
            </a>
            <a 
              href="https://drive.google.com/file/d/1PpY9Z5nwEbdY3ZHszZQEnXIa3OF75xTS/view?usp=drive_link"  
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={t.resumeLabel}
            >
              <ResumeIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}