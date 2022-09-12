export enum Dir {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
}

export interface MovableObjectOptions {
  image: HTMLImageElement;
  ctx: CanvasRenderingContext2D;
  dir: Dir;
  speed: number;
  x: number;
  y: number;
}