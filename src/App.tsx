import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedStars from "components/animatedstars";
import Sun from "components/celestial/sun";
import Planet from "components/celestial/planet";
// import Mercury from "components/celestial/mercury";
// import Venus from "components/celestial/venus";
// import Earth from "components/celestial/earth";
// import Mars from "components/celestial/mars";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import CameraPosLog from "helpers/camera-pos";
// import { Perf } from "r3f-perf";

const planets: {
  name: string;
  distance: number;
  radius: number;
  spinTimePeriod: number;
  timerPeriod: number;
  textureMap: string;
}[] = [
  {
    name: "Mercury",
    distance: 20,
    radius: 1,
    spinTimePeriod: 59,
    timerPeriod: 88,
    textureMap: "/assets/mercuryMap.jpg",
  },
  {
    name: "Venus",
    distance: 40,
    radius: 2,
    spinTimePeriod: -243,
    timerPeriod: -225,
    textureMap: "/assets/venusMap.jpg",
  },
  {
    name: "Earth",
    distance: 60,
    radius: 2,
    spinTimePeriod: 1,
    timerPeriod: 365.25,
    textureMap: "/assets/earthMap.jpg",
  },
  {
    name: "Mars",
    distance: 80,
    radius: 1.7,
    spinTimePeriod: 1,
    timerPeriod: 687,
    textureMap: "/assets/marsMap.jpg",
  },
  {
    name: "Jupiter",
    distance: 120,
    radius: 3,
    spinTimePeriod: 1,
    timerPeriod: 4330.6,
    textureMap: "/assets/jupiterMap.jpg",
  },
  {
    name: "Saturn",
    distance: 140,
    radius: 2.7,
    spinTimePeriod: 1,
    timerPeriod: 10755.7,
    textureMap: "/assets/saturnMap.jpg",
  },
  {
    name: "Uranus",
    distance: 160,
    radius: 2.5,
    spinTimePeriod: 1,
    timerPeriod: 30687,
    textureMap: "/assets/uranusMap.jpg",
  },
  {
    name: "Neptune",
    distance: 180,
    radius: 2.4,
    spinTimePeriod: 1,
    timerPeriod: 60266.25,
    textureMap: "/assets/neptuneMap.jpg",
  },
];

function App() {
  return (
    <Canvas shadows camera={{ position: [60, 30, 60] }}>
      <color attach={"background"} args={[0, 0, 0]} />
      <EffectComposer>
        <Bloom intensity={1.2} mipmapBlur luminanceThreshold={1} />
      </EffectComposer>
      <OrbitControls />
      <AnimatedStars />
      <ambientLight intensity={0.3} />
      <Sun />
      {planets.map((planet, key) => (
        <Planet
          distance={planet.distance}
          radius={planet.radius}
          spinTimePeriod={planet.spinTimePeriod}
          timeperiod={planet.timerPeriod}
          timescale={1}
          textureMap={planet.textureMap}
          key={key}
        />
      ))}
      {/*
      <Mercury />
      <Venus />
      <Earth />
      <Mars />
      */}
      {/* <Perf /> */}
      <CameraPosLog event="mousedown" />
    </Canvas>
  );
}

export default App;
