import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stage, PerspectiveCamera } from "@react-three/drei";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import * as THREE from "three";

const objURL = "/REAM_PCB_2.obj";
const mtlURL = "/REAM_PCB_2.mtl";

// ReamPCB component
const ReamPCB: React.FC<{ objUrl: string; mtlUrl: string }> = ({
  objUrl,
  mtlUrl,
}) => {
  // Load MTL file
  const materials = useLoader(MTLLoader, mtlUrl);

  // Load OBJ file and associate it with the loaded materials
  const obj = useLoader(OBJLoader, objUrl, (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={obj} scale={[0.5, 0.5, 0.5]} />;
};

export default function PCB() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ fov: 10 }}
      style={{ flex: 1, minHeight: "300px", background: "transparent" }}
    >
      {/* <PerspectiveCamera makeDefault zoom={0.8} /> */}
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={7} environment="city" scale={0.01}>
          {/* <pointLight position={[0, 0, 0]} /> */}
          <ReamPCB objUrl={objURL} mtlUrl={mtlURL} />
        </Stage>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
