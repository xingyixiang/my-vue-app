import { Dir } from './Tank';
import Hero from './Hero';
import { AREA_SIZE } from './constants';

type ImgStore = Record<string, any>;

const images: ImgStore = Object.entries(
  import.meta.glob('@/tankwar/assets/image/*.png', { eager: true })
).reduce((pre, [key, value]: any) => {
  const matched = key.match(/([A-Za-z0-9-_]+)\./i)[1];
  pre[matched] = value.default;
  return pre;
}, {} as ImgStore);

interface EngineOptions {
  el: HTMLElement;
}

export default class Engine {
  private el: HTMLElement;

  private ctx: CanvasRenderingContext2D | null;

  timer: null | number;

  constructor(options: EngineOptions) {
    this.el = options.el;
    this.ctx = null;
    this.timer = null;
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
    const img = new Image();
    img.src = images.tank_T1_0;
    img.onload = () => {
      const hero = new Hero({
        ctx: this.ctx as CanvasRenderingContext2D,
        image: img,
        speed: 5,
        dir: Dir.Right,
        x: 0,
        y: 0,
      });
      document.onkeydown = hero.keyDown.bind(hero);
      const a = () => {
        // hero.move();
        hero.paint();
        window.requestAnimationFrame(a);
      };
      a();
    };
  }
}
