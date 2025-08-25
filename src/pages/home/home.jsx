import { useEffect } from 'react';
import Header from '../../components/layout/header/header';
import './home.css';
import photo from '../../assets/images/description/photo.avif';
import github from '../../assets/images/home/github.png';
import linkedin from '../../assets/images/home/linkedin.png';
import instagram from '../../assets/images/home/instagram.png';
import curriculum from '../../assets/images/home/curriculum.png';

export function Home() {
  useEffect(() => {
    // Agregar clase al contenedor y controlar overflow
    const homeContainer = document.getElementById('home-container');
    if (homeContainer) {
      homeContainer.classList.add('home-style');
    }
    
    // Evitar scroll en el body
    document.body.style.overflow = 'hidden';
    
    // Cleanup al desmontar el componente
    return () => {
      if (homeContainer) {
        homeContainer.classList.remove('home-style');
      }
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <main id="home-container">
      <Header />
      
      <section id="description-container">
        <div id="img-container">
          <img 
            src={photo} 
            alt="Emil Echavarria - Software Developer" 
            loading="eager"
          />
        </div>
        
        <div id="description">

            <div id="home-name">
          <h1>
            <span className="gradient-text">Emil Echavarria</span>
          </h1>
          </div>
 
          <h2>Software Developer</h2>
          <p>
            👨🏻‍💻 Junior software developer who enjoys creating Full-Stack Web Applications 
            using Express JS for the backend and I have experience in personal projects 
            using different Frameworks for the Front-End such as Next.js, Angular, 
            Astro and React with intuitive UX/UI and building efficient Desktop 
            applications and solutions with .NET Framework. 🚀
          </p>
          
          <div className="social-icons">
            <a 
              href="https://github.com/EmilEchavarria" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Emil's GitHub Profile"
            >
              <img src={github} alt="GitHub" className="github-icon" />
            </a>
            <a 
              href="https://www.linkedin.com/in/emil-echavarria/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Emil's LinkedIn Profile"
            >
              <img src={linkedin} alt="LinkedIn" className="linkedin-icon" />
            </a>
            <a 
              href="https://www.instagram.com/emilechavarria.c/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Emil's Instagram Profile"
            >
              <img src={instagram} alt="Instagram" className="instagram-icon" />
            </a>
            <a 
              href="../../assets/images/home/curriculum.png" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Download Emil's Resume"
            >
              <img src={curriculum} alt="Resume" className="cv-icon" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}