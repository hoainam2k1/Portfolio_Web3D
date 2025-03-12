"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Computers = React.memo(function Computers(props) {
  const { nodes, materials } = useGLTF('/models/combine_synth.glb')
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.007;
  });
  return (
    <group {...props}
      dispose={null}
      ref={modelRef}
      scale={[1.3, 1.3, 1.3]}
      rotation={[0.4, -1, 0]}
      position={[0, 0, 0]}>
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.e_st_d}
        skeleton={nodes.Object_7.skeleton}
      />
    </group>
  )
});

export default Computers;
useGLTF.preload("/models/combine_synth.glb");

