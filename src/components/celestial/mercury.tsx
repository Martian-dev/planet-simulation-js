import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { memo, useCallback, useRef } from "react";
import { Clock, Group, Mesh } from "three";

function Mercuryx() {
  const mercuryRef = useRef<Mesh>(null!);
  const mercuryGroupRef = useRef<Group>(null!);
  const clockRef = useRef<Clock>(new Clock());
  const distance = 12;

  const [mercuryTexture] = useTexture(["/assets/mercuryMap.jpg"]);
  const updatePos = useCallback(() => {
    const angle = clockRef.current.getElapsedTime() * 0.35;
    // mercury's axial rotation
    mercuryRef.current.rotation.y += 0.006;
    // revolution around sun
    mercuryGroupRef.current.position.x = Math.sin(angle) * distance;
    mercuryGroupRef.current.position.z = Math.cos(angle) * distance;
  }, []);

  useFrame(() => {
    updatePos();
  });

  return (
    <group position={[0, 0, distance]} ref={mercuryGroupRef}>
      <mesh ref={mercuryRef} castShadow receiveShadow>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhongMaterial shininess={100} map={mercuryTexture} />
      </mesh>
    </group>
  );
}

const Mercury = memo(Mercuryx);
export default Mercury;
