import "../css/Footer.css";

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
          &copy; 2025 BrisHack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
