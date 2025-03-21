import { Dock, DockIcon } from "../../ui/dock"; // Ajusta la ruta de importación
import { Link } from "react-router-dom"; // Importa Link de react-router-dom
import "./header.css";

// IMAGES
import IconHome from "../../../assets/images/header/IconHome.png";
import user from "../../../assets/images/header/user.png";
import portfolio from "../../../assets/images/header/portfolio.png";
import education from "../../../assets/images/header/education.png";
import contact from "../../../assets/images/header/contact.png";

const Header = () => {
  return (
    <header className="header">
    <Dock className="dock-container">
      {/* Iconos con nombres flotantes */}
      <DockIcon className="dock-icon" label="Home">
        <Link to="/home" className="icon-container">
          <img src={IconHome} alt="Home" className="icon" />
        </Link>
      </DockIcon>

      <DockIcon className="dock-icon" label="About">
        <Link to="/about" className="icon-container">
          <img src={user} alt="About Me" className="icon" />
        </Link>
      </DockIcon>

      <DockIcon className="dock-icon" label="Projects">
        <Link to="/projects" className="icon-container">
          <img src={portfolio} alt="Projects" className="icon" />
        </Link>
      </DockIcon>


      <DockIcon className="dock-icon" label="education">
        <Link to="/education" className="icon-container">
          <img src={education} alt="Skills" className="icon" />
        </Link>
      </DockIcon>

    

      <DockIcon className="dock-icon" label="Contact">
        <Link to="/contact" className="icon-container">
          <img src={contact} alt="Contact" className="icon" />
        </Link>
      </DockIcon>

    </Dock>
  </header>
  );
};

export default Header;
