import MovableObject from './MovableObject';
import { MovableObjectOptions } from './types/index.d';
import { uniqueId } from './utils';
import { BULLET_SIZE } from './constants';

export default class Bullet extends MovableObject {
  size: number;

  id: string;

  constructor(options: MovableObjectOptions) {
    super(options);
    this.size = BULLET_SIZE;
    this.id = uniqueId('bullet');
  }
}
