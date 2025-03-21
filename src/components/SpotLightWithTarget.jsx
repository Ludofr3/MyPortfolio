import { SpotLight } from '@react-three/drei';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';

function SpotLightWithTarget({ position, targetHeight, ...props }) {
  // Accéder à la scène via useThree
  const { scene } = useThree();

  // Créer une référence pour l'objet cible
  const targetRef = useRef(new THREE.Object3D());

  // Ajouter la cible à la scène lors du montage et la retirer lors du démontage
  useEffect(() => {
    scene.add(targetRef.current);
    return () => {
      scene.remove(targetRef.current);
    };
  }, [scene]);

  // Mettre à jour la position de la cible lorsque position ou targetHeight change
  useEffect(() => {
    targetRef.current.position.set(targetHeight[0], targetHeight[1], targetHeight[2]);
  }, [position, targetHeight]);

  return (
    <SpotLight
      position={position} // Position du spotlight
      target={targetRef.current} // Passer l'objet cible au lieu d'un tableau
      {...props} // Autres props (couleur, intensité, etc.)
    />
  );
}

export default SpotLightWithTarget;