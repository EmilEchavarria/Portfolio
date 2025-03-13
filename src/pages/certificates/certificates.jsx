import "./Certificates.css"; // Asegúrate de que este archivo CSS esté correctamente configurado
import Header from '../../components/layout/header/header';
import { Marquee } from '../../components/ui/Marquee'; // Asegúrate de que la ruta sea correcta
import photo from "../../assets/images/description/photo.png";

export function Certificates() {
  return (
    <main>
      <Header />

      <h1>Emil Echavarria Ciprian</h1>
      <p>Lorem50324</p>

      <section id="marquee-container">
        <h2>Projects</h2>
        <Marquee className="custom-marquee" reverse={false} pauseOnHover={false} style={{ '--duration': '10s' }}>
          <div className="card">
            <img src={photo} alt="Project 1" className="card-img" />
            <div className="card-content">
              <h3>Project 1</h3>
              <p>hola.</p>
            </div>
          </div>
          <div className="card">
            <img src={photo} alt="Project 2" className="card-img" />
            <div className="card-content">
              <h3>Project 2</h3>
              <p>A description of the second project.</p>
            </div>
          </div>
          {/* Agrega más tarjetas si lo deseas */}
        </Marquee>
      </section>

      <section id="button-container">
        <button 
          id="btn-projects" 
          className="professional-button" 
          onClick={() => window.location.href = '/projects'}
        >
          See All Projects
        </button>
      </section>
    </main>
  );
}

export default Certificates;
