'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AbstractShape() {
  const groupRef = useRef<THREE.Group>(null);
  const shapes = [
    {
      geometry: new THREE.IcosahedronGeometry(1.5, 0),
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      color: '#4F46E5',
    },
    {
      geometry: new THREE.OctahedronGeometry(1.2, 0),
      position: [3, 2, -2],
      rotation: [0, 0, 0],
      color: '#7C3AED',
    },
    {
      geometry: new THREE.TetrahedronGeometry(1.3, 0),
      position: [-3, -2, -1],
      rotation: [0, 0, 0],
      color: '#EC4899',
    },
  ];

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {shapes.map((shape, index) => (
        <mesh
          key={index}
          geometry={shape.geometry}
          position={shape.position as [number, number, number]}
          rotation={shape.rotation as [number, number, number]}
        >
          <meshStandardMaterial
            color={shape.color}
            metalness={0.8}
            roughness={0.2}
            wireframe={true}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function AbstractBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'linear-gradient(to bottom, #0F172A, #1E293B)' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AbstractShape />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
} 