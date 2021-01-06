import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { actionsQueue } from "../server/actionsQueue";
import { PlayerActions } from "../common/PlayerActions";
import "./addBots";
import "./App.css";
import { World } from "./World";

const canvasCoords = (event: React.MouseEvent) => {
  return [
    event.clientX - window.innerWidth / 2,
    -event.clientY + window.innerHeight / 2,
  ] as const;
};

function App() {
  const isTouching = useRef(false);

  const onMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const position = canvasCoords(event);
    const action: PlayerActions = {
      type: "TOUCH_DOWN",
      id: "TEST",
      position,
    };
    actionsQueue.push(action);

    isTouching.current = true;
  };

  const onMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    if (!isTouching.current) return;

    const position = canvasCoords(event);
    const action: PlayerActions = {
      type: "TOUCH_MOVE",
      id: "TEST",
      position,
    };
    actionsQueue.push(action);
  };

  const onMouseUp = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const position = canvasCoords(event);

    const action: PlayerActions = {
      type: "TOUCH_UP",
      id: "TEST",
      position: position,
    };
    actionsQueue.push(action);

    isTouching.current = false;
  };

  return (
    <div className="App">
      <Canvas
        orthographic={true}
        pixelRatio={window.devicePixelRatio}
        concurrent={true}
        style={{ width: "100%", height: "100%" }}
        onPointerDown={onMouseDown}
        onPointerMove={onMouseMove}
        onPointerUp={onMouseUp}
      >
        <World />
      </Canvas>
    </div>
  );
}

export default App;
