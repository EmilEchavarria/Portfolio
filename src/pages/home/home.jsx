import { useEffect } from 'react';
import Header from '../../components/layout/header/header';
import './home.css'; // Asegúrate de que este archivo CSS esté correctamente configurado
import photo from '../../assets/images/description/photo.avif';
import github from '../../assets/images/home/github.png';
import linkedin from '../../assets/images/home/linkedin.png';
import instagram from '../../assets/images/home/instagram.png';
import curriculum from '../../assets/images/home/curriculum.png';

export function Home() {
  useEffect(() => {
    // Seleccionamos el contenedor del componente Home y le agregamos la clase
    const homeContainer = document.getElementById('home-container');
    homeContainer.classList.add('home-style');
    
    // Evitar el scroll al agregar la clase al body
    document.body.style.overflow = 'hidden';

    // Limpiar la clase y permitir el scroll cuando el componente se desmonte o actualice
    return () => {
      homeContainer.classList.remove('home-style');
      document.body.style.overflow = 'auto';  // Restablecer el scroll al desmontar el componente
    };
  }, []);

  return (
    <main id="home-container">
      <Header />

      <section id="description-container">
        <div id="img-container">
          <img src={photo} alt="Emil Echavarria" />
        </div>

        <div id="description">
          <h1>
            <span className="gradient-text">Emil Echavarria</span>
          </h1>
          <h2>Software Developer</h2>
          <p>
            👨🏻‍💻 Junior software developer who enjoys creating intuitive UX/UI and building efficient back-end solutions with .NET Framework. 🚀
          </p>

          <div className="social-icons">
            <a href="https://github.com/EmilEchavarria" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub Profile" className="github-icon" />
            </a>
            <a href="https://www.linkedin.com/in/emil-echavarria/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn Profile" className="linkedin-icon" />
            </a>
            <a href="https://www.instagram.com/emilechavarria.c/" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram Profile" className="instagram-icon" />
            </a>
            <a href="https://www.instagram.com/emilechavarria.c/" target="_blank" rel="noopener noreferrer">
              <img src={curriculum} alt="Resume" className="cv-icon" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
