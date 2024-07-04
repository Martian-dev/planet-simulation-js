import { Camera, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function CameraPosLog({ event }: { event: string }) {
  const { camera } = useThree();
  const cameraRef = useRef<Camera>(camera);

  useEffect(() => {
    const logCameraPos = () => {
      const { x, y, z } = cameraRef.current.position;
      console.log(`Camera position: x: ${x}, y: ${y}, z: ${z}`);
    };

    cameraRef.current = camera;
    window.addEventListener(event, logCameraPos);

    return () => {
      window.removeEventListener(event, logCameraPos);
    };
  });

  return null;
}
