import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { BoxGeometry, Mesh, MeshBasicMaterial, Vector3 } from "three";
import { TouchingData } from "./PlayerData";
const vw = window.innerWidth / 100;
export const TouchTarget = ({ data }: { data: TouchingData }) => {
  const ref = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>();

  useFrame(() => {
    if (!ref.current) return;
    const position = data.touchPosition;
    ref.current.position.copy(new Vector3(position.x, position.y, 0));
  });
  return (
    <mesh ref={ref} name="touchTarget" scale={[1 * vw, 1 * vw, 1]}>
      <boxGeometry />
      <meshBasicMaterial color="pink" />
    </mesh>
  );
};
