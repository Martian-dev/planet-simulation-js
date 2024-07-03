import { Stars } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Points } from "three";

export default function AnimatedStars() {
  const starsRef = useRef<Points>(null!);

  useFrame(() => {
    starsRef.current.rotation.x += 0.0001;
    starsRef.current.rotation.y += 0.0001;
    starsRef.current.rotation.z += 0.0001;
  });

  return <Stars radius={200} ref={starsRef} />;
}
