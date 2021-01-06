import { PlayerActions } from "../common/PlayerActions";
import {
  IdleData,
  PeersistentData,
  PlayerData,
  TouchingData,
  Transform,
} from "../common/PlayerData";
import { V2, V2O } from "../common/v2";

export class PlayerController {
  static readonly MAX_CIRCLE_RADIUS = 100;
  static readonly MIN_CIRCLE_RADIUS = 5;
  static readonly SPEED = 100;

  static reduceAction(
    action: PlayerActions,
    playerData: PlayerData
  ): PlayerData {
    switch (action.type) {
      case "TOUCH_DOWN": {
        switch (playerData.state) {
          case "IDLE":
            return {
              id: playerData.id,
              transform: playerData.transform,
              rotationDirection: playerData.rotationDirection,
              state: "TOUCHING",
              touchPosition: action.position,
            };

          case "TOUCHING":
            return {
              id: playerData.id,
              transform: playerData.transform,
              rotationDirection: playerData.rotationDirection,
              state: "TOUCHING",
              touchPosition: action.position,
            };
        }
        break;
      }

      case "TOUCH_UP":
        switch (playerData.state) {
          case "IDLE":
            return {
              id: playerData.id,
              transform: playerData.transform,
              rotationDirection: playerData.rotationDirection,
              state: "IDLE",
              idleTarget: action.position,
            };
          case "TOUCHING": {
            return {
              id: playerData.id,
              transform: playerData.transform,
              rotationDirection: playerData.rotationDirection,
              state: "IDLE",
              idleTarget: action.position,
            };
          }
        }
        break;

      case "TOUCH_MOVE": {
        switch (playerData.state) {
          case "IDLE":
            return {
              id: playerData.id,
              transform: playerData.transform,
              rotationDirection: playerData.rotationDirection,
              state: "TOUCHING",
              touchPosition: action.position,
            };

          case "TOUCHING":
            return {
              id: playerData.id,
              transform: playerData.transform,
              rotationDirection: playerData.rotationDirection,
              state: "TOUCHING",
              touchPosition: action.position,
            };
        }
        break;
      }
    }
  }

  static updateTransform(playerData: PlayerData, deltaTime: number): Transform {
    switch (playerData.state) {
      case "IDLE":
        return this.updateIdle(playerData, deltaTime);
      case "TOUCHING":
        return this.updateTouching(playerData, deltaTime);
    }
  }

  private static updateIdle(
    playerData: PeersistentData & IdleData,
    deltaTime: number
  ): Transform {
    const { position, rotation } = PlayerController.rotateAround(
      playerData,
      playerData.idleTarget,
      deltaTime
    );

    return { position, rotation };
  }

  private static rotateAround(
    playerData: PlayerData,
    target: V2,
    deltaTime: number
  ): Transform {
    const {
      transform: { position },
      rotationDirection,
    } = playerData;
    const directionToTarget = V2O.subtract(position, target);
    const unitToTarget = V2O.normalise(directionToTarget);

    const rotatedUnit = V2O.rotate(
      unitToTarget,
      rotationDirection === "CLOCKWISE" ? -1 : 1
    );
    const scaledUnit = V2O.scale(rotatedUnit, this.MAX_CIRCLE_RADIUS);
    const rotatedTarget = V2O.add(target, scaledUnit);

    const directionToCircleTarget = V2O.subtract(rotatedTarget, position);
    const unitToCircleTarget = V2O.normalise(directionToCircleTarget);

    const step = V2O.scale(unitToCircleTarget, this.SPEED * deltaTime);
    const nextPosition = V2O.add(step, position);

    const rotation = lerpTheta(
      playerData.transform.rotation,
      V2O.angle(unitToCircleTarget),
      0.1
    );

    return { position: nextPosition, rotation };
  }

  private static updateTouching(
    playerData: PeersistentData & TouchingData,
    deltaTime: number
  ): Transform {
    const { position, rotation } = PlayerController.rotateAround(
      playerData,
      playerData.touchPosition,
      deltaTime
    );

    return { position, rotation };
  }
}

function lerp(from: number, to: number, amount: number): number {
  amount = amount < 0 ? 0 : amount;
  amount = amount > 1 ? 1 : amount;
  return from + (to - from) * amount;
}

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(min, value), max);

function lerpTheta(
  from: number,
  to: number,
  amount: number,
  circleAt: number = Math.PI * 2
) {
  const removeLoops = (distance: number) =>
    clamp(distance - Math.floor(distance / circleAt) * circleAt, 0, circleAt);

  const distance = to - from;
  const unloopedDistance = removeLoops(distance);
  const isLeft = unloopedDistance > Math.PI;
  const offset = isLeft ? unloopedDistance - Math.PI * 2 : unloopedDistance;
  return lerp(from, from + offset, amount);
}
