import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li><a href="/home">Home</a></li>
          <li><a href="/about_me">About Me</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/skills">Skills</a></li>
          <li><a href="/career">Tu abuela</a></li>
          <li><a href="/certificates">Certificates</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
