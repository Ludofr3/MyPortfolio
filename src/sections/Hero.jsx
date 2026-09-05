import { useLayoutEffect, useState } from 'react';
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { calculateSizes } from "../constants";
import { OldComputers } from "../components/OldComputers";
import CanvasLoader from "../components/CanvasLoader";
import CameraManager from '../components/CameraManager';
import PropTypes from 'prop-types';
import { useGLTF } from '@react-three/drei';
import SpotLightWithTarget from '../components/SpotLightWithTarget';
import { baseUrl } from '../config';

const HeroScene = ({ sizes, activeSpline, setCurrentSection, isMobile, onScreenClick, onAnimatingChange }) => {
  const { nodes, materials } = useGLTF(`${baseUrl}assets/models/OldComputers.glb`);
  const invalidate = useThree((state) => state.invalidate);

  useLayoutEffect(() => {
    invalidate();
  }, [nodes, invalidate]);

  return (
    <>
      <CameraManager
        activeSpline={activeSpline}
        setCurrentSection={setCurrentSection}
        nodes={nodes}
        isMobile={isMobile}
        onAnimatingChange={onAnimatingChange}
      />
      <OldComputers
        nodes={nodes}
        materials={materials}
        position={sizes.deskPosition}
        scale={sizes.deskScale}
        onScreenClick={onScreenClick}
        isMobile={isMobile}
      />
      <ambientLight intensity={0.22} />
      <SpotLightWithTarget
        position={[0, 10, 0]}
        targetHeight={[0, 0, -2]}
        distance={32}
        angle={2.5}
        attenuation={16}
        anglePower={3}
        radiusTop={0.6}
        radiusBottom={16}
        color="#ffffff"
        intensity={50}
      />
    </>
  );
};

HeroScene.propTypes = {
  sizes: PropTypes.object.isRequired,
  activeSpline: PropTypes.string,
  setCurrentSection: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
  onScreenClick: PropTypes.func.isRequired,
  onAnimatingChange: PropTypes.func.isRequired,
};

const Hero = ({ setCurrentSection, isSmall, isMobile, isTablet }) => {
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  const [activeSpline, setActiveSpline] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const onScreenClick = (target) => {
    setActiveSpline(target.name);
    setIsAnimating(true);
  };

  return (
    <section id="home" className="min-h-dvh w-full flex flex-col relative">
      <div className="relative z-10 w-full mx-auto flex flex-col mt-20 c-space gap-3 pointer-events-none">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Ludovic <span className="waving-hand">👋</span>
        </p>
      </div>
      <div className="w-full h-full absolute inset-0 z-0">
        <Canvas
          className="w-full h-full"
          dpr={isMobile ? 1 : [1, 1.5]}
          frameloop={isAnimating ? 'always' : 'demand'}
          gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <HeroScene
              sizes={sizes}
              activeSpline={activeSpline}
              setCurrentSection={setCurrentSection}
              isMobile={isMobile}
              onScreenClick={onScreenClick}
              onAnimatingChange={setIsAnimating}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

Hero.propTypes = {
  setCurrentSection: PropTypes.func.isRequired,
  isSmall: PropTypes.bool,
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
};

export default Hero;
