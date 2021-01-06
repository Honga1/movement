import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { PlayerData } from "../common/PlayerData";
import { box } from "./geometry";
import { pink } from "./materials";
const vw = window.innerWidth / 100;
export const TouchTarget = ({ data }: { data: PlayerData }) => {
  const ref = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>();

  useFrame(() => {
    if (!ref.current) return;
    if (data.state !== "TOUCHING") {
      ref.current.visible = false;
      return;
    }

    ref.current.visible = true;

    const position = data.touchPosition;
    ref.current.position.set(...position, 0);
  });
  return (
    <mesh
      ref={ref}
      name="touchTarget"
      scale={[1 * vw, 1 * vw, 1]}
      material={pink}
      geometry={box}
    ></mesh>
  );
};
