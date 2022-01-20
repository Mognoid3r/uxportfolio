import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from '../HomeBackground/Earth/index'
import Moon from '../HomeBackground/MoonSurface/index'
import Sky from '../../assets/Images/sky.jpg'
import { Center } from "@react-three/drei";
// import Header from '../../components/Header/index'


const CanvasContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: black;
  // background-image: url('../../assets/Images/sky.jpg');
`;

export default function HomeBackgroundMain() {
  return <CanvasContainer>
    {/* <img src={Sky} style={{ width: '100%', backgroundPosition: Center, backgroundSize: 'cover', zIndex: '-1'}} alt="sky" /> */}
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
      <Moon />
  </CanvasContainer>;
}