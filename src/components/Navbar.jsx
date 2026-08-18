import { navLinks } from "../data/content";
// import logo from "../assets/img/logo/w1.png";
import logo from "../assets/img/logo/logo-2.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <img src={logo} alt="Aktineu LLP" />
        </a>

        <nav className="navbar__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://aktineu.investwell.app/app/#/login"
          className="navbar__login-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </div>
    </header>
  );
}
