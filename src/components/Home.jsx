import React from "react";

// import * as React from "react";
// import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";

// const particleOptions: ParticleOptions = {
//   filter: ({ x, y, image }) => {
//     // Get pixel
//     const pixel = image.get(x, y);
//     // Make a particle for this pixel if blue > 50 (range 0-255)
//     return pixel.b > 0;
//   },
//   color: ({ x, y, image }) => "#c6202e",
//   radius: () => Math.random() * 1.5 + 0.5,
//   mass: () => 80,
//   friction: () => 0.15,
//   initialPosition: ({ canvasDimensions }) => {
//     return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
//   }
// };

// const motionForce = (x: number, y: number): ParticleForce => {
//   return forces.disturbance(x, y, 16);
// };


const round = (n: number, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 40;

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if magnitude < 200 (range 0-255)
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    return magnitude < 200;
  },
  color: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    // Canvases are much more performant when painting as few colors as possible.
    // Use color of pixel as color for particle however round to nearest 30
    // to decrease the number of unique colors painted on the canvas.
    // You'll notice if we remove this rounding, the framerate will slow down a lot.
    return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
  },
  radius: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    // Lighter colors will have smaller radius
    return 3 - (magnitude / 255) * 1.5;
  },
  mass: () => 30,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 7);
};


function Home() {
  // const { innerWidth, innerHeight } = useWindowSize() ;
  return (
    <div className="home">
       {/* <div class="container"> */}
       <div class="row align-items-center my-5">
          {/* <div class="col-lg-7">
           <canvas id="scene">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/Full_Lockup_Transparent.png"
              alt=""
            />
            </canvas>		 */}
              {/* width={Number(innerWidth)}
              height={Number(innerHeight)} */}
        <ParticleImage
              src={"/redstone.png"}
              scale={1}
              width="4000"
              height="1000"
              entropy={25}
              maxParticles={20000}
              particleOptions={particleOptions}
              mouseMoveForce={motionForce}
              touchMoveForce={motionForce}
              className='.particles-wrapper'
              backgroundColor="#f8f1e0"
            />
           {/* </div> */}
           <div class="col-lg-5" style={{"justify": "center"}}>
            <h1 class="font-weight-light">Home</h1>
            <p>
              TulsaDAO is an organization focused on fostering coordination, education, and economic activity within the digital assets space for the greater benefit of Tulsa.
            </p>
            
          {/* </div>  */}
         </div>
       </div>
     </div> 
  );
}

export default Home;