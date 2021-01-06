import { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { BoxGeometry, Mesh, MeshBasicMaterial, Vector3 } from "three";
import { IdleData } from "./PlayerData";
const vw = window.innerWidth / 100;
export const IdleTarget = ({ data }: { data: IdleData }) => {
  const idleTarget = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>();

  useFrame(() => {
    if (!idleTarget.current) return;
    const position = data.idleTarget;

    idleTarget.current.position.copy(new Vector3(position.x, position.y, 0));
  });
  return (
    <mesh ref={idleTarget} name="idleTarget" scale={[1 * vw, 1 * vw, 1]}>
      <boxGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};
