import '../css/Societies.css';
import cssLogo from "../assets/css_logo.png";
import beeesLogo from "../assets/beees_logo.png";

function Societies() {
  return (
    <div className="societies-section">
      <p className="organiser-heading">Organiser</p>
      <div className="societies-logo">
        <a href="https://cssbristol.co.uk/">
          <img className="css-logo" src={cssLogo} alt="CSS Bristol Logo" />
        </a>
        <a href="https://www.beees.co.uk/">
          <img className="beees-logo" src={beeesLogo} alt="BEEES Logo" />
        </a>
      </div>
    </div>
  );
}

export default Societies;
