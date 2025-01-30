import '../css/Societies.css'
import cssLogo from "../assets/css_logo.png"
import beeesLogo from "../assets/beees_logo.png"

function Societies() {
  return (
    <div className="societies">
      <a href="https://cssbristol.co.uk/">
        <img className="css-logo" src={cssLogo} alt="" />
      </a>
      <a href="https://www.beees.co.uk/">
        <img className="beees-logo" src={beeesLogo} alt="" />
      </a>
    </div>
  );
}

export default Societies