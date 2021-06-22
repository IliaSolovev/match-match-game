import { BaseComponent } from '../base-component';
import { InputBlock } from './input-block/input-block';
import './registr.css';

export class Registr extends BaseComponent {
  private readonly firstBlock: InputBlock;

  private readonly secondBlock: InputBlock;

  private readonly thirdBlock: InputBlock;

  constructor() {
    super('div', ['form']);

    this.element.innerHTML = '<h2>Registr new Player</h2>';
    this.firstBlock = new InputBlock('First name');
    this.secondBlock = new InputBlock('Last name');
    this.thirdBlock = new InputBlock('Email');
    this.element.appendChild(this.firstBlock.element);
    this.element.appendChild(this.secondBlock.element);
    this.element.appendChild(this.thirdBlock.element);
  }
}
