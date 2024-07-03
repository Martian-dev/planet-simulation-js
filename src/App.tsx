import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedStars from "components/animatedstars";
import Earth from "components/celestial/earth";
import Sun from "components/celestial/sun";
import Mercury from "components/celestial/mercury";
import Venus from "components/celestial/venus";
import Mars from "components/celestial/mars";
// import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas shadows camera={{ position: [60, 30, 60] }}>
      <color attach={"background"} args={[0, 0, 0]} />
      <OrbitControls />
      <AnimatedStars />
      <ambientLight intensity={0.5} />
      <Sun />
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      {/* <Perf /> */}
    </Canvas>
  );
}

export default App;
