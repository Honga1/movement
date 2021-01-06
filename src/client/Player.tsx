import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Mesh } from "three";
import { PlayerData } from "../common/PlayerData";
import { box } from "./geometry";
import { green } from "./materials";
const vw = window.innerWidth / 100;
export const Player = ({ data }: { data: PlayerData }) => {
  const ref = useRef<Mesh>();

  useFrame((context, deltaTime) => {
    if (!ref.current) return;

    const position = data.transform.position;
    const rotation = data.transform.rotation;
    ref.current.position.set(...position, 0);
    ref.current.rotation.set(0, 0, rotation);
  });

  return (
    <mesh
      ref={ref}
      name="player"
      scale={[5 * vw, 5 * vw, 1]}
      position={[0, 0, 0]}
      material={green}
      geometry={box}
    >
      <mesh
        position={[0.5, 0, 0]}
        scale={[0.2, 0.2, 0.2]}
        material={green}
        geometry={box}
      ></mesh>
    </mesh>
  );
};
