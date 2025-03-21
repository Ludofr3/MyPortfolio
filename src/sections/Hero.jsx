import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { calculateSizes } from "../constants";
import { OldComputers } from "../components/OldComputers";
import CanvasLoader from "../components/CanvasLoader";
import CameraManager from '../components/CameraManager';
import PropTypes from 'prop-types';
import { useGLTF } from '@react-three/drei';
import SpotLightWithTarget from '../components/SpotLightWithTarget';

const Hero = ({ setCurrentSection, isSmall, isMobile, isTablet }) => {
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  const { nodes, materials } = useGLTF('/models/OldComputers.glb');
  const [activeSpline, setActiveSpline] = useState(null);
  const onScreenClick = (target) => {
    setActiveSpline(target.name); // Déclenche l'animation vers l'écran
  };

  return (
    <section id="home" className="min-h-[90vh] w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Ludovic <span className="waving-hand">👋</span>
        </p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <CameraManager
              activeSpline={activeSpline}
              setCurrentSection={setCurrentSection}
              nodes={nodes}
            />
            <OldComputers
              nodes={nodes}
              materials={materials}
              position={sizes.deskPosition}
              scale={sizes.deskScale}
              onScreenClick={onScreenClick}
            />
            <ambientLight intensity={0.1} />
            <SpotLightWithTarget
              position={[0, 8, 0]}
              targetHeight={[0, 0, 0]}
              distance={20}
              angle={3.5}
              // penumbra={1}
              attenuation={10}
              anglePower={5}
              color="#ffffff"
              intensity={200}
            />
            {/* <directionalLight position={[0, 10, 0]} intensity={1.5} /> */}
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

Hero.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
};

export default Hero;