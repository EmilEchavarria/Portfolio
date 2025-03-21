import Header from '../../components/layout/header/header';
import "./home.css"; // Asegúrate de que este archivo CSS esté correctamente configurado
import photo from "../../assets/images/description/photo.png";
import github from "../../assets/images/home/github.png";
import linkedin from "../../assets/images/home/linkedin.png";
import instagram from "../../assets/images/home/instagram.png";
import curriculum from "../../assets/images/home/curriculum.png";

export function Home() {
  return (
    <main className="home-main">
      <Header/>

      <section id="description-container">
        <div id="img-container">
          <img src={photo} alt="Home" />
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
              <img src={curriculum} alt="Instagram Profile" className="cv-icon" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
