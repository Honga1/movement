import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { Vector2 } from "three";
import "./App.css";
import { getUrlParameters } from "./get-url-parameters";
import { IdleTarget } from "./IdleTarget";
import { Player } from "./Player";
import { PlayerActions } from "./PlayerActions";
import { PlayerController } from "./PlayerController";
import { PlayerData } from "./PlayerData";
import { generateReplayDatum, replayData } from "./testData";
import { TouchTarget } from "./TouchTarget";
import { useAnimationFrame } from "./useAnimationFrame";
export const actionsQueue: PlayerActions[] = [];

const canvasCoords = (event: React.MouseEvent) => {
  return {
    x: event.clientX - window.innerWidth / 2,
    y: -event.clientY + window.innerHeight / 2,
  };
};

const addBots = (count: number) => {
  for (let index = 0; index < count; index++) {
    const replayGenerator = generateReplayDatum(
      Math.floor(Math.random() * 100)
    );
    const timeStep = () => {
      let timeout = 1000 * Math.random();
      const value = replayGenerator.next().value;

      if (value) {
        actionsQueue.push({ ...value, id: index.toString() });
        setTimeout(timeStep, timeout);
      }
    };
    setTimeout(timeStep, 1000);
  }
};

const botCount = getUrlParameters("count", "integer") || 2;
addBots(botCount);

function App() {
  const [actionsHistory, setActionsHistory] = useState(actionsQueue);
  const [isTouching, setIsTouching] = useState(false);
  const [players, setPlayers] = useState<PlayerData[]>([
    {
      id: "TEST",
      state: "IDLE",
      transform: { position: new Vector2(100, 100), rotation: 0 },
      idleTarget: new Vector2(),
      rotationDirection: "CLOCKWISE",
    },
  ]);

  useAnimationFrame(60, (deltaTime) => {
    const nextPlayers = update(players, deltaTime);
    setPlayers([...nextPlayers]);
  });

  return (
    <div className="App">
      <div style={{ position: "absolute" }}>
        {actionsHistory.slice(0, 10).map((action, index) => (
          <div key={index}>{`${action.type}`}</div>
        ))}
      </div>
      <Canvas
        orthographic={true}
        pixelRatio={window.devicePixelRatio}
        concurrent={true}
        style={{ width: "100%", height: "100%" }}
        onMouseDown={(event) => {
          const { x, y } = canvasCoords(event);
          const action: PlayerActions = {
            type: "TOUCH_DOWN",
            id: "TEST",
            position: new Vector2(x, y),
          };
          actionsQueue.push(action);

          setIsTouching(true);
          setActionsHistory([action, ...actionsHistory]);
        }}
        onMouseMove={(event) => {
          if (!isTouching) return;

          const { x, y } = canvasCoords(event);
          const action: PlayerActions = {
            type: "TOUCH_MOVE",
            id: "TEST",
            position: new Vector2(x, y),
          };
          actionsQueue.push(action);

          const firstAction = actionsHistory[0];
          if (firstAction.type === action.type) {
            setActionsHistory([action, ...actionsHistory]);
          }
        }}
        onMouseUp={(event) => {
          const { x, y } = canvasCoords(event);

          const action: PlayerActions = {
            type: "TOUCH_UP",
            id: "TEST",
            position: new Vector2(x, y),
          };
          actionsQueue.push(action);

          setIsTouching(false);
          setActionsHistory([action, ...actionsHistory]);
        }}
      >
        {players.map((player, playerIndex) => (
          <Player data={player} key={playerIndex} />
        ))}
        {players.map((player, playerIndex) => {
          if (player.state === "IDLE") {
            return <IdleTarget data={player} key={playerIndex} />;
          } else if (player.state === "TOUCHING") {
            return <TouchTarget data={player} key={playerIndex} />;
          }
          return null;
        })}
      </Canvas>
    </div>
  );
}

export default App;
function update(players: PlayerData[], deltaTime: number) {
  const actionsThisFrame = [...actionsQueue];
  actionsQueue.length = 0;

  actionsThisFrame.forEach((action) => {
    const maybePlayerIndex = players.findIndex(
      (player) => player.id === action.id
    );

    const playerExists = maybePlayerIndex !== -1;
    if (playerExists) {
      const player = players[maybePlayerIndex];
      const nextData = PlayerController.reduceAction(action, player);
      Object.assign(players[maybePlayerIndex], nextData);
    } else {
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
  });

  players.forEach((player) => {
    const transform = PlayerController.updateTransform(
      player,
      deltaTime / 1000
    );
    Object.assign(player.transform.position, transform.position);
    player.transform.rotation = transform.rotation;
  });

  return players;
}
