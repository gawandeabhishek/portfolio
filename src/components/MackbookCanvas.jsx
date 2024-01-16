import { Suspense, useState } from "react";
import Macbook from "../models/macbook";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

const MackbookCanvas = () => {
  const [isRotating, setIsRotating] = useState(false);
  const adjustMacbookForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, -50];
    let rotation = [0.4, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [100, 100, 100];
    } else {
      screenScale = [95, 95, 115];
    }

    return [screenScale, screenPosition, rotation];
  };

  const [macbookScale, macbookPosition, macbookRotation] =
    adjustMacbookForScreenSize();
  return (
    <Canvas
      className={`bg-transparent ${
        isRotating ? "cursor-grabbing" : "cursor-grab"
      }`}
      camera={{ near: 1, far: 1000 }}
    >
      <Suspense fallback={<Loader />}>
        <directionalLight position={[100, 10, 10]} intensity={20} />
        <ambientLight intensity={0.5} />
        <pointLight />
        <spotLight position={[100, 10, 0]} />
        <hemisphereLight />
        <Macbook
          position={macbookPosition}
          scale={macbookScale}
          rotation={macbookRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
        />
      </Suspense>
    </Canvas>
  );
};

export default MackbookCanvas;
