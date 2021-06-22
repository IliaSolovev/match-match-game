import { BaseComponent } from '../../base-component';

export class Error extends BaseComponent {
  constructor(readonly message: string) {
    super('p', ['error']);

    this.element.innerText = 'nfgdfngdfjgndkfgdfgkjdfhkgjd';
  }
}
