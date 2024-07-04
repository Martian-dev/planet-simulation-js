import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedStars from "components/animatedstars";
import Earth from "components/celestial/earth";
import Sun from "components/celestial/sun";
// import Planet from "components/celestial/planet";
import Mercury from "components/celestial/mercury";
import Venus from "components/celestial/venus";
import Mars from "components/celestial/mars";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CameraPosLog from "helpers/camera-pos";
// import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas shadows camera={{ position: [60, 30, 60] }}>
      <color attach={"background"} args={[0, 0, 0]} />
      <EffectComposer>
        <Bloom intensity={1.3} mipmapBlur luminanceThreshold={1} />
      </EffectComposer>
      <OrbitControls />
      <AnimatedStars />
      <ambientLight intensity={0.3} />
      <Sun />
      {/*
      <Planet
        distance={20}
        radius={1}
        spinTimePeriod={1}
        timeperiod={365.25}
        timescale={1}
        textureMap="/assets/earthMap.jpg"
      />
      */}
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      {/* <Perf /> */}
      <CameraPosLog event="mousedown" />
    </Canvas>
  );
}

export default App;
