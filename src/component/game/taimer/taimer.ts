import { BaseComponent } from '../../base-component';
import './taimer.css';

const result = '00:00';

export class Taimer extends BaseComponent {
  constructor() {
    super('div', ['taimer']);

    this.element.innerHTML = result;
  }
}
