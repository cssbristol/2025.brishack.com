import { useState } from "react";
import "../css/Navbar.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "center" });
            setIsMenuOpen(false); // Close menu after clicking an item
        }
    };

    return (
        <>
            {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}

            <nav className="navbar">
                <div className="navbar-logo" onClick={() => scrollToSection("home")}>
                    BrisHack 2025
                </div>

                <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </div>

                <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>

                    <div className="close-btn" onClick={() => setIsMenuOpen(false)}>✖</div>
                    <li className="home" onClick={() => scrollToSection("home")}>Home</li>
                    <li className="about" onClick={() => scrollToSection("about")}>About</li>
                    <li className="rules" onClick={() => scrollToSection("rules")}>Rules</li>
                    <li className="prize" onClick={() => scrollToSection("prize")}>Prize</li>
                    <li className="faq" onClick={() => scrollToSection("faq")}>FAQ</li>
                    <li className="schedule" onClick={() => scrollToSection("schedule")}>Schedule</li>
                    <li className="collaborators" onClick={() => scrollToSection("collaborators")}>Collaborators</li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
