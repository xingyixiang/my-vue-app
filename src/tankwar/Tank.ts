import { SIZE } from './constants';

enum Dir {
  Up,
  Down,
  Left,
  Right,
}

export interface TankOptions {
  image: HTMLImageElement;
  dir: Dir;
  speed: number;
  x: number;
  y: number;
}

export default class Tank {
  image: HTMLImageElement;

  dir: Dir;

  speed: number;

  x: number;

  y: number;

  positionX: number;

  positionY: number;

  size: number;

  step: number;

  constructor(options: TankOptions) {
    this.image = options.image;
    this.dir = options.dir;
    this.speed = options.speed;
    this.x = options.x;
    this.y = options.y;
    this.positionX = 0;
    this.positionY = 0;
    this.size = SIZE;
    this.step = 0;
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

  print() {}
}
