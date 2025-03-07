import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const CameraManager = ({ activeSpline, setCurrentSection, nodes }) => {
  const { camera } = useThree();
  const cameraRef = useRef(camera);
  const [curve, setCurve] = useState(null);
  const [targetObject, setTargetObject] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationDuration = 5; // Durée de l'animation en secondes

  // Position initiale de la caméra
  useEffect(() => {
    cameraRef.current.near = 0.01;
    cameraRef.current.position.set(0, 5.53789, 10.4679);
    cameraRef.current.lookAt(0, 0, 0);
  }, []);

  // Générer la courbe de Bézier et définir l'objet cible quand un écran est sélectionné
  useEffect(() => {
    if (nodes && activeSpline !== null) {
      const splineName = `Spline_${activeSpline}`;
      const targetName = activeSpline; // Par exemple, "About", "Contact", etc.

      const splineObject = nodes[splineName];
      const targetObject = nodes[targetName];

      if (splineObject && targetObject) {
        console.log(`Spline sélectionnée : ${splineName}`);
        console.log(`Localisation: ${splineObject}`);
        console.log(`Objet cible : ${targetName}`);
        console.log(`Localisation: ${targetObject}`);

        // Extraire les points de la spline (mesh)
        const points = splineObject.geometry.attributes.position.array;
        const controlPoints = [];

        for (let i = 0; i < points.length; i += 3) {
          const localPoint = new THREE.Vector3(points[i], points[i + 1], points[i + 2]);
          const globalPoint = localPoint.applyMatrix4(splineObject.matrixWorld);
          controlPoints.push(globalPoint);
        }
        controlPoints.forEach((point, index) => {
          console.log(`Point ${index}: ${point.x}, ${point.y}, ${point.z}`);
        });
        // Créer une courbe CatmullRom pour un mouvement lisse
        const bezierCurve = new THREE.CatmullRomCurve3(controlPoints);
        setProgress(0);
        setCurve(bezierCurve);
        setTargetObject(targetObject);
        setIsAnimating(true);
      } else {
        console.error(`Spline ou objet cible non trouvé pour ${activeSpline}`);
      }
    }
  }, [activeSpline, nodes]);

  // Animation de la caméra
  useFrame((state, delta) => {
    if (isAnimating && curve && targetObject) {
      const speed = delta / animationDuration;
      const newProgress = Math.min(progress + speed, 1);
      setProgress(newProgress);

      // Position de la caméra le long de la courbe
      const position = curve.getPointAt(newProgress);
      const offset = new THREE.Vector3(0, -1, 0);
      cameraRef.current.position.copy(position).add(offset);
      // console.log(`Progress: ${newProgress}, Position: ${position.x}, ${position.y}, ${position.z}`);

      // Faire regarder la caméra vers l'objet cible
      cameraRef.current.lookAt(targetObject.position);
      console.log("target object position: ", targetObject.position);

      // Fin de l'animation
      if (newProgress >= 1) {
        camera.position.copy(curve.getPointAt(0)); // Position à progress = 0 (départ)
        camera.position.copy(curve.getPointAt(1)); // Position à progress = 1 (arrivée)
        setIsAnimating(false);
        setCurrentSection(`#${activeSpline}`);
        setCurve(null);
        setTargetObject(null);
      }
    }
  });

  return null;
};

export default CameraManager;