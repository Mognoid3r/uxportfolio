import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from '../EarthTextures/2k_earth_daymap.jpg'
import EarthClouds from "../EarthTextures/2k_earth_clouds.jpg";
// import EarthNightMap from "../EarthTextures/2k_earth_nightmap.jpg";
import EarthNormal from "../EarthTextures/2k_earth_normal_map.jpg";
import EarthSpecular from "../EarthTextures/2k_earth_specular_map.jpg";



import { TextureLoader } from "three";

export default function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormal, EarthSpecular, EarthClouds]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 20;
    cloudsRef.current.rotation.y = elapsedTime / 25;
  });

  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0.5}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[.7, -.3, 3]}>
        <sphereGeometry args={[0.598, 32, 32]} />
        <meshPhongMaterial
          map={cloudMap}
          opacity={0.4}
          depthWrite={false}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[.7, -.3, 3]}>
        <sphereGeometry args={[0.594, 30, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.8}
        />
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
}