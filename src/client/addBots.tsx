import { actionsQueue } from "../server/actionsQueue";
import { getUrlParameters } from "./get-url-parameters";
import { generateReplayDatum } from "../server/testData";

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
const botCount = getUrlParameters("count", "integer") || 0;
addBots(botCount);
