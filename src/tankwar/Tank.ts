import { SIZE } from './constants';
import { uniqueId } from './utils';

export enum Dir {
  Up,
  Down,
  Left,
  Right,
}

export interface TankOptions {
  image: HTMLImageElement;
  ctx: CanvasRenderingContext2D;
  dir: Dir;
  speed: number;
  x: number;
  y: number;
}

export default class Tank {
  image: HTMLImageElement;

  ctx: CanvasRenderingContext2D;

  dir: Dir;

  speed: number;

  x: number;

  y: number;

  positionX: number;

  positionY: number;

  size: number;

  step: number;

  id: string;

  constructor(options: TankOptions) {
    this.image = options.image;
    this.ctx = options.ctx;
    this.dir = options.dir;
    this.speed = options.speed;
    this.x = options.x;
    this.y = options.y;
    this.positionX = 0;
    this.positionY = 0;
    this.size = SIZE;
    this.step = 0;
    this.id = uniqueId('tank');
  }

  move() {
    if (this.dir === Dir.Up) {
      this.y += this.speed;
    }
    if (this.dir === Dir.Down) {
      this.y -= this.speed;
    }
    if (this.dir === Dir.Right) {
      this.x += this.speed;
    }
    if (this.dir === Dir.Left) {
      this.x -= this.speed;
    }
  }

  paint() {
    const { size } = this;
    this.ctx.drawImage(this.image, 0, 0, size, size, 0, 0, size, size);
  }
}
