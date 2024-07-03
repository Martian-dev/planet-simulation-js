import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useCallback, useRef } from "react";
import { Clock, Group, Mesh } from "three";

function Marsx() {
  const marsRef = useRef<Mesh>(null!);
  const marsGroupRef = useRef<Group>(null!);
  const clockRef = useRef<Clock>(new Clock());
  const distance = 52;

  const [marsTexture] = useTexture(["/assets/marsMap.jpg"]);
  const updatePos = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.03;
    // mars's axial rotation
    marsRef.current.rotation.y += 0.01;
    // revolution around sun
    marsGroupRef.current.position.x = Math.sin(angle) * distance;
    marsGroupRef.current.position.z = Math.cos(angle) * distance;
  }, []);

  useFrame(() => {
    updatePos();
  });

  return (
    <group position={[0, 0, distance]} ref={marsGroupRef}>
      <mesh ref={marsRef} castShadow receiveShadow>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhongMaterial shininess={100} map={marsTexture} />
      </mesh>
    </group>
  );
}

const Mars = memo(Marsx);
export default Mars;
