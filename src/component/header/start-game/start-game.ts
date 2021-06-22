import { BaseComponent } from '../../base-component';
import './start-game.css';

export class StartGame extends BaseComponent {
  constructor() {
    super('button', ['button-start']);

    this.element.innerText = 'start game';
  }
}
