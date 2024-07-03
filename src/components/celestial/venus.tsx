import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, memo, useCallback } from "react";
import { Clock, Group, Mesh } from "three";

function Venusx() {
  const venusRef = useRef<Mesh>(null!);
  const venusGroupRef = useRef<Group>(null!);
  const clockRef = useRef<Clock>(new Clock());
  const distance = 26;

  const [venusTexture] = useTexture(["/assets/venusMap.jpg"]);
  const updatePos = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * -0.05;
    // venus's axial rotation
    venusRef.current.rotation.y += 0.01;
    // revolution around sun
    venusGroupRef.current.position.x = Math.sin(angle) * distance;
    venusGroupRef.current.position.z = Math.cos(angle) * distance;
  }, []);

  useFrame(() => {
    updatePos();
  });

  return (
    <group position={[0, 0, distance]} ref={venusGroupRef}>
      <mesh ref={venusRef} castShadow receiveShadow>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial shininess={100} map={venusTexture} />
      </mesh>
    </group>
  );
}

const Venus = memo(Venusx);
export default Venus;
