import { PlayerActions } from "../common/PlayerActions";
import { PlayerController } from "./PlayerController";
import { PlayerData } from "../common/PlayerData";

export class WorldController {
  static update(
    players: PlayerData[],
    actionsQueue: PlayerActions[],
    deltaTime: number
  ) {
    const actionsThisFrame = [...actionsQueue];
    actionsQueue.length = 0;

    actionsThisFrame.forEach((action) => {
      const maybePlayer = players.find((player) => player.id === action.id);

      if (maybePlayer !== undefined) {
        const nextData = PlayerController.reduceAction(action, maybePlayer);
        Object.assign(maybePlayer, nextData);
      } else {
        WorldController.addPlayerWithAction(action, players);
      }
    });

    players.forEach((player) => {
      const transform = PlayerController.updateTransform(player, deltaTime);

      player.transform = transform;
    });
  }

  private static addPlayerWithAction(
    action: PlayerActions,
    players: PlayerData[]
  ) {
    switch (action.type) {
      case "TOUCH_DOWN":
        players.push({
          id: action.id,
          state: "TOUCHING",
          rotationDirection: "ANTICLOCKWISE",
          touchPosition: action.position,
          transform: { rotation: 0, position: action.position },
        });
        break;
      case "TOUCH_MOVE":
        players.push({
          id: action.id,
          state: "TOUCHING",
          rotationDirection: "ANTICLOCKWISE",
          touchPosition: action.position,
          transform: { rotation: 0, position: action.position },
        });
        break;
      case "TOUCH_UP":
        players.push({
          id: action.id,
          state: "IDLE",
          rotationDirection: "ANTICLOCKWISE",
          idleTarget: action.position,
          transform: { rotation: 0, position: action.position },
        });
        break;
    }
  }
}
