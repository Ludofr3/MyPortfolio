import React, { useRef, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const CameraController = ({ target, setCurrentSection }) => {
  const { camera } = useThree();
  const cameraRef = useRef(camera);
  const isAnimating = useRef(false);
  const targetPositionRef = useRef(new THREE.Vector3());

  useEffect(() => {
    if (target) {
      isAnimating.current = true;
      targetPositionRef.current.copy(new THREE.Vector3(...target.position)); // Stocker la position initiale
    }
  }, [target]);

  useFrame(() => {
    if (target && isAnimating.current) {
      const direction = new THREE.Vector3().subVectors(targetPositionRef.current, camera.position).normalize();
      const minDistance = 0.1; // Distance minimale réduite
      const newPosition = new THREE.Vector3().copy(targetPositionRef.current).sub(direction.multiplyScalar(minDistance));

      // Interpolation de la position de la caméra
      cameraRef.current.position.lerp(newPosition, 0.2);

      // Orienter la caméra vers la cible
      cameraRef.current.lookAt(targetPositionRef.current);

      // Vérifier si la caméra est suffisamment proche
      if (cameraRef.current.position.distanceTo(newPosition) < 0.01) {
        isAnimating.current = false;
        setCurrentSection(target.href);
        setTarget(null); // Réinitialiser la cible
      }
    }
  });

  return null;
};

export default CameraController;