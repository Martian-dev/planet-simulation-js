import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group, Mesh } from "three";
import Moon from "components/celestial/moon";

export default function Earth() {
  const earthRef = useRef<Mesh>(null!);
  const earthGroupRef = useRef<Group>(null!);
  const distance = 20;

  const [earthTexture] = useTexture(["/assets/earthMap.jpg"]);

  useFrame(({ clock }) => {
    // earth's axial rotation
    earthRef.current.rotation.y += 0.05;
    // revolution around sun
    earthGroupRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.04) * distance;
    earthGroupRef.current.position.z = Math.cos(clock.getElapsedTime() * 0.04) * distance;
  });

  return (
    <group position={[0, 0, distance]} ref={earthGroupRef}>
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial shininess={100} map={earthTexture} />
      </mesh>
      <Moon />
    </group>
  );
}
