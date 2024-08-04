import * as THREE from "three";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

const url = "/Ream_Tile_Housing6.gltf";

type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Object3D };
  materials: { [key: string]: THREE.Material };
};

const renderNode = (node: THREE.Object3D) => {
  if ((node as THREE.Mesh).isMesh) {
    const mesh = node as THREE.Mesh;
    return (
      <mesh
        key={mesh.uuid}
        geometry={mesh.geometry}
        material={mesh.material}
        position={mesh.position}
        rotation={mesh.rotation}
        scale={mesh.scale}
      />
    );
  }

  if (node.children && node.children.length > 0) {
    return (
      <group
        key={node.uuid}
        position={node.position}
        rotation={node.rotation}
        scale={node.scale}
      >
        {node.children.map((child) => renderNode(child))}
      </group>
    );
  }

  return null;
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(url) as GLTFResult;

  // Log the loaded data to inspect its structure
  //   console.log('Loaded GLTF:', { nodes, materials });

  // Find all nodes that are children
  const childNodeUUIDs = new Set();
  Object.values(nodes).forEach((node) => {
    node.children?.forEach((child) => {
      childNodeUUIDs.add(child.uuid);
    });
  });

  // Root nodes are those not listed as children of any other node
  const rootNodes = Object.values(nodes).filter(
    (node) => !childNodeUUIDs.has(node.uuid)
  );

  if (rootNodes.length === 0) {
    console.error("No root nodes found in the GLTF file.");
    return null; // Or return some fallback UI
  }

  return (
    <group {...props} dispose={null} rotation={[0.22, Math.PI, Math.PI ]}>
      {" "}
      {/* Rotate 180 degrees around the Y-axis */}
      {rootNodes.map((node) => renderNode(node))}
    </group>
  );
}

useGLTF.preload(url);



  