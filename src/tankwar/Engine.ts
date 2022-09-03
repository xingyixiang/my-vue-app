import { Dir } from './Tank';
import Hero from './Hero';
import loadImages, { ImageElementStore } from './loadImages';
import { AREA_SIZE } from './constants';

export type ImgStore = Record<string, string>;

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

  imgs: ImageElementStore;

  hero: null | Hero;

  constructor(options: EngineOptions) {
    this.el = options.el;
    this.ctx = null;
    this.timer = null;
    this.imgs = {};
    this.hero = null;
  }

  async init() {
    this.createScene();
    await this.loadResources();
    this.hero = this.createHero();
    this.render();
  }

  private createScene() {
    const canvas = document.createElement('canvas');
    this.ctx = canvas.getContext('2d');
    canvas.width = AREA_SIZE;
    canvas.height = AREA_SIZE;
    this.el.appendChild(canvas);
  }

  private async loadResources() {
    const imgs = await loadImages(images);
    this.imgs = imgs;
  }

  createHero() {
    const keyMap = {
      ArrowRight: Dir.Right,
      ArrowUp: Dir.Up,
      ArrowLeft: Dir.Left,
      ArrowDown: Dir.Down,
    };
    const img = this.imgs.tank_T1_0;
    const hero = new Hero({
      ctx: this.ctx as CanvasRenderingContext2D,
      image: img,
      speed: 5,
      dir: Dir.Right,
      x: 0,
      y: 0,
      keyMap,
    });
    return hero;
  }

  setTimer(fn: () => any) {
    const initTimer = () => {
      fn();
      this.timer = window.requestAnimationFrame(initTimer);
    };
    initTimer();
  }

  private render() {
    this.setTimer(() => {
      this.hero?.paint();
    });

    // setTimeout(() => {
    //   this.hero?.destory();
    // }, 10 * 1000);
  }
}
