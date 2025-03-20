/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, useEffect, useRef } from 'react'
import { useGLTF, useTexture, useVideoTexture } from '@react-three/drei'
import TextOverlay from './TextOverlay';
import { navLinks } from '../constants';

export function OldComputers(props) {
  const group = useRef()
  const nodes = props.nodes;
  const materials = props.materials;
  const error = useVideoTexture('/textures/error.mp4');
  const [showText, setShowText] = useState(0);

  useEffect(() => {
    if (error) {
      error.center.set(0.5, 0.5);
      error.rotation = Math.PI; // Rotation de 180°
      error.repeat.set(-5, 5);
      error.offset.set(0, -0.35);
      error.needsUpdate = true;
    }
  }, [error]);

  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Contact" position={[4.507, 0.791, -1.357]} />
        <group name="Error1" position={[-3.417, 3.586, 1.303]} />
        <group name="About" position={[-3.096, 1.094, -3.081]} />
        <group name="Work" position={[-7.08, -2.528, -2.719]} />
        <mesh
          name="PC_01001"
          castShadow
          receiveShadow
          geometry={nodes.PC_01001.geometry}
          material={materials.Texture}
          position={[0.63, 0, -3]}
          rotation={[0, 0.17, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_01002"
          castShadow
          receiveShadow
          geometry={nodes.PC_01002.geometry}
          material={materials.Texture}
          position={[-2.36, 0.32, -2.018]}
          rotation={[0, 0.534, -Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_01003"
          castShadow
          receiveShadow
          geometry={nodes.PC_01003.geometry}
          material={materials.Texture}
          position={[-2.424, 0.938, -2.247]}
          rotation={[0, 0.136, Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          name="PC_01004"
          castShadow
          receiveShadow
          geometry={nodes.PC_01004.geometry}
          material={materials.Texture}
          position={[-3.528, 0, 0.586]}
          rotation={[Math.PI, -1.085, Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_01005"
          castShadow
          receiveShadow
          geometry={nodes.PC_01005.geometry}
          material={materials.Texture}
          position={[-3.528, 1.528, 0.586]}
          rotation={[0, 0.911, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_01006"
          castShadow
          receiveShadow
          geometry={nodes.PC_01006.geometry}
          material={materials.Texture}
          position={[3.423, 0, 0.005]}
          rotation={[-Math.PI, 1.127, -Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_01007"
          castShadow
          receiveShadow
          geometry={nodes.PC_01007.geometry}
          material={materials.Texture}
          position={[4.086, 2.183, 2.41]}
          rotation={[0, -1.548, 1.571]}
          scale={1.52}
        />
        <mesh
          name="PC_01008"
          castShadow
          receiveShadow
          geometry={nodes.PC_01008.geometry}
          material={materials.Texture}
          position={[4.314, 1.565, 2.343]}
          rotation={[0, -1.149, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          name="PC_01009"
          castShadow
          receiveShadow
          geometry={nodes.PC_01009.geometry}
          material={materials.Texture}
          position={[-3.79, 0, 1.656]}
          rotation={[Math.PI, -1.393, 0]}
          scale={-1.52}
        />
        <mesh
          name="PC_01010"
          castShadow
          receiveShadow
          geometry={nodes.PC_01010.geometry}
          material={materials.Texture}
          position={[-3.79, 1.528, 1.656]}
          rotation={[0, 1.218, -Math.PI]}
          scale={-1.52}
        />
        <mesh
          name="PC_01011"
          castShadow
          receiveShadow
          geometry={nodes.PC_01011.geometry}
          material={materials.Texture}
          position={[-3.693, 0, 2.585]}
          rotation={[0, -1.568, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_01012"
          castShadow
          receiveShadow
          geometry={nodes.PC_01012.geometry}
          material={materials.Texture}
          position={[-5.36, 2.183, 0.811]}
          rotation={[0, 0.772, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_01013"
          castShadow
          receiveShadow
          geometry={nodes.PC_01013.geometry}
          material={materials.Texture}
          position={[-5.564, 1.565, 0.69]}
          rotation={[0, 1.171, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          name="PC_01014"
          castShadow
          receiveShadow
          geometry={nodes.PC_01014.geometry}
          material={materials.Texture}
          position={[-5.474, 2.794, 0.745]}
          rotation={[Math.PI, -1.155, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_01015"
          castShadow
          receiveShadow
          geometry={nodes.PC_01015.geometry}
          material={materials.Texture}
          position={[-5.289, 3.412, 0.894]}
          rotation={[Math.PI, -0.757, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          name="PC_01016"
          castShadow
          receiveShadow
          geometry={nodes.PC_01016.geometry}
          material={materials.Texture}
          position={[-5.283, 0, -2.328]}
          rotation={[0, 0.755, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_01017"
          castShadow
          receiveShadow
          geometry={nodes.PC_01017.geometry}
          material={materials.Texture}
          position={[-5.486, 0, -1.385]}
          rotation={[Math.PI, -0.985, Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_01018"
          castShadow
          receiveShadow
          geometry={nodes.PC_01018.geometry}
          material={materials.Texture}
          position={[-3.012, 0, -3.79]}
          rotation={[0, 0.597, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_01019"
          castShadow
          receiveShadow
          geometry={nodes.PC_01019.geometry}
          material={materials.Texture}
          position={[-2.082, 0, -4.324]}
          rotation={[Math.PI, -0.597, Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_01020"
          castShadow
          receiveShadow
          geometry={nodes.PC_01020.geometry}
          material={materials.Texture}
          position={[-1.016, 0, -4.489]}
          rotation={[0, 0.308, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_01021"
          castShadow
          receiveShadow
          geometry={nodes.PC_01021.geometry}
          material={materials.Texture}
          position={[-5.315, 1.833, -1.412]}
          rotation={[0, 1.062, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_01022"
          castShadow
          receiveShadow
          geometry={nodes.PC_01022.geometry}
          material={materials.Texture}
          position={[-4.181, 1.833, -3.064]}
          rotation={[-Math.PI, -0.465, -Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_01023"
          castShadow
          receiveShadow
          geometry={nodes.PC_01023.geometry}
          material={materials.Texture}
          position={[-1.758, 1.833, -3.605]}
          rotation={[0, -1.165, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_01024"
          castShadow
          receiveShadow
          geometry={nodes.PC_01024.geometry}
          material={materials.Texture}
          position={[-0.254, 1.833, -5.542]}
          rotation={[0, 1.553, 1.571]}
          scale={1.52}
        />
        <mesh
          name="PC_01025"
          castShadow
          receiveShadow
          geometry={nodes.PC_01025.geometry}
          material={materials.Texture}
          position={[-5.283, 2.143, -2.328]}
          rotation={[Math.PI, -0.755, Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_01026"
          castShadow
          receiveShadow
          geometry={nodes.PC_01026.geometry}
          material={materials.Texture}
          position={[-5.486, 2.143, -1.385]}
          rotation={[0, 0.985, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_01027"
          castShadow
          receiveShadow
          geometry={nodes.PC_01027.geometry}
          material={materials.Texture}
          position={[-3.012, 2.143, -3.79]}
          rotation={[Math.PI, -0.597, Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_01028"
          castShadow
          receiveShadow
          geometry={nodes.PC_01028.geometry}
          material={materials.Texture}
          position={[-2.082, 2.143, -4.324]}
          rotation={[0, 0.597, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_01029"
          castShadow
          receiveShadow
          geometry={nodes.PC_01029.geometry}
          material={materials.Texture}
          position={[-1.016, 2.143, -4.489]}
          rotation={[Math.PI, -0.308, Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_01030"
          castShadow
          receiveShadow
          geometry={nodes.PC_01030.geometry}
          material={materials.Texture}
          position={[-5.315, 3.976, -1.412]}
          rotation={[0, 1.062, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_01031"
          castShadow
          receiveShadow
          geometry={nodes.PC_01031.geometry}
          material={materials.Texture}
          position={[-4.181, 3.976, -3.064]}
          rotation={[-Math.PI, -0.465, -Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_01032"
          castShadow
          receiveShadow
          geometry={nodes.PC_01032.geometry}
          material={materials.Texture}
          position={[-1.173, 3.976, -4.449]}
          rotation={[0, 0.168, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_01033"
          castShadow
          receiveShadow
          geometry={nodes.PC_01033.geometry}
          material={materials.Texture}
          position={[-0.941, 3.976, -4.664]}
          rotation={[Math.PI, 0.018, -Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_01034"
          castShadow
          receiveShadow
          geometry={nodes.PC_01034.geometry}
          material={materials.Texture}
          position={[5.531, 2.183, 0.174]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01035"
          castShadow
          receiveShadow
          geometry={nodes.PC_01035.geometry}
          material={materials.Texture}
          position={[5.736, 1.565, 0.053]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01036"
          castShadow
          receiveShadow
          geometry={nodes.PC_01036.geometry}
          material={materials.Texture}
          position={[5.646, 2.794, 0.107]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01037"
          castShadow
          receiveShadow
          geometry={nodes.PC_01037.geometry}
          material={materials.Texture}
          position={[5.461, 3.412, 0.256]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01038"
          castShadow
          receiveShadow
          geometry={nodes.PC_01038.geometry}
          material={materials.Texture}
          position={[4.856, 0, -2.541]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01039"
          castShadow
          receiveShadow
          geometry={nodes.PC_01039.geometry}
          material={materials.Texture}
          position={[5.059, 0, -1.597]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01040"
          castShadow
          receiveShadow
          geometry={nodes.PC_01040.geometry}
          material={materials.Texture}
          position={[2.585, 0, -4.002]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01041"
          castShadow
          receiveShadow
          geometry={nodes.PC_01041.geometry}
          material={materials.Texture}
          position={[1.655, 0, -4.536]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01042"
          castShadow
          receiveShadow
          geometry={nodes.PC_01042.geometry}
          material={materials.Texture}
          position={[0.59, 0, -4.701]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01043"
          castShadow
          receiveShadow
          geometry={nodes.PC_01043.geometry}
          material={materials.Texture}
          position={[4.888, 1.833, -1.624]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01044"
          castShadow
          receiveShadow
          geometry={nodes.PC_01044.geometry}
          material={materials.Texture}
          position={[3.754, 1.833, -3.277]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01045"
          castShadow
          receiveShadow
          geometry={nodes.PC_01045.geometry}
          material={materials.Texture}
          position={[1.332, 1.833, -3.817]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01047"
          castShadow
          receiveShadow
          geometry={nodes.PC_01047.geometry}
          material={materials.Texture}
          position={[4.856, 2.143, -2.541]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01048"
          castShadow
          receiveShadow
          geometry={nodes.PC_01048.geometry}
          material={materials.Texture}
          position={[5.059, 2.143, -1.597]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01049"
          castShadow
          receiveShadow
          geometry={nodes.PC_01049.geometry}
          material={materials.Texture}
          position={[2.585, 2.143, -4.002]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01050"
          castShadow
          receiveShadow
          geometry={nodes.PC_01050.geometry}
          material={materials.Texture}
          position={[1.655, 2.143, -4.536]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01051"
          castShadow
          receiveShadow
          geometry={nodes.PC_01051.geometry}
          material={materials.Texture}
          position={[0.59, 2.143, -4.701]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01052"
          castShadow
          receiveShadow
          geometry={nodes.PC_01052.geometry}
          material={materials.Texture}
          position={[4.888, 3.976, -1.624]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01053"
          castShadow
          receiveShadow
          geometry={nodes.PC_01053.geometry}
          material={materials.Texture}
          position={[3.754, 3.976, -3.277]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_01054"
          castShadow
          receiveShadow
          geometry={nodes.PC_01054.geometry}
          material={materials.Texture}
          position={[0.746, 3.976, -4.662]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02001"
          castShadow
          receiveShadow
          geometry={nodes.PC_02001.geometry}
          material={materials.Texture}
          position={[-0.186, 0, -2.962]}
          rotation={[0, -0.064, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_02002"
          castShadow
          receiveShadow
          geometry={nodes.PC_02002.geometry}
          material={materials.Texture}
          position={[-2.288, 1.56, -2.263]}
          rotation={[0, -0.012, -Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_02003"
          castShadow
          receiveShadow
          geometry={nodes.PC_02003.geometry}
          material={materials.Texture}
          position={[-2.195, 2.188, -1.867]}
          rotation={[0, 0.512, Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          name="PC_02004"
          castShadow
          receiveShadow
          geometry={nodes.PC_02004.geometry}
          material={materials.Texture}
          position={[-2.896, 0.3, -1.466]}
          rotation={[Math.PI, -1.347, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_02005"
          castShadow
          receiveShadow
          geometry={nodes.PC_02005.geometry}
          material={materials.Texture}
          position={[3.224, 0, -0.804]}
          rotation={[0, -1.324, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_02006"
          castShadow
          receiveShadow
          geometry={nodes.PC_02006.geometry}
          material={materials.Texture}
          position={[3.53, 1.834, 0.44]}
          rotation={[-Math.PI, 1.324, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_02007"
          castShadow
          receiveShadow
          geometry={nodes.PC_02007.geometry}
          material={materials.Texture}
          position={[4.255, 0.943, 2.219]}
          rotation={[0, -1.002, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_02008"
          castShadow
          receiveShadow
          geometry={nodes.PC_02008.geometry}
          material={materials.Texture}
          position={[3.87, 0.315, 2.35]}
          rotation={[0, -1.526, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          name="PC_02009"
          castShadow
          receiveShadow
          geometry={nodes.PC_02009.geometry}
          material={materials.Texture}
          position={[-5.614, 0.943, 0.817]}
          rotation={[0, 1.318, 1.571]}
          scale={1.52}
        />
        <mesh
          name="PC_02010"
          castShadow
          receiveShadow
          geometry={nodes.PC_02010.geometry}
          material={materials.Texture}
          position={[-5.257, 0.315, 1.01]}
          rotation={[0, 0.795, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          name="PC_02011"
          castShadow
          receiveShadow
          geometry={nodes.PC_02011.geometry}
          material={materials.Texture}
          position={[-5.39, 4.034, 0.986]}
          rotation={[Math.PI, -0.609, Math.PI / 2]}
          scale={1.52}
        />
        <mesh
          name="PC_02012"
          castShadow
          receiveShadow
          geometry={nodes.PC_02012.geometry}
          material={materials.Texture}
          position={[-5.696, 4.662, 0.718]}
          rotation={[Math.PI, -1.133, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          name="PC_02013"
          castShadow
          receiveShadow
          geometry={nodes.PC_02013.geometry}
          material={materials.Texture}
          position={[-5.952, 0, -0.641]}
          rotation={[0, 0.953, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_02014"
          castShadow
          receiveShadow
          geometry={nodes.PC_02014.geometry}
          material={materials.Texture}
          position={[-4.476, 0, -2.749]}
          rotation={[Math.PI, -0.568, Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_02015"
          castShadow
          receiveShadow
          geometry={nodes.PC_02015.geometry}
          material={materials.Texture}
          position={[-3.716, 0, -2.886]}
          rotation={[0, 0.644, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_02016"
          castShadow
          receiveShadow
          geometry={nodes.PC_02016.geometry}
          material={materials.Texture}
          position={[-0.084, 0, -5.026]}
          rotation={[Math.PI, -0.039, Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_02017"
          castShadow
          receiveShadow
          geometry={nodes.PC_02017.geometry}
          material={materials.Texture}
          position={[-4.194, 1.836, -2.768]}
          rotation={[Math.PI, -0.655, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          name="PC_02018"
          castShadow
          receiveShadow
          geometry={nodes.PC_02018.geometry}
          material={materials.Texture}
          position={[-5.952, 2.143, -0.641]}
          rotation={[Math.PI, -0.953, Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_02019"
          castShadow
          receiveShadow
          geometry={nodes.PC_02019.geometry}
          material={materials.Texture}
          position={[-4.476, 2.143, -2.749]}
          rotation={[0, 0.568, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_02020"
          castShadow
          receiveShadow
          geometry={nodes.PC_02020.geometry}
          material={materials.Texture}
          position={[-3.727, 2.143, -3.1]}
          rotation={[Math.PI, -0.644, Math.PI]}
          scale={1.52}
        />
        <mesh
          name="PC_02021"
          castShadow
          receiveShadow
          geometry={nodes.PC_02021.geometry}
          material={materials.Texture}
          position={[-0.084, 2.143, -5.026]}
          rotation={[0, 0.039, 0]}
          scale={1.52}
        />
        <mesh
          name="PC_02022"
          castShadow
          receiveShadow
          geometry={nodes.PC_02022.geometry}
          material={materials.Texture}
          position={[-4.194, 3.979, -2.768]}
          rotation={[Math.PI, -0.655, -Math.PI / 2]}
          scale={-1.52}
        />
        <mesh
          name="PC_02023"
          castShadow
          receiveShadow
          geometry={nodes.PC_02023.geometry}
          material={materials.Texture}
          position={[5.786, 0.943, 0.18]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02024"
          castShadow
          receiveShadow
          geometry={nodes.PC_02024.geometry}
          material={materials.Texture}
          position={[5.428, 0.315, 0.373]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02025"
          castShadow
          receiveShadow
          geometry={nodes.PC_02025.geometry}
          material={materials.Texture}
          position={[5.562, 4.034, 0.348]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02026"
          castShadow
          receiveShadow
          geometry={nodes.PC_02026.geometry}
          material={materials.Texture}
          position={[5.868, 4.662, 0.081]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02027"
          castShadow
          receiveShadow
          geometry={nodes.PC_02027.geometry}
          material={materials.Texture}
          position={[5.525, 0, -0.854]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02028"
          castShadow
          receiveShadow
          geometry={nodes.PC_02028.geometry}
          material={materials.Texture}
          position={[4.05, 0, -2.962]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02029"
          castShadow
          receiveShadow
          geometry={nodes.PC_02029.geometry}
          material={materials.Texture}
          position={[3.289, 0, -3.098]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02031"
          castShadow
          receiveShadow
          geometry={nodes.PC_02031.geometry}
          material={materials.Texture}
          position={[3.767, 1.836, -2.98]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02032"
          castShadow
          receiveShadow
          geometry={nodes.PC_02032.geometry}
          material={materials.Texture}
          position={[5.525, 2.143, -0.854]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02033"
          castShadow
          receiveShadow
          geometry={nodes.PC_02033.geometry}
          material={materials.Texture}
          position={[4.05, 2.143, -2.962]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02034"
          castShadow
          receiveShadow
          geometry={nodes.PC_02034.geometry}
          material={materials.Texture}
          position={[3.3, 2.143, -3.312]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_02036"
          castShadow
          receiveShadow
          geometry={nodes.PC_02036.geometry}
          material={materials.Texture}
          position={[3.767, 3.979, -2.98]}
          rotation={[-Math.PI, 0, 0]}
          scale={-1}
        />
        <mesh
          name="PC_03001"
          castShadow
          receiveShadow
          geometry={nodes.PC_03001.geometry}
          material={materials.Texture}
          position={[0.353, 2.352, -3.336]}
          rotation={[-0.255, 0, 0]}
        />
        <mesh
          name="PC_03002"
          castShadow
          receiveShadow
          geometry={nodes.PC_03002.geometry}
          material={materials.Texture}
          position={[0.183, 2.801, -2.854]}
          rotation={[0.093, 0.146, -0.014]}
        />
        <mesh
          name="PC_03003"
          castShadow
          receiveShadow
          geometry={nodes.PC_03003.geometry}
          material={materials.Texture}
          position={[1.895, 0, -1.944]}
          rotation={[0, -0.436, 0]}
          scale={[1.5, 1, 1.5]}
        />
        <mesh
          name="PC_03004"
          castShadow
          receiveShadow
          geometry={nodes.PC_03004.geometry}
          material={materials.Texture}
          position={[1.862, 1.61, -1.807]}
          rotation={[0, -Math.PI / 3, 0]}
        />
        <mesh
          name="PC_03005"
          castShadow
          receiveShadow
          geometry={nodes.PC_03005.geometry}
          material={materials.Texture}
          position={[3.954, 2.491, 1.607]}
          rotation={[0, -Math.PI / 3, 0]}
        />
        <mesh
          name="PC_03006"
          castShadow
          receiveShadow
          geometry={nodes.PC_03006.geometry}
          material={materials.Texture}
          position={[-1.095, 4.291, -4.434]}
          rotation={[0, 0.357, 0]}
        />
        <mesh
          name="PC_03007"
          castShadow
          receiveShadow
          geometry={nodes.PC_03007.geometry}
          material={materials.Texture}
          position={[-5.246, 4.291, -1.466]}
          rotation={[0, 1.246, 0]}
        />
        <mesh
          name="PC_03008"
          castShadow
          receiveShadow
          geometry={nodes.PC_03008.geometry}
          material={materials.Texture}
          position={[3.198, 4.291, -3.092]}
          rotation={[-Math.PI, 0.563, 0]}
          scale={-1}
        />
        <mesh
          name="Keyboard001"
          castShadow
          receiveShadow
          geometry={nodes.Keyboard001.geometry}
          material={materials.Texture}
          position={[0.165, 0.794, -1.972]}
          rotation={[-0.544, 0.929, -1.119]}
          scale={0.5}
        />
        <mesh
          name="Keyboard002"
          castShadow
          receiveShadow
          geometry={nodes.Keyboard002.geometry}
          material={materials.Texture}
          position={[-2.793, 0.27, 1.816]}
          rotation={[-1.44, 1.219, 1.432]}
          scale={0.5}
        />
        <mesh
          name="Keyboard003"
          castShadow
          receiveShadow
          geometry={nodes.Keyboard003.geometry}
          material={materials.Texture}
          position={[-5.603, 4.615, -0.027]}
          rotation={[-1.955, 0.163, 1.202]}
          scale={0.5}
        />
        <mesh
          name="Keyboard004"
          castShadow
          receiveShadow
          geometry={nodes.Keyboard004.geometry}
          material={materials.Texture}
          position={[2.621, 1.985, -2.473]}
          rotation={[-0.419, -0.704, -1.851]}
          scale={0.5}
        />
        <mesh
          name="Keyboard005"
          castShadow
          receiveShadow
          geometry={nodes.Keyboard005.geometry}
          material={materials.Texture}
          position={[4.598, 3.459, 1.19]}
          rotation={[-1.236, -0.719, 0.48]}
          scale={0.5}
        />
        <TextOverlay showText={showText} />
        <group name="Screen_A001" position={[-2.731, 0.629, -0.522]} rotation={[0, 1.087, 0]}>
          <mesh
            name="Cube018"
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials.Texture}
          />
          <mesh
            name="Cube018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_1.geometry}
            material={materials.MyWork}
            onPointerEnter={() => setShowText(3)}
            onPointerLeave={() => setShowText(0)}
            onClick={() => props.onScreenClick(navLinks[2])}
          />
        </group>
        <group name="Screen_B001" position={[-1.711, 3.015, -1.98]} rotation={[0, 1.002, 0]}>
          <mesh
            name="Cube014"
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials.Texture}
          />
          <mesh
            name="Cube014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={materials.About}
            onPointerEnter={() => setShowText(2)}
            onPointerLeave={() => setShowText(0)}
            onClick={() => props.onScreenClick(navLinks[1])}
          />
        </group>
        <group
          name="Screen_B002"
          position={[-3.417, 3.056, 1.303]}
          rotation={[0, 1.222, 0]}
          scale={0.9}>
          <mesh
            name="Cube037"
            castShadow
            receiveShadow
            geometry={nodes.Cube037.geometry}
            material={materials.Texture}
          />
          <mesh
            name="Cube037_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube037_1.geometry}
            material={materials.Screen}
          >
            <meshBasicMaterial map={error} toneMapped={false} />
          </mesh>
        </group>
        <group name="Screen_C001" position={[0.27, 1.529, -2.613]}>
          <mesh
            name="Cube009"
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials.Texture}
          />
          <mesh
            name="Cube009_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials.Screen}
          >
            <meshBasicMaterial map={error} toneMapped={false} />
          </mesh>
        </group>
        <group
          name="Screen_C002"
          position={[3.11, 2.145, -0.18]}
          rotation={[0, -0.793, 0]}
          scale={0.81}>
          <mesh
            name="Cube027"
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials.Texture}
          />
          <mesh
            name="Cube027_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials.Contact}
            onPointerEnter={() => setShowText(4)}
            onPointerLeave={() => setShowText(0)}
            onClick={() => props.onScreenClick(navLinks[3])}
          />
          {/* >
            <meshMatcapMaterial map={screenTxt} />
          </mesh> */}
        </group>
        <group name="Screen_D001" position={[1.845, 0.377, -1.771]} rotation={[0, -Math.PI / 9, 0]}>
          <mesh
            name="Cube023"
            castShadow
            receiveShadow
            geometry={nodes.Cube023.geometry}
            material={materials.Texture}
          />
          <mesh
            name="Cube023_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_1.geometry}
            material={materials.Screen}
          >
            <meshBasicMaterial map={error} toneMapped={false} />
          </mesh>
        </group>
        <group name="Screen_D002" position={[-3.899, 4.287, -2.642]} rotation={[0, 0.539, 0]}>
          <mesh
            name="Cube076"
            castShadow
            receiveShadow
            geometry={nodes.Cube076.geometry}
            material={materials.Texture}
          />
          <mesh
            name="Cube076_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube076_1.geometry}
            material={materials.Screen}
          >
            <meshBasicMaterial map={error} toneMapped={false} />
          </mesh>
        </group>
        <group
          name="Screen_D003"
          position={[0.992, 4.287, -4.209]}
          rotation={[Math.PI, -0.429, 0]}
          scale={-1}>
          <mesh
            name="Cube115"
            castShadow
            receiveShadow
            geometry={nodes.Cube115.geometry}
            material={materials.Texture}
          />
          <mesh
            name="Cube115_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube115_1.geometry}
            material={materials.Screen}
          >
            <meshBasicMaterial map={error} toneMapped={false} />
          </mesh>
        </group>
        <group name="Screen_D004" position={[4.683, 4.29, -1.558]} rotation={[0, -Math.PI / 3, 0]}>
          <mesh
            name="Cube116"
            castShadow
            receiveShadow
            geometry={nodes.Cube116.geometry}
            material={materials.Texture}
          />
          <mesh
            name="Cube116_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube116_1.geometry}
            material={materials.Screen}
          >
            <meshBasicMaterial map={error} toneMapped={false} />
          </mesh>
        </group>
        {/* <mesh
          name="Spline_About"
          castShadow
          receiveShadow
          geometry={nodes.Spline_About.geometry}
          material={nodes.Spline_About.material}
          position={[0, 5.538, 10.468]}
          rotation={[-0.01, 0.737, 0.016]}
          scale={6.532}
        />
        <mesh
          name="Spline_Contact"
          castShadow
          receiveShadow
          geometry={nodes.Spline_Contact.geometry}
          material={nodes.Spline_Contact.material}
          position={[0, 5.538, 10.468]}
          rotation={[-0.01, 0.737, 0.016]}
          scale={6.532}
        />
        <mesh
          name="Spline_Error1"
          castShadow
          receiveShadow
          geometry={nodes.Spline_Error1.geometry}
          material={nodes.Spline_Error1.material}
          position={[0, 5.538, 10.468]}
          rotation={[-0.01, 0.737, 0.016]}
          scale={6.532}
        />
        <mesh
          name="Spline_Work"
          castShadow
          receiveShadow
          geometry={nodes.Spline_Work.geometry}
          material={nodes.Spline_Work.material}
          position={[0, 5.538, 10.468]}
          rotation={[-0.01, 0.737, 0.016]}
          scale={6.532}
        /> */}
      </group>
    </group >
  )
}

useGLTF.preload('/OldComputersglb')