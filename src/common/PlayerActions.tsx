import { V2 } from "./v2";

export type PlayerActions = {
  id: string;
} & (
  | {
      type: "TOUCH_DOWN";
      position: V2;
    }
  | {
      type: "TOUCH_UP";
      position: V2;
    }
  | {
      type: "TOUCH_MOVE";
      position: V2;
    }
);
