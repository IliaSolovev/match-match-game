import { BaseComponent } from '../../../base-component';
import './button-registr.css';

const str = 'register new player';

export class ButtonRegistr extends BaseComponent {
  constructor() {
    super('button', ['button-registr']);

    this.element.innerText = str;
  }
}
