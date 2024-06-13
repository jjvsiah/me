import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/cute_desktop/scene.gltf");

  return (
    <mesh>
      {/* Enhanced ambient lighting for overall brightness */}
      <ambientLight intensity={0.4} />
      {/* Hemisphere light for soft light from above */}
      <hemisphereLight skyColor={"#ffffff"} groundColor="#b1e1ff" intensity={0.5} />
      {/* Directional light for more dynamic shading and highlights */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, 5, 10]} intensity={1} />  // Adjusted for better frontal lighting
      <primitive
        object={computer.scene}
        scale={isMobile ? 2.4 : 2.5} // Increased scale for better visibility
        position={isMobile ? [0, -1.5, -1.2] : [0, -1, -1]}
        rotation={[-0.01, -0.2, 0]} // Adjust rotation if necessary
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryHeight = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryHeight);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryHeight);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          autoRotateSpeed={1.5} // Enable and adjust auto-rotation speed
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
