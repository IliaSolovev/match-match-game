import { BaseComponent } from '../../base-component';
import './end-game.css';

export class EndGame extends BaseComponent {
  constructor(readonly times: string) {
    super('div', ['end-game']);
    this.element.innerHTML = `<div class="end-game-modal">
    <p>Congratulations! You successfully 
    found all matches on ${times} minutes.</p>
    <button>Ok</button>
    </div>
    `;
  }
}
