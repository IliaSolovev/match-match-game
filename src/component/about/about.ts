import { BaseComponent } from '../base-component';
import { Instruct } from './instruct/instruct';
import { Registr } from '../registr/registr';

export class About extends BaseComponent {
  private readonly instruct: Instruct;

  private readonly registr: Registr;

  constructor() {
    super('div', ['content']);

    this.instruct = new Instruct();
    this.registr = new Registr();
    // this.element.appendChild(this.registr.element);
    this.element.appendChild(this.instruct.element);
  }
}
