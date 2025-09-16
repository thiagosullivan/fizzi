"use client";

import { Canvas } from "@react-three/fiber";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type Props = {};

export default function ViewCanvas({}: Props) {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
    >
      <mesh rotation={[0.5, 0.5, 0]} position={[1, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
      <ambientLight intensity={2} />
      <spotLight intensity={3} position={[1, 1, 1]} />
    </Canvas>
  );
}
