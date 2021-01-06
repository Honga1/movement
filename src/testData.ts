import { PlayerActions } from "./PlayerActions";

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
    position: {
      x: -351,
      y: 111,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -389,
      y: 65,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -391,
      y: 55,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -389,
      y: 54,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -377,
      y: 54,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -373,
      y: 53,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -259,
      y: 55,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -124,
      y: 39,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -61,
      y: 32,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -11,
      y: 21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -12,
      y: 21,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -12,
      y: 21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -13,
      y: 21,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -15,
      y: 21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -15,
      y: 22,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -15,
      y: 22,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -15,
      y: 22,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -15,
      y: 22,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -15,
      y: 22,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -17,
      y: 22,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -17,
      y: 22,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -17,
      y: 22,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -17,
      y: 22,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -17,
      y: 22,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -17,
      y: 22,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -17,
      y: 22,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -18,
      y: 22,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -21,
      y: 21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -23,
      y: 21,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -38,
      y: 16,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -39,
      y: 15,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -40,
      y: 13,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -40,
      y: 13,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -41,
      y: -4,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -39,
      y: -11,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -27,
      y: -37,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -18,
      y: -39,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -8,
      y: -49,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -8,
      y: -49,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: 5,
      y: -54,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: 5,
      y: -55,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: 6,
      y: -55,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: 10,
      y: -55,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -32,
      y: -82,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -42,
      y: -82,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -109,
      y: -95,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -126,
      y: -97,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -131,
      y: -201,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -90,
      y: -283,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: 27,
      y: -338,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: 134,
      y: -279,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: 134,
      y: -261,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: 123,
      y: -74,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: 66,
      y: 108,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: 57,
      y: 119,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -154,
      y: 47,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -360,
      y: -214,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -22,
      y: -234,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -22,
      y: -234,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -4,
      y: 266,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -2,
      y: 273,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: 318,
      y: -108,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -57,
      y: -139,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -471,
      y: -93,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -557,
      y: -329,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: 94,
      y: -324,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: 438,
      y: 253,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -374,
      y: -45,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -374,
      y: -45,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: 34,
      y: -21,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: 33,
      y: -21,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -18,
      y: -266,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -68,
      y: -251,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -259,
      y: 64,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -194,
      y: -318,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: 319,
      y: -280,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -111,
      y: 252,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -41,
      y: 196,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -17,
      y: 172,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: 38,
      y: 111,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: 38,
      y: 106,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -52,
      y: 79,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -95,
      y: 76,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -312,
      y: 100,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -319,
      y: 100,
    },
  },
  {
    type: "TOUCH_UP",
    id: "REPLAY",
    position: {
      x: -319,
      y: 100,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -319,
      y: 100,
    },
  },
  {
    type: "TOUCH_DOWN",
    id: "REPLAY",
    position: {
      x: -319,
      y: 100,
    },
  },
];
