import { BaseComponent } from '../../base-component';
import './stop-game.css';

export class StopGame extends BaseComponent {
  constructor() {
    super('button', ['stop-game']);

    this.element.innerText = 'stop game';
  }
}
