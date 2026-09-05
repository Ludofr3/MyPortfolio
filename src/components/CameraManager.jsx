import { useRef, useLayoutEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import PropTypes from 'prop-types';

const CameraManager = ({ activeSpline, setCurrentSection, nodes, isMobile, onAnimatingChange }) => {
  const { camera, invalidate } = useThree();
  const cameraRef = useRef(camera);
  const progressRef = useRef(0);
  const lookAtTarget = useRef(new THREE.Vector3());
  const [curve, setCurve] = useState(null);
  const [targetObject, setTargetObject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationDuration = 5;

  useLayoutEffect(() => {
    cameraRef.current.near = 0.01;
    if (isMobile) {
      cameraRef.current.position.set(0, 4.5, 8);
    } else {
      cameraRef.current.position.set(0, 5.53789, 10.4679);
    }
    cameraRef.current.lookAt(0, 0, 0);
    cameraRef.current.updateProjectionMatrix();
    invalidate();
  }, [isMobile, invalidate]);

  useLayoutEffect(() => {
    if (nodes && activeSpline !== null) {
      const splineName = `Spline_${activeSpline}`;
      const splineObject = nodes[splineName];
      const nextTarget = nodes[activeSpline];

      if (splineObject && nextTarget) {
        splineObject.updateWorldMatrix(true, false);
        const points = splineObject.geometry.attributes.position.array;
        const controlPoints = [];

        for (let i = 0; i < points.length; i += 3) {
          const localPoint = new THREE.Vector3(points[i], points[i + 1], points[i + 2]);
          controlPoints.push(localPoint.applyMatrix4(splineObject.matrixWorld));
        }
        if (activeSpline === "Work") {
          controlPoints.reverse();
        }
        progressRef.current = 0;
        setCurve(new THREE.CatmullRomCurve3(controlPoints));
        setTargetObject(nextTarget);
        setIsAnimating(true);
        onAnimatingChange?.(true);
        invalidate();
      } else {
        console.error(`Spline ou objet cible non trouvé pour ${activeSpline}`);
      }
    }
  }, [activeSpline, nodes, onAnimatingChange, invalidate]);

  useFrame((state, delta) => {
    if (isAnimating && curve && targetObject) {
      const speed = delta / animationDuration;
      const newProgress = Math.min(progressRef.current + speed, 1);
      progressRef.current = newProgress;

      const position = curve.getPointAt(newProgress);
      const offset = new THREE.Vector3(0, 0, 0);
      if (activeSpline === "Work") {
        offset.y = -1.8;
        offset.x = -0.8;
        offset.z = -0.1;
      } else if (activeSpline === "About") {
        offset.x = -0.3;
        offset.z = -0.6;
        offset.y = -0.7;
      } else if (activeSpline === "Contact") {
        offset.x = 1.3;
        offset.y = -0.55;
      }
      cameraRef.current.position.copy(position).add(offset);

      targetObject.updateWorldMatrix(true, false);
      targetObject.getWorldPosition(lookAtTarget.current);
      cameraRef.current.lookAt(lookAtTarget.current);

      if (newProgress >= 1) {
        camera.position.copy(curve.getPointAt(1));
        setIsAnimating(false);
        onAnimatingChange?.(false);
        setCurrentSection(`#${activeSpline}`);
        setCurve(null);
        setTargetObject(null);
      }
    }
  });

  return null;
};

CameraManager.propTypes = {
  activeSpline: PropTypes.string,
  setCurrentSection: PropTypes.func.isRequired,
  nodes: PropTypes.object,
  isMobile: PropTypes.bool,
  onAnimatingChange: PropTypes.func,
};

export default CameraManager;
