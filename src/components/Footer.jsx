import "../css/Footer.css";
import cc_logo from "../assets/cc-by-nc_logo.svg"

function Footer() {
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/privacy" className="footer-link">
            Privacy
          </a>
          <span>|</span>
          <a href="/terms&conditions" className="footer-link">
            Terms & Conditions
          </a>
        </div>

        <div className="footer-copyright">
          <a href="https://creativecommons.org/licenses/by-nc/4.0/deed.en" target="_blank"><img src={cc_logo} alt="cc-by-nc" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
