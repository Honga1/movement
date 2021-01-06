import { PlayerActions } from "../common/PlayerActions";

export function* generateReplayDatum(offset: number) {
  let nextIndex = offset;

  while (true) {
    nextIndex++;
    yield replayData[nextIndex % replayData.length];
  }
}
export const replayData: PlayerActions[] = [
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-351, 111],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-389, 65],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-391, 55],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-389, 54],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-377, 54],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-373, 53],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-259, 55],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-124, 39],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-61, 32],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-11, 21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-12, 21],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-12, 21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-13, 21],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-15, 21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-15, 22],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-15, 22],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-15, 22],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-15, 22],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-15, 22],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-17, 22],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-17, 22],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-17, 22],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-17, 22],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-17, 22],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-17, 22],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-17, 22],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-18, 22],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-21, 21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-23, 21],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-38, 16],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-39, 15],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-40, 13],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-40, 13],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-41, -4],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-39, -11],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-27, -37],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-18, -39],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-8, -49],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-8, -49],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [5, -54],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [5, -55],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [6, -55],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [10, -55],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-32, -82],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-42, -82],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-109, -95],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-126, -97],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-131, -201],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-90, -283],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [27, -338],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [134, -279],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [134, -261],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [123, -74],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [66, 108],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [57, 119],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-154, 47],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-360, -214],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-22, -234],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-22, -234],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-4, 266],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-2, 273],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [318, -108],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-57, -139],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-471, -93],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-557, -329],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [94, -324],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [438, 253],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-374, -45],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-374, -45],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [34, -21],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [33, -21],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-18, -266],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-68, -251],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-259, 64],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-194, -318],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [319, -280],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-111, 252],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-41, 196],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-17, 172],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [38, 111],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [38, 106],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-52, 79],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-95, 76],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-312, 100],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-319, 100],
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: [-319, 100],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-319, 100],
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: [-319, 100],
  },
];
