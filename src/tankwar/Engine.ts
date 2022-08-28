// import Tank from './Tank';
import { AREA_SIZE } from './constants';

interface EngineOptions {
  el: HTMLElement;
}

export default class Engine {
  private el: HTMLElement;

  private ctx: CanvasRenderingContext2D | null;

  constructor(options: EngineOptions) {
    this.el = options.el;
    this.ctx = null;
  }

  init() {
    this.createScene();
  }

  private createScene() {
    const canvas = document.createElement('canvas');
    this.ctx = canvas.getContext('2d');
    canvas.width = AREA_SIZE;
    canvas.height = AREA_SIZE;
    this.el.appendChild(canvas);
    this.render();
  }

  private render() {
    if (!this.ctx) return;
    this.ctx.fillStyle = '#FF0000';
    this.ctx.fillRect(0, 0, 150, 75);
    // const tank = new Tank({});
  }
}
