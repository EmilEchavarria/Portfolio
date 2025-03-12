import { Dock, DockIcon } from "../../ui/dock"; // Ajusta la ruta de importación
import "./header.css";

// IMAGES
import IconHome from "../../../assets/images/Header/IconHome.png";
import user from "../../../assets/images/Header/user.png";
import portfolio from "../../../assets/images/Header/portfolio.png";
import skills from "../../../assets/images/Header/skills.png";
import certificate from "../../../assets/images/Header/certificate.png";
import contact from "../../../assets/images/Header/contact.png";

const Header = () => {
  return (
    <header className="header">
      <Dock className="dock-container">
        {/* Iconos con nombres flotantes */}
        <DockIcon className="dock-icon" label={<span className="dock-icon-label">Home</span>}>
          <a href="/home" className="icon-container">
            <img src={IconHome} alt="Home" className="icon" />
          </a>
        </DockIcon>

        <DockIcon className="dock-icon" label={<span className="dock-icon-label">About</span>}>
          <a href="/about" className="icon-container">
            <img src={user} alt="About Me" className="icon" />
          </a>
        </DockIcon>

        <DockIcon className="dock-icon" label={<span className="dock-icon-label">Projects</span>}>
          <a href="/projects" className="icon-container">
            <img src={portfolio} alt="Projects" className="icon" />
          </a>
        </DockIcon>

        <DockIcon className="dock-icon" label={<span className="dock-icon-label">Skills</span>}>
          <a href="/skills" className="icon-container">
            <img src={skills} alt="Skills" className="icon" />
          </a>
        </DockIcon>

        <DockIcon className="dock-icon" label={<span className="dock-icon-label">Certificates</span>}>
          <a href="/certificates" className="icon-container">
            <img src={certificate} alt="Certificates" className="icon" />
          </a>
        </DockIcon>

        <DockIcon className="dock-icon" label={<span className="dock-icon-label">Contact</span>}>
  <a href="/contact" className="icon-container">
    <img src={contact} alt="Contact" className="icon" />
  </a>
</DockIcon>

      </Dock>
    </header>
  );
};

export default Header;