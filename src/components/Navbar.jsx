import { useState } from "react";
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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
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
    </>
  );
}

export default Navbar;
