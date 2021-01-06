export type PlayerActions = {
  id: string;
} & (
  | {
      type: "TOUCH_DOWN";
      position: { x: number; y: number };
    }
  | {
      type: "TOUCH_UP";
      position: { x: number; y: number };
    }
  | {
      type: "TOUCH_MOVE";
      position: { x: number; y: number };
    }
);
