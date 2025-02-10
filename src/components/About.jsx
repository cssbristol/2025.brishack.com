import '../css/About.css'

function About(){
    return(
        <div className="about-section" id="about">
          <p className="about-heading">About</p>
          <p className="about-content exo-2 italics">
            "A hackathon is an event where participants, usually programmers, designers, and innovators, 
            collaborate intensively on software or hardware projects within a limited time—typically 24 to 48 hours. 
            The goal is to rapidly prototype innovative solutions, develop functional applications, or solve real-world challenges."
            -<a className="chatgpt" href="https://chatgpt.com/">ChatGPT</a>
          </p>
          <p className="about-content exo-2">
            BrisHack is the University of Bristol's annual 24-hour hackathon, organised by the Computer Science Society CSS, 
            the Electrical and Electronic Engineering Society BEEES and Bristol Blockchain Society.
            It's a fantastic opportunity to dive into new technologies, gain hands-on experience, and connect with industry sponsors—all while having fun!
          </p>
        </div>
    )
}

export default About