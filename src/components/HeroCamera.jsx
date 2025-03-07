import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const HeroCamera = ({ children, isMobile, target }) => {
  const groupRef = useRef();
  // useFrame((state, delta) => {
  //   easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
  //   if (target === null && !isMobile) {
  //     easing.damp3(groupRef.current.rotation, [-state.pointer.y / 5, state.pointer.x / 5, 0], 0.25, delta);
  //   }
  // })
  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.3}>{children}</group>
  )
}

export default HeroCamera