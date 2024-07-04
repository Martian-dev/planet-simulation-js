import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, memo, useCallback } from "react";
import { Clock, Group, Mesh } from "three";

function Planetx({
  distance,
  radius,
  spinTimePeriod,
  timeperiod,
  timescale,
  textureMap,
}: {
  distance: number;
  radius: number;
  spinTimePeriod: number;
  timeperiod: number;
  timescale: number;
  textureMap: string;
}) {
  const planetRef = useRef<Mesh>(null!);
  const planetGroupRef = useRef<Group>(null!);
  const clockRef = useRef<Clock>(new Clock());

  const [planetTexture] = useTexture([textureMap]);
  const updatePos = useCallback(() => {
    const angularVel = (360 / timeperiod) * timescale;
    const angle = clockRef.current.getElapsedTime() * angularVel;
    // planet's axial rotation
    planetRef.current.rotation.y += (2 * Math.PI * spinTimePeriod) / 60;
    // revolution around sun
    planetGroupRef.current.position.x = Math.sin(angle) * distance;
    planetGroupRef.current.position.z = Math.cos(angle) * distance;
  }, []);

  useFrame(() => {
    updatePos();
  });

  return (
    <group position={[0, 0, distance]} ref={planetGroupRef}>
      <mesh ref={planetRef} castShadow receiveShadow>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshPhongMaterial shininess={100} map={planetTexture} />
      </mesh>
    </group>
  );
}

const Planet = memo(Planetx);
export default Planet;
