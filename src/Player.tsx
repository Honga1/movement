import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Mesh, Vector3 } from "three";
import { PlayerData } from "./PlayerData";
import { Html } from "drei";
const vw = window.innerWidth / 100;
export const Player = ({ data }: { data: PlayerData }) => {
  const ref = useRef<Mesh>();

  const html = useRef<HTMLDivElement>();

  useFrame((context, deltaTime) => {
    if (!ref.current) return;
    const position = data.transform.position;
    const rotation = data.transform.rotation;
    ref.current.position.copy(new Vector3(position.x, position.y, 0));
    ref.current.rotation.set(0, 0, rotation);

    if (html.current) {
      html.current.innerHTML = data.state;
    }
  });

  return (
    <mesh
      ref={ref}
      name="player"
      scale={[5 * vw, 5 * vw, 1]}
      position={[0, 0, 0]}
    >
      <boxGeometry />
      <meshBasicMaterial color="green" />
      <mesh position={[0.5, 0, 0]} scale={[0.2, 0.2, 0.2]}>
        <boxGeometry />
        <meshBasicMaterial color="green" />
      </mesh>
      <Html style={{ color: "white" }} ref={html}></Html>
    </mesh>
  );
};
