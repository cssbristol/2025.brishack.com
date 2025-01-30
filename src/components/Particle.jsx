import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import '../css/Particle.css'
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  return (
    <div className="particles-background">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: ["#ffffff"], 
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 1.5,
                },
                attract: {
                  distance: 200,
                  duration: 1.0, 
                },
              },
            },
            particles: {
              color: {
                value: ["#FF00FF", "#00FFFF", "#FF4500", "#00FF00"], 
                animation: {
                  enable: true,
                  speed: 5, 
                  sync: false, 
                },
              },
              links: {
                color: "#ffffff",
                distance: 100,
                enable: true,
                opacity: 1,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                outModes: {
                  default: "bounce",
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 250,
              },
              size: {
                value: { min: 4, max: 8 },
              },
              opacity: {
                value: 0.8,
              },
              shape: {
                type: "circle",
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </div>
  );
}
