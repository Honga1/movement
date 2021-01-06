import React, { useState } from "react";
import { useFrame } from "react-three-fiber";
import { actionsQueue } from "../server/actionsQueue";
import { WorldController } from "../server/WorldController";
import { connectedPlayers } from "../server/connectedPlayers";
import { IdleTarget } from "./IdleTarget";
import { Player } from "./Player";
import { TouchTarget } from "./TouchTarget";

export const World = () => {
  const [playerIds, setPlayerIds] = useState<string[]>([]);
  useFrame((context, deltaTime) => {
    WorldController.update(connectedPlayers, actionsQueue, deltaTime);
    const nextPlayerIds = connectedPlayers.map((player) => player.id);
    const diff = nextPlayerIds.some((id) => !playerIds.includes(id));
    if (diff) {
      setPlayerIds(nextPlayerIds);
    }
  });

  const targets = playerIds.map((id, playerIndex) => {
    const player = connectedPlayers.find((player) => player.id === id);
    if (!player) return null;
    return (
      <React.Fragment key={id}>
        <IdleTarget data={player} />
        <TouchTarget data={player} />
      </React.Fragment>
    );
  });

  const playerComponents = playerIds.map((id, playerIndex) => {
    const player = connectedPlayers.find((player) => player.id === id);
    if (!player) return null;

    return <Player data={player} key={id} />;
  });

  return (
    <>
      {targets}
      {playerComponents}
    </>
  );
};
