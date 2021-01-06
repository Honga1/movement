export interface Transform {
  position: { x: number; y: number };
  rotation: number;
}
export const vw = window.innerWidth / 100;
export interface IdleData {
  state: "IDLE";
  idleTarget: { x: number; y: number };
}
export type TouchingData = {
  state: "TOUCHING";
  touchPosition: { x: number; y: number };
};
export type PeersistentData = {
  id: string;
  transform: Transform;
  rotationDirection: "CLOCKWISE" | "ANTICLOCKWISE";
};
type StateDependentData = IdleData | TouchingData;
export type PlayerData = PeersistentData & StateDependentData;
