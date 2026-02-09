import brishackLogo from "../assets/brishack_space_logo.png"
import '../css/Info.css'

function Info() {
  return (
    <div className="info-section" id="home">
      <div className="logo">
        <img
          className="brishack-logo"
          src={brishackLogo}
          alt="brishack logo 2026"
        />
      </div>
      <div className="heading">BrisHack 2026</div>
      <div className="university">
        <a href="https://www.bristol.ac.uk/">University of Bristol</a>
      </div>
      <div className="date">21st - 22nd February</div>
      <div className="location">MVB</div>
      <div className="theme">Theme : "Space"</div>
    </div>
  );
}

export default Info
