import './header.css';
import { BaseComponent } from '../base-component';
import { HeaderLast } from './header-last/header-last';
import { HeaderLink } from './header-link/header-link';

export class Header extends BaseComponent {
  private headerLink: HeaderLink;

  private headerLast: HeaderLast;

  constructor() {
    super('header', ['header']);

    this.headerLast = new HeaderLast();
    this.headerLink = new HeaderLink();
    this.element.innerHTML = `
    <div class="header-logo">
      <div class="header-logo__match-1">
        match
      </div>
      <div class="header-logo__match-2">
        match
      </div>
    </div>
    `;
  }
}
