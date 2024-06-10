import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedStars from "components/animatedstars";
import Earth from "components/celestial/earth";
import Sun from "components/celestial/sun";

function App() {

  return (
    <Canvas shadows camera={{ position: [25, 15, 25] }}>
      <color attach={"background"} args={[0, 0, 0]} />
      <OrbitControls />
      <AnimatedStars />
      <ambientLight intensity={0.25} />
      <Sun />
      <Earth />
    </Canvas>
  );
}

export default App;
