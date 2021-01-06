import { V2 } from "./v2";

export interface Transform {
  readonly position: V2;
  rotation: number;
}

export interface IdleData {
  state: "IDLE";
  readonly idleTarget: V2;
}
export type TouchingData = {
  state: "TOUCHING";
  readonly touchPosition: V2;
};
export type PeersistentData = {
  id: string;
  transform: Transform;
  rotationDirection: "CLOCKWISE" | "ANTICLOCKWISE";
};
export type StateDependentData = IdleData | TouchingData;
export type PlayerData = PeersistentData & StateDependentData;
