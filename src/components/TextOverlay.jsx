import React from 'react';
import { Html } from '@react-three/drei';
import { navLinks } from '../constants';
import { Text3D } from '@react-three/drei';
import * as THREE from 'three';

function TextOverlayShowAll() {
  return (
    <group>
      <TextOverlay showText={4} />
      <TextOverlay showText={2} />
      <TextOverlay showText={3} />
    </group>
  );
}

function TextOverlay({ showText }) {
  const selectedLink = navLinks.find(link => link.id === showText);

  if (!selectedLink || showText === 0) {
    return null;
  }

  // Décalage local du texte par rapport à l'objet
  const localOffset = new THREE.Vector3(-0.6, 1.5, 0.5);

  // Créer un quaternion à partir de la rotation de l'objet
  const quaternion = new THREE.Quaternion();
  quaternion.setFromEuler(new THREE.Euler(...selectedLink.rotation));

  // Transformer le décalage local en décalage global
  const globalOffset = localOffset.applyQuaternion(quaternion);

  // Calculer la nouvelle position du texte
  const textPosition = new THREE.Vector3(...selectedLink.position).add(globalOffset);
  return (
    <Text3D
      font={'/assets/fonts/Roboto_Regular.json'}
      size={0.4}
      height={0.1}
      position={textPosition.toArray()}
      rotation={selectedLink.rotation}
    >
      {selectedLink.name}
      <meshStandardMaterial color="white" />
    </Text3D>
  );
}

export default TextOverlayShowAll;