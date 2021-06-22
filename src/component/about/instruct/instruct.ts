import { BaseComponent } from '../../base-component';
import './instruct.css';

export class Instruct extends BaseComponent {
  constructor() {
    super('div', ['instruct']);

    this.element.innerHTML = `
    <h2>How to play?</h2>
    <div class="frist">
      <div class="block">
        <div class="number">1</div><p>Register new player in game</p>
      </div>
      <div class="first-img"></div>
    </div>
    <div class="second">
      <div class="block">
        <div class="number">2</div><p>Configure your game settings</p>
      </div>
      <div class="second-img"></div>
    </div>
    <div class="third">
      <div class="block">
        <div class="number">3</div><p>Start you new game! Remember card positions 
        and match it before times up.</p>
      </div>
      <div class="third-img"></div>
    </div>
    `;
  }
}
