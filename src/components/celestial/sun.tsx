import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Sun() {
  const sunRef = useRef<Mesh>(null!);

  const [sunTexture] = useTexture(["/assets/sunMap.jpg"]);

  useFrame(() => {
    sunRef.current.rotation.y -= 0.001;
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[6, 32, 32]} />
      <meshPhongMaterial
        map={sunTexture}
        emissiveMap={sunTexture}
        emissiveIntensity={2}
        emissive={0xffffff}
      />
      <pointLight castShadow decay={0.0001} intensity={5} />
    </mesh>
  );
}
