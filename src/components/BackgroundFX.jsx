import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useMemo, useRef } from 'react';

function Orbs() {
  const count = 120;
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const colors = useMemo(() => Array.from({ length: count }, () => new THREE.Color().setHSL(0.7 + Math.random() * 0.2, 0.8, 0.6)), [count]);

  const positions = useMemo(() =>
    Array.from({ length: count }, () => [
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 10,
    ]),
  [count]);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const [x0, y0, z0] = positions[i];
      const s = Math.sin(t * 0.6 + i) * 0.3 + 1.1;
      dummy.position.set(x0 + Math.sin(t + i) * 0.15 + mouse.x * 0.5, y0 + Math.cos(t * 0.8 + i) * 0.15 + mouse.y * 0.4, z0);
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
      const c = colors[i].clone().offsetHSL(0.0, 0, Math.sin(t + i) * 0.05);
      mesh.current.setColorAt(i, c);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.12, 16, 16]} />
      <meshStandardMaterial emissiveIntensity={1} emissive={new THREE.Color('#7c3aed')} color={new THREE.Color('#22d3ee')} roughness={0.4} metalness={0.1} />
    </instancedMesh>
  );
}

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas className="opacity-60" camera={{ position: [0, 0, 8], fov: 60 }}>
        <color attach="background" args={["#0a0a0b"]} />
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#a78bfa" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#22d3ee" />
        <Orbs />
      </Canvas>
    </div>
  );
}
