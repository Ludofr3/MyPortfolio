import React, { useEffect, useRef } from 'react';
import { useGraph } from '@react-three/fiber';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'Idle', ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/models/animations/biped_robot.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  // const { animations: idleAnimation } = useFBX('/models/animations/idle.fbx');
  const { animations: idleAnimation } = useFBX('/models/animations/Idle.fbx');
  // const { animations: saluteAnimation } = useFBX('/models/animations/salute.fbx');
  // const { animations: clappingAnimation } = useFBX('/models/animations/clapping.fbx');
  // const { animations: victoryAnimation } = useFBX('/models/animations/victory.fbx');
  const { animations: dancingAnimation } = useFBX('/models/animations/Silly Dancing.fbx');

  idleAnimation[0].name = 'idle';
  // saluteAnimation[0].name = 'salute';
  // clappingAnimation[0].name = 'clapping';
  // victoryAnimation[0].name = 'victory';
  dancingAnimation[0].name = 'silly';

  const { actions } = useAnimations(
    [idleAnimation[0],
    // saluteAnimation[0], clappingAnimation[0], victoryAnimation[0]
    dancingAnimation[0]],
    group,
  );

  useEffect(() => {
    if (actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
    }
    return () => {
      if (actions[animationName]) {
        actions[animationName].fadeOut(0.5);
      }
    }
  }, [animationName]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="RobotFBX" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Metal}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Paint}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Plastic}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Robot_Mesh" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Ground" position={[0, -4.344, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh
                      name="Ground_Ground_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Ground_Ground_0.geometry}
                      material={materials.Ground}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/animations/biped_robot.glb');

export default Developer;