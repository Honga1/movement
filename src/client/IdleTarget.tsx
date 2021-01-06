import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { BoxGeometry, Mesh, MeshBasicMaterial, Vector3 } from "three";
import { PlayerData } from "../common/PlayerData";
import { box } from "./geometry";
import { blue } from "./materials";
const vw = window.innerWidth / 100;
export const IdleTarget = ({ data }: { data: PlayerData }) => {
  const ref = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>();

  useFrame(() => {
    if (!ref.current) return;
    if (data.state !== "IDLE") {
      ref.current.visible = false;
      return;
    }
    ref.current.visible = true;
    const position = data.idleTarget;
    ref.current.position.set(...position, 0);
  });
  return (
    <mesh
      ref={ref}
      name="idleTarget"
      scale={[1 * vw, 1 * vw, 1]}
      material={blue}
      geometry={box}
    ></mesh>
  );
};
