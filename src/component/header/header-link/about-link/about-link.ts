import { BaseComponent } from '../../../base-component';

export class AboutLink extends BaseComponent {
  constructor() {
    super('li', []);

    this.element.innerHTML = `
    <span>?</span>
    <p>About Game</p>
    `;
  }
}
