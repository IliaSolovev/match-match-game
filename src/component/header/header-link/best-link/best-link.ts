import { BaseComponent } from '../../../base-component';

export class BestLink extends BaseComponent {
  constructor() {
    super('li', []);

    this.element.innerHTML = `
    <span class="whites"></span>
    <p>Best Score</p>
    `;
  }
}
