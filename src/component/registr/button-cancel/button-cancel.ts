import { BaseComponent } from '../../base-component';
import './button-cancel.css';

export class ButtonCancel extends BaseComponent {
  constructor() {
    super('button', ['button-cancel']);

    this.element.innerText = 'cansel';
  }
}
