import { Dock, DockIcon } from "../../ui/dock"; // Ajusta la ruta de importación según tu estructura de carpetas
import "./header.css"; // Asegúrate de que este archivo CSS esté correctamente configurado
//IMAGES
import IconHome from "../../../assets/images/Header/IconHome.png"; // Ajusta la ruta de importación según tu estructura de carpetas
import user from "../../../assets/images/Header/user.png"
import portfolio from "../../../assets/images/Header/portfolio.png"
import skills from "../../../assets/images/Header/skills.png"
import certificate from "../../../assets/images/Header/certificate.png"
import contact from "../../../assets/images/Header/contact.png"



 
const Header = () => {
  return (
    <header className="header">
      
      <Dock className="dock-container">
        {/* Icono 1 con enlace */}
        <DockIcon className="dock-icon">
        <a href="/home" className="flex items-center gap-2">
          <img src={IconHome} alt="Home" className="w-6 h-6" />
          <span>Home</span>
        </a>
        </DockIcon>

        {/* Icono 2 con enlace */}
        <DockIcon className="dock-icon">
          <a href="/about_me" className="flex items-center gap-2">
            <img src={user} alt="Home" className="w-6 h-6" /> 
            <span>About Me</span>
          </a>
        </DockIcon>

        {/* Icono 3 con enlace */}
        <DockIcon className="dock-icon">
          <a href="/portfolio"  className="flex items-center gap-2">
          <img src={portfolio} alt="Home" className="w-6 h-6" /> 
            <span>Portfolio</span>
          </a>
        </DockIcon>

        {/* Icono 4 con enlace */}
        <DockIcon className="dock-icon">
          <a href="/skills" className="flex items-center gap-2">
          <img src={skills} alt="Home" className="w-6 h-6" /> 
          <span>Skills</span>
          </a>
        </DockIcon>

      

        {/* Icono 6 con enlace */}
        <DockIcon className="dock-icon">
          <a href="/certificates" className="flex items-center gap-2">
          <img src={certificate} alt="Home" className="w-6 h-6" /> 
            <span>Certificates</span>
          </a>
        </DockIcon>

        {/* Icono 7 con enlace */}
        <DockIcon className="dock-icon">
          <a href="/contact" className="flex items-center gap-2">
          <img src={contact} alt="Home" className="w-6 h-6" /> 
            <span>Contact</span>
          </a>
        </DockIcon>
      </Dock>

    </header>
  );
};

export default Header;
