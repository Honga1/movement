import { Vector2 } from "three";
import { PlayerActions } from "./PlayerActions";
import {
  vw,
  PlayerData,
  PeersistentData,
  IdleData,
  Transform,
  TouchingData,
} from "./PlayerData";

export class PlayerController {
  static readonly MAX_CIRCLE_RADIUS = 10 * vw;
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
    const {
      idleTarget,
      transform: { position },
      rotationDirection,
    } = playerData;

    const directionToTarget = objectToVector2(position)
      .clone()
      .sub(objectToVector2(idleTarget));
    const unitToTarget = directionToTarget.clone().normalize();

    const rotatedTarget = unitToTarget
      .clone()
      .rotateAround(
        new Vector2(0, 0),
        rotationDirection === "CLOCKWISE" ? -1 : 1
      )
      .multiplyScalar(this.MAX_CIRCLE_RADIUS)
      .add(objectToVector2(idleTarget));

    const directionToCircleTarget = rotatedTarget
      .clone()
      .sub(objectToVector2(position));
    const unitToCircleTarget = directionToCircleTarget.clone().normalize();

    const step = unitToCircleTarget
      .clone()
      .multiplyScalar(this.SPEED)
      .multiplyScalar(deltaTime);
    const nextPosition = step.clone().add(objectToVector2(position));

    const rotation = lerpTheta(
      playerData.transform.rotation,
      unitToCircleTarget.angle(),
      0.1
    );
    return { position: nextPosition, rotation };
  }
  private static updateTouching(
    playerData: PeersistentData & TouchingData,
    deltaTime: number
  ): Transform {
    const {
      touchPosition,
      transform: { position },
      rotationDirection,
    } = playerData;

    const directionToTarget = objectToVector2(position)
      .clone()
      .sub(objectToVector2(touchPosition));
    const unitToTarget = directionToTarget.clone().normalize();

    const rotatedTarget = unitToTarget
      .clone()
      .rotateAround(
        new Vector2(0, 0),
        rotationDirection === "CLOCKWISE" ? -1 : 1
      )
      .multiplyScalar(this.MAX_CIRCLE_RADIUS)
      .add(objectToVector2(touchPosition));

    const directionToCircleTarget = rotatedTarget
      .clone()
      .sub(objectToVector2(position));
    const unitToCircleTarget = directionToCircleTarget.clone().normalize();

    const step = unitToCircleTarget
      .clone()
      .multiplyScalar(this.SPEED)
      .multiplyScalar(deltaTime);
    const nextPosition = step.clone().add(objectToVector2(position));

    const rotation = lerpTheta(
      playerData.transform.rotation,
      unitToCircleTarget.angle(),
      0.2
    );
    return { position: nextPosition, rotation };
  }
}

const objectToVector2 = ({ x, y }: { x: number; y: number }) => {
  return new Vector2(x, y);
};

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
