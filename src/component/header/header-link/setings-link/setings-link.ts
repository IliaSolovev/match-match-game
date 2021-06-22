import { BaseComponent } from '../../../base-component';

export class SetingsLink extends BaseComponent {
  constructor() {
    super('li', []);

    this.element.innerHTML = `
    <span class="blue"></span>
    <p>Game Settings</p>
    `;
  }
}
