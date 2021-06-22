import { BaseComponent } from '../../base-component';
import { AboutLink } from './about-link/about-link';
import { BestLink } from './best-link/best-link';
import { SetingsLink } from './setings-link/setings-link';
import './header-link.css';

export class HeaderLink extends BaseComponent {
  constructor() {
    super('nav', ['header-nav']);
  }
}
