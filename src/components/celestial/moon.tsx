import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function Moon() {
  const moonRef = useRef<Mesh>(null!);
  const distance = 5;

  const [moonTexture] = useTexture(["/assets/moonMap.jpg"]);

  useFrame(({ clock }) => {
    moonRef.current.rotation.y += 0.003;
    moonRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.8) * distance;
    moonRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.8) * distance;
  });

  return (
    <mesh ref={moonRef} position={[distance, 0, 0]} castShadow receiveShadow>
      <sphereGeometry args={[0.27, 32, 32]} />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
}
