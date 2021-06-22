import { BaseComponent } from '../base-component';

export class Best extends BaseComponent {
  constructor() {
    super('div', ['content instruct']);

    this.element.innerHTML = '<h2>Best players</h2>';
  }
}
