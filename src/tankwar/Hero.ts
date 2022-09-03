import Tank, { TankOptions, Dir } from './Tank';

export type KeyMap = Record<string, Dir>;

export interface HeroOption extends TankOptions {
  keyMap: KeyMap;
}

export default class Hero extends Tank {
  state: number;

  keyMap: KeyMap;

  currentKey: null | keyof KeyMap;

  bindKeyDown: (e: KeyboardEvent) => void;

  bindKeyUp: (e: KeyboardEvent) => void;

  constructor(options: HeroOption) {
    super(options);
    this.state = 0;
    this.keyMap = options.keyMap;
    this.currentKey = null;
    this.bindKeyDown = this.keyDown.bind(this);
    this.bindKeyUp = this.keyup.bind(this);
    window.addEventListener('keydown', this.bindKeyDown);
    window.addEventListener('keyup', this.bindKeyUp);
  }

  eat(food: number) {
    this.state = food;
  }

  keyDown(e: KeyboardEvent) {
    if (this.keyMap[e.key] !== undefined && this.currentKey === null) {
      this.currentKey = e.key;
      this.turn(this.keyMap[e.key]);
    }
  }

  keyup(e: KeyboardEvent) {
    if (e.key === this.currentKey) {
      this.currentKey = null;
    }
  }

  beforePaint() {
    if (this.currentKey !== null) {
      this.move();
    }
  }

  destory() {
    window.removeEventListener('keydown', this.bindKeyDown);
    window.removeEventListener('keyup', this.bindKeyUp);
  }
}
