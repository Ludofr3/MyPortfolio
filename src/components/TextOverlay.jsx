import { navLinks } from '../constants';
import { Text3D } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { baseUrl } from '../config';
import PropTypes from 'prop-types';

const HOVER_COLOR = '#ff851b';

function TextOverlayShowAll({ onScreenClick, hoveredId, onHover }) {
  return (
    <group>
      <TextOverlay showText={4} onScreenClick={onScreenClick} hoveredId={hoveredId} onHover={onHover} />
      <TextOverlay showText={2} onScreenClick={onScreenClick} hoveredId={hoveredId} onHover={onHover} />
      <TextOverlay showText={3} onScreenClick={onScreenClick} hoveredId={hoveredId} onHover={onHover} />
    </group>
  );
}

function TextOverlay({ showText, onScreenClick, hoveredId, onHover }) {
  const { invalidate, gl } = useThree();
  const selectedLink = navLinks.find(link => link.id === showText);

  if (!selectedLink || showText === 0) {
    return null;
  }

  const localOffset = new THREE.Vector3(-0.6, 1.5, 0.5);
  const quaternion = new THREE.Quaternion();
  quaternion.setFromEuler(new THREE.Euler(...selectedLink.rotation));
  const globalOffset = localOffset.applyQuaternion(quaternion);
  const textPosition = new THREE.Vector3(...selectedLink.position).add(globalOffset);
  const isHovered = hoveredId === selectedLink.id;

  const setHover = (id) => {
    onHover(id);
    gl.domElement.style.cursor = id ? 'pointer' : 'auto';
    invalidate();
  };

  return (
    <Text3D
      font={`${baseUrl}assets/fonts/Roboto_Regular.json`}
      size={0.4}
      height={0.1}
      position={textPosition.toArray()}
      rotation={selectedLink.rotation}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(selectedLink.id);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHover(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onScreenClick(selectedLink);
      }}
    >
      {selectedLink.name}
      <meshStandardMaterial
        color={isHovered ? HOVER_COLOR : 'white'}
        emissive={isHovered ? HOVER_COLOR : '#000000'}
        emissiveIntensity={isHovered ? 0.8 : 0}
      />
    </Text3D>
  );
}

TextOverlayShowAll.propTypes = {
  onScreenClick: PropTypes.func.isRequired,
  hoveredId: PropTypes.number,
  onHover: PropTypes.func.isRequired,
};

TextOverlay.propTypes = {
  showText: PropTypes.number,
  onScreenClick: PropTypes.func.isRequired,
  hoveredId: PropTypes.number,
  onHover: PropTypes.func.isRequired,
};

export default TextOverlayShowAll;
