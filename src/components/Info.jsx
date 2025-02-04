import brishackLogo from "../assets/BRISHACK_LOGO_BLACK_2025.png"
import '../css/Info.css'

function Info() {
  return (
    <div className="info-section" id="home">
      <div className="logo">
        <img
          className="brishack-logo"
          src={brishackLogo}
          alt="brishack logo 2025"
        />
      </div>
      <div className="heading">BrisHack 2025</div>
      <div className="university">
        <a href="https://www.bristol.ac.uk/">University of Bristol</a>
      </div>
      <div className="date">16th - 17th Feburary</div>
      <div className="location">MVB 2.11</div>
      <div className="theme">Theme : ?</div>
    </div>
  );
}

export default Info
