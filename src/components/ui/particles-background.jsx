'use client'; // only if using Next.js 13+ app directory

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

export function ParticlesBackground(props) {
    const [init, setInit] = useState(false);
    useEffect(() => {
      initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      }).then(() => {
        setInit(true);
      });
    }, []);
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
    const options = useMemo(
      () => ({
        // background: {
        //   color: {
        //     value: "#0d47a1",
        //   },
        // },
        fullScreen: { enable: false },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: props.color,
          },
          links: {
            color: props.color,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 50,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }),
      [],
    );
  
    if (init) {
      return (
        <Particles
          id="tsparticles"
          className="absolute"
          particlesLoaded={particlesLoaded}
          //init={particlesInit}
        //   particlesLoaded={particlesLoaded}
          options={options}
        />
      );
    }
  
    return <></>;
}
// const ParticlesBackground = () => {
// //   const particlesInit = async(engine: any) => {
// //      await loadFull(engine);
// //   };

//   return (
//     <Particles
//       id="tsparticles"
//     //   init={particlesInit}
//       options={{
//         fullScreen: { enable: true },
//         particles: {
//           number: {
//             value: 80,
//             density: {
//               enable: true,
//               value_area: 800,
//             },
//           },
//           color: { value: "#0000" },
//           shape: { type: "circle" },
//           opacity: {
//             value: 0.5,
//             random: false,
//           },
//           size: {
//             value: 3,
//             random: true,
//           },
//           move: {
//             enable: true,
//             speed: 2,
//             direction: "none",
//             out_mode: "bounce",
//           },
//         },
//         interactivity: {
//           events: {
//             onHover: {
//               enable: true,
//               mode: "repulse",
//             },
//           },
//         },
//         background: {
//           color: "#000000",
//         },
//       }}
//     />
//   );
// };

export default ParticlesBackground;
