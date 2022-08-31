import Tank, { TankOptions, Dir } from './Tank';

export default class Hero extends Tank {
  state: number;

  constructor(options: TankOptions) {
    super(options);
    this.state = 0;
  }

  eat(food: number) {
    this.state = food;
  }

  keyDown(e: KeyboardEvent) {
    const keyMap: Record<string, Dir> = {
      ArrowRight: Dir.Right,
      ArrowUp: Dir.Up,
      ArrowLeft: Dir.Left,
      ArrowDown: Dir.Down,
    };
    if (keyMap[e.key] !== undefined) {
      this.turn(keyMap[e.key]);
      this.move();
    }
  }
}
