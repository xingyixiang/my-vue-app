import MovableObject from './MovableObject';
import { SIZE } from './constants';
import { Dir, MovableObjectOptions } from './types/index.d';
import { uniqueId } from './utils';

export type TankOptions = MovableObjectOptions;

export default class Tank extends MovableObject {
  step: number;

  size: number;

  id: string;

  constructor(options: TankOptions) {
    super(options);
    this.size = SIZE;
    this.step = 0;
    this.id = uniqueId('tank');
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
