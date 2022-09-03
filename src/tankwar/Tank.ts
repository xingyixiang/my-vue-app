import { SIZE } from './constants';
import { uniqueId } from './utils';

export enum Dir {
  Up = 0,
  Down = 1,
  Left = 2,
  Right = 3,
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

  oldX: number;

  oldY: number;

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
    this.oldX = this.x;
    this.oldY = this.y;
    this.size = SIZE;
    this.step = 0;
    this.id = uniqueId('tank');
  }

  move() {
    this.oldX = this.x;
    this.oldY = this.y;
    if (this.dir === Dir.Up) {
      this.y -= this.speed;
    }
    if (this.dir === Dir.Down) {
      this.y += this.speed;
    }
    if (this.dir === Dir.Right) {
      this.x += this.speed;
    }
    if (this.dir === Dir.Left) {
      this.x -= this.speed;
    }
  }

  turn(dir: Dir) {
    this.dir = dir;
  }

  beforePaint() {}

  paint() {
    this.beforePaint();
    this.ctx.clearRect(this.oldX, this.oldY, this.size, this.size);
    this.step = (this.step + 1) % 4;
    const { size, x, y, step, dir } = this;
    const sw = size * Math.floor(step / 2);
    const sh = size * dir;
    this.ctx.drawImage(this.image, sw, sh, size, size, x, y, size, size);
  }
}
