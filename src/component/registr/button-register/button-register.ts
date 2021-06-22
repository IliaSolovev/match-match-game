import { BaseComponent } from '../../base-component';
import './button-register.css';

export class ButtonRegister extends BaseComponent {
  constructor() {
    super('button', ['button-register']);

    this.element.innerText = 'add user';
  }
}
