import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useCallback, useRef } from "react";
import { Clock, Mesh } from "three";

function Moonx() {
  const moonRef = useRef<Mesh>(null!);
  const clockRef = useRef<Clock>(new Clock());
  const distance = 5;

  const [moonTexture] = useTexture(["/assets/moonMap.jpg"]);
  const updatePos = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.8;
    moonRef.current.rotation.y += 0.003;
    moonRef.current.position.x = Math.sin(angle) * distance;
    moonRef.current.position.z = Math.cos(angle) * distance;
  }, []);

  useFrame(() => {
    updatePos();
  });

  return (
    <mesh ref={moonRef} position={[distance, 0, 0]} castShadow receiveShadow>
      <sphereGeometry args={[0.27, 32, 32]} />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
}

const Moon = memo(Moonx);
export default Moon;
