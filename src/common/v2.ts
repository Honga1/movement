export type V2 = readonly [x: number, y: number];

export class V2O {
  static angle([x, y]: V2): number {
    return Math.atan2(y, x);
  }
  static VECTOR_LENGTH = 2;
  static combine = (
    a: V2,
    b: V2,
    operation: (aElement: number, bElement: number) => number
  ): V2 => {
    const result = new Array(V2O.VECTOR_LENGTH);

    for (let index = 0; index < V2O.VECTOR_LENGTH; index++) {
      const aElement = a[index];
      const bElement = b[index];

      result[index] = operation(aElement, bElement);
    }

    return V2O.fromArray(result);
  };

  static add = (a: V2, b: V2): V2 => V2O.combine(a, b, (a, b) => a + b) as V2;

  static subtract = (base: V2, subtraction: V2): V2 =>
    V2O.combine(base, subtraction, (a, b) => a - b) as V2;

  static multiply = (base: V2, multiplier: V2): V2 =>
    V2O.combine(base, multiplier, (a, b) => a * b) as V2;

  static scale = (base: V2, factor: number): V2 =>
    V2O.fromArray(base.map((element) => element * factor));

  static divide = (base: V2, divisor: V2): V2 =>
    V2O.combine(base, divisor, (a, b) => a / b) as V2;

  static normalise = (vector: V2): V2 => {
    const length = V2O.euclideanLength(vector);
    if (length === 0) {
      return V2O.zero();
    }
    return V2O.scale(vector, 1 / length);
  };

  static sqrEuclideanLength = (vector: V2): number =>
    vector[0] ** 2 + vector[1] ** 2;

  static euclideanLength = (vector: V2): number =>
    V2O.sqrEuclideanLength(vector) ** 0.5;

  static sqrEuclideanDistance = (a: V2, b: V2): number => {
    const distance = V2O.subtract(a, b);
    return V2O.sqrEuclideanLength(distance);
  };

  static euclideanDistanceV2 = (a: V2, b: V2): number => {
    const distance = V2O.subtract(a, b);
    return V2O.euclideanLength(distance);
  };

  static rotate = ([x, y]: V2, angleRadians: number): V2 => {
    const cos = Math.cos(angleRadians);
    const sin = Math.sin(angleRadians);

    return [x * cos - y * sin, x * sin + y * cos];
  };

  static zero = (): V2 => [0, 0];
  static flipX = (vector: V2): V2 => [-vector[0], vector[1]];
  static flipY = (vector: V2): V2 => [vector[0], -vector[1]];

  static fromArray = (array: number[]): V2 => {
    if (array.length !== V2O.VECTOR_LENGTH)
      throw new Error(
        `Cannot create V2 from ${array}, length is ${array.length}. Length should be ${V2O.VECTOR_LENGTH}`
      );
    return (array as unknown) as V2;
  };

  static fromVector2 = ({ x, y }: { x: number; y: number }): V2 => [x, y];
}
