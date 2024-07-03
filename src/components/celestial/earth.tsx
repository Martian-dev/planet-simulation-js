import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useCallback, useRef } from "react";
import { Clock, Group, Mesh } from "three";
import Moon from "components/celestial/moon";

function Earthx() {
  const earthRef = useRef<Mesh>(null!);
  const earthGroupRef = useRef<Group>(null!);
  const clockRef = useRef<Clock>(new Clock());
  const distance = 40;

  const [earthTexture] = useTexture(["/assets/earthMap.jpg"]);
  const updatePos = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.04;
    // earth's axial rotation
    earthRef.current.rotation.y += 0.05;
    // revolution around sun
    earthGroupRef.current.position.x = Math.sin(angle) * distance;
    earthGroupRef.current.position.z = Math.cos(angle) * distance;
  }, []);

  useFrame(() => {
    updatePos();
  });

  return (
    <group position={[0, 0, distance]} ref={earthGroupRef}>
      <mesh ref={earthRef} castShadow receiveShadow>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial shininess={100} map={earthTexture} />
      </mesh>
      <Moon />
    </group>
  );
}

const Earth = memo(Earthx);
export default Earth;
