export class InputComponent {
  readonly element: HTMLInputElement;

  constructor(tag: keyof HTMLElementTagNameMap = 'div', styles: string[] = []) {
    this.element = document.createElement('input');
    this.element.classList.add(...styles);
  }
}
