"use client";

import { Canvas } from "@react-three/fiber";
import { SodaCan } from "./SodaCan";
import { Environment, Float } from "@react-three/drei";
import { Suspense } from "react";
// import lobbyHdr from "../../public/";

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
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      camera={{
        fov: 30,
      }}
    >
      <Float
        speed={1}
        rotationIntensity={7}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        <SodaCan />
      </Float>
      <Suspense fallback={null}>
        <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
      </Suspense>
    </Canvas>
  );
}
