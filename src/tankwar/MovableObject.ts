import { Dir, MovableObjectOptions } from './types/index.d';

export default class MovableObject {
  image: HTMLImageElement;

  ctx: CanvasRenderingContext2D;

  dir: Dir;

  speed: number;

  x: number;

  y: number;

  oldX: number;

  oldY: number;

  constructor(options: MovableObjectOptions) {
    this.image = options.image;
    this.ctx = options.ctx;
    this.dir = options.dir;
    this.speed = options.speed;
    this.x = options.x;
    this.y = options.y;
    this.oldX = this.x;
    this.oldY = this.y;
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
}
