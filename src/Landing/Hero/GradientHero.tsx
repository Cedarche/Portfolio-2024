import React, { useState, useEffect } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "shadergradient";
import * as reactSpring from "@react-spring/three";
import * as drei from "@react-three/drei";
import * as fiber from "@react-three/fiber";

interface GradientHeroProps {
  scrollY: number;
}

const GradientHero: React.FC<GradientHeroProps> = ({ scrollY }) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const maxScroll = 1000; // Arbitrary max scroll value for zoom effect
  const cDistance = Math.max(3 - (scrollY / maxScroll) * 3, 0); // Calculate cDistance

  return (
    <ShaderGradientCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        // zIndex: 60
      }}
      // Disable camera controls
    >
      <ShaderGradient
        type="waterPlane"
        cPolarAngle={12}
        color1="#ffcc00"
        color2="#00fff2"
        color3="#e600ff"
        uStrength={1}
        uAmplitude={1}
        brightness={1.6}
        uSpeed={0.1}
        zoomOut={false}
        cAzimuthAngle={169}
        cDistance={cDistance}
        envPreset='dawn'
        positionX={width <= 768 ? 1 : 1.1}
        control="props"
        dampingFactor={100} // This will minimize the damping effect
        enableTransition={false}
      />
      {/* <OrbitControls enabled={false} /> */}
    </ShaderGradientCanvas>
  );
};

export default GradientHero;
