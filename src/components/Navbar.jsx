import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

const navOptions = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Rules", id: "rules" },
  { label: "Prizes", id: "prizes" },
  { label: "FAQ", id: "faq" },
  { label: "Schedule", id: "schedule" },
  { label: "Collaborators", id: "collaborators" },
  { label: "Sponsors", id: "sponsors" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>
      )}

      <nav className="navbar">
        <div className="navbar-logo" onClick={() => scrollToSection("home")}>
          BrisHack 2025
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="close-btn" onClick={() => setIsMenuOpen(false)}>
            ✖
          </div>

          {navOptions.map((item) => (
            <li
              key={item.id}
              className={item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
