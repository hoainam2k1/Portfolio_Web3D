"use client";

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";
const Scarab = React.memo(function Scarab(props) {
    const { nodes, materials } = useGLTF('/models/banished_scarab.glb')
    const modelRef = useRef();
    useFrame((state) => {
        modelRef.current.position.y =
            -1 + Math.sin(state.clock.elapsedTime) * 0.2;
    });
    return (
        <group {...props}
            dispose={null}
            ref={modelRef}
            position={[0, -1, 0]}
            scale={[0.15, 0.15, 0.15]}
            rotation={[0.25, 0, 0]}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
                geometry={nodes.Object_7.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_7.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_9.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_9.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_11.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_11.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_13.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_13.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_15.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_15.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_17.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_17.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_19.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_19.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_21.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_21.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_23.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_23.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_25.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_25.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_27.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_27.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_29.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_29.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_31.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_31.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_33.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_33.skeleton}
            />
            <skinnedMesh
                geometry={nodes.Object_35.geometry}
                material={materials.Scarab}
                skeleton={nodes.Object_35.skeleton}
            />
        </group>
    )
});

export default Scarab;
useGLTF.preload('/models/banished_scarab.glb')
