import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// Import planet textures
import mercuryTexture from "../textures/mercury.jpg";
import venusTexture from "../textures/venus.jpg";
import earthTexture from "../textures/earth.jpg";
import marsTexture from "../textures/mars.jpg";
import jupiterTexture from "../textures/jupiter.jpg";
import saturnTexture from "../textures/saturn.jpg";
import uranusTexture from "../textures/uranus.jpg";
import neptuneTexture from "../textures/neptune.jpg";
import sunTexture from "../textures/sun.jpg";

// List of planets with size, distance, and textures
const planets = [
  { name: "Mercury", size: 0.38, distance: 13, texture: mercuryTexture, speed: 0.2 },
  { name: "Venus", size: 0.95, distance: 17, texture: venusTexture, speed: 0.1 },
  { name: "Earth", size: 1, distance: 20, texture: earthTexture, speed: 0.07 },
  { name: "Mars", size: 0.53, distance: 26, texture: marsTexture, speed: 0.05 },
  { name: "Jupiter", size: 7, distance: 33, texture: jupiterTexture, speed: 0.08 },
  { name: "Saturn", size: 6, distance: 44, texture: saturnTexture, speed: 0.015 },
  { name: "Uranus", size: 4, distance: 60, texture: uranusTexture, speed: 0.01 },
  { name: "Neptune", size: 3.88, distance: 70, texture: neptuneTexture, speed: 0.007 },
];

const Planet = ({ size, distance, texture, speed }) => {
  const planetRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    planetRef.current.position.x = distance * Math.cos(t * speed);
    planetRef.current.position.z = distance * Math.sin(t * speed);
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial map={new THREE.TextureLoader().load(texture)} />
    </mesh>
  );
};

const SolarSystem = () => {
  return (
    <Canvas camera={{ position: [0, 50, 100], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 0]} intensity={2} />
      <Stars />

      {/* Sun */}
      <mesh>
        <sphereGeometry args={[10, 32, 32]} />
        <meshBasicMaterial   color="yellow"/>
      </mesh>

      {/* Planets */}
      {planets.map((planet, index) => (
        <Planet
          key={index}
          size={planet.size}
          distance={planet.distance}
          texture={planet.texture}
          speed={planet.speed}
        />
      ))}

      <OrbitControls />
    </Canvas>
  );
};

export default SolarSystem;
