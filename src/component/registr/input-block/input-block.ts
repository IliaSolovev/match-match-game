import { BaseComponent } from '../../base-component';

export class InputBlock extends BaseComponent {
  constructor(readonly name: string) {
    super('div', ['inputs-block']);

    this.element.innerHTML = `<p>${name}</p>`;
  }
}
