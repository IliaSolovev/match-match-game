import { Header } from './component/header/header';
import { Game } from './component/game/game';
import { About } from './component/about/about';
import { imageCategory } from './models/image-category-models';
import { AboutLink } from './component/header/header-link/about-link/about-link';
import { BestLink } from './component/header/header-link/best-link/best-link';
import { SetingsLink } from './component/header/header-link/setings-link/setings-link';
import { HeaderLink } from './component/header/header-link/header-link';
import { HeaderLast } from './component/header/header-last/header-last';
import { ButtonCancel } from './component/registr/button-cancel/button-cancel';
import { Registr } from './component/registr/registr';
import { StartGame } from './component/header/start-game/start-game';
import { StopGame } from './component/header/stop-game/stop-game';
import { ButtonRegistr } from './component/header/header-last/button-registr/button-registr';
import { ButtonRegister } from './component/registr/button-register/button-register';
import { FirstName } from './component/registr/first-name/first-name';
import { LastName } from './component/registr/last-name/last-name';
import { Email } from './component/registr/email/email';

const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export class App {
  private readonly header: Header;

  private readonly game: Game;

  private readonly about: About;

  private aboutLink: AboutLink;

  private bestLink: BestLink;

  private setingsLink: SetingsLink;

  private headerLink: HeaderLink;

  private headerLast: HeaderLast;

  private startGame: StartGame;

  private stopGame: StopGame;

  private buttonRegistr: ButtonRegistr;

  private buttonRegister: ButtonRegister;

  private buttonCancel: ButtonCancel;

  private registr: Registr;

  private firstName: FirstName;

  private lastName: LastName;

  private email: Email;

  constructor(private readonly rootElement: HTMLElement) {
    this.header = new Header();
    this.game = new Game();
    this.about = new About();
    this.aboutLink = new AboutLink();
    this.bestLink = new BestLink();
    this.setingsLink = new SetingsLink();
    this.headerLink = new HeaderLink();
    this.headerLast = new HeaderLast();
    this.registr = new Registr();
    this.buttonRegistr = new ButtonRegistr();
    this.buttonRegister = new ButtonRegister();
    this.buttonCancel = new ButtonCancel();
    this.startGame = new StartGame();
    this.stopGame = new StopGame();
    this.firstName = new FirstName();
    this.lastName = new LastName();
    this.email = new Email();
    this.headerLink.element.appendChild(this.aboutLink.element);
    this.headerLink.element.appendChild(this.bestLink.element);
    this.headerLink.element.appendChild(this.setingsLink.element);
    this.headerLast.element.appendChild(this.buttonRegistr.element);
    this.header.element.appendChild(this.headerLink.element);
    this.header.element.appendChild(this.headerLast.element);
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.about.element);
    this.startGame.element.addEventListener('click', () => this.linkGame());
    this.aboutLink.element.addEventListener('click', () => this.linkAbout());
    this.buttonRegistr.element.addEventListener('click', () => this.addRegister());
    this.buttonCancel.element.addEventListener('click', () => this.removeRegister());
    this.buttonRegister.element.addEventListener('click', () => this.validation());
  }

  removeRegister() {
    this.rootElement.removeChild(this.registr.element);
  }

  addRegister() {
    this.registr.element.appendChild(this.firstName.element);
    this.registr.element.appendChild(this.lastName.element);
    this.registr.element.appendChild(this.email.element);
    this.registr.element.appendChild(this.buttonRegister.element);
    this.registr.element.appendChild(this.buttonCancel.element);
    this.rootElement.appendChild(this.registr.element);
  }

  validation() {
    const first = this.firstName.element.value;
    const last = this.lastName.element.value;
    const email = this.email.element.value;
    if (first === '' || /[0-9]/.test(first)) {
      this.firstName.element.classList.add('invalid');
    } else if (last === '' || /[0-9]/.test(last)) {
      this.lastName.element.classList.add('invalid');
    } else if (email === '' || !email.includes('@') || email.length > 63) {
      this.email.element.classList.add('invalid');
    } else if (email[0] === '-' || email[email.length - 1] === '-') {
      this.email.element.classList.add('invalid');
    } else if (/[~ ! @ # $ % * () _ — + = | : ; " ' ` < > , . ? / ^]/.test(first)) {
      this.firstName.element.classList.add('invalid');
    } else if (/[~ ! @ # $ % * () _ — + = | : ; " ' ` < > , . ? / ^]/.test(last)) {
      this.lastName.element.classList.add('invalid');
    } else if (re.test(email)) {
      this.email.element.classList.remove('invalid');
      this.lastName.element.classList.remove('invalid');
      this.firstName.element.classList.remove('invalid');
      this.removeRegister();
      this.headerLast.element.removeChild(this.buttonRegistr.element);
      this.headerLast.element.appendChild(this.startGame.element);
    }
  }

  linkGame() {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.game.element);
    this.headerLast.element.removeChild(this.startGame.element);
    this.headerLast.element.appendChild(this.stopGame.element);
  }

  linkAbout() {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.about.element);
  }

  linkSetings() {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.game.element);
  }

  linkBest() {
    this.rootElement.innerHTML = '';
    this.rootElement.appendChild(this.header.element);
    this.rootElement.appendChild(this.game.element);
  }

  async start() {
    const res = await fetch('./images.json');
    const categoryes: imageCategory[] = await res.json();
    const cat = categoryes[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
    this.game.Taimer();
  }
}
