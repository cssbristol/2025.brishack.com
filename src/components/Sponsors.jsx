import "../css/Sponsors.css";
import babcock_logo from "../assets/babcock_logo.svg";
import imagination_technologies_logo from "../assets/Imagination_Technologies_logo.svg";
import dyson_logo from "../assets/James-Dyson-Foundation-Logo.jpg";
import roku_logo from "../assets/Roku_logo.svg"

const sponsors = [
  {
    name: "Babcock",
    link: "https://earlycareers.babcockinternational.com/",
    image: babcock_logo,
  },
  {
    name: "Imagination Technologies",
    link: "https://www.imaginationtech.com/careers/early-careers/",
    image: imagination_technologies_logo,
  },
  {
    name: "James Dyson Foundation",
    link: "https://www.jamesdysonfoundation.com/",
    image: dyson_logo,
  },
  {
    name: "Roku",
    link: "https://www.roku.com/",
    image: roku_logo,
  }
];

function Sponsors() {
  return (
    <div className="sponsors-container" id="sponsors">
      <h2 className="sponsors-heading">Our Sponsors</h2>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <a 
            key={index} 
            href={sponsor.link} 
            target="_blank" 
            className="sponsor-item"
          >
            <img 
              src={sponsor.image} 
              alt={`${sponsor.name} Logo`} 
              className="sponsor-logo"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sponsors;
