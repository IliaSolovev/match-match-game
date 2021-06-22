import { BaseComponent } from '../base-component';
import { Card } from './card/card';
import { CardsField } from './cards-field/cards-field';
import { delay } from '../../shared/delay';
import { Taimer } from './taimer/taimer';
import { EndGame } from './end-game/end-game';

const FLIP_DELAY = 3000;
let index = 9;
let x = 0;
let seconds = 0;
let minutes = 0;
let result = '00:00';
let calculate = 0;
let set = setInterval(() => {}, 1000);
let time = '0';

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private endGame: EndGame;

  private taimer: Taimer;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super('div', ['content']);
    this.cardsField = new CardsField();
    this.taimer = new Taimer();
    this.endGame = new EndGame(time);
    this.element.appendChild(this.taimer.element);
    this.element.appendChild(this.cardsField.element);
  }

  newTaimer() {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }

    if (seconds < 10) {
      if (minutes < 10) {
        result = `0${minutes}:0${seconds}`;
      } else {
        result = `${minutes}:0${seconds}`;
      }
    } else if (minutes < 10) {
      result = `0${minutes}:${seconds}`;
    } else {
      result = `${minutes}:${seconds}`;
    }

    time = `${minutes}.${seconds}`;
  }

  Taimer() {
    setTimeout(() => {
      set = setInterval(() => {
        this.newTaimer();
        this.taimer.element.innerHTML = result;
      }, 1000);
    }, 5000);
  }

  newGame(images: string[]) {
    this.cardsField.clear();

    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardsHandler(card));
    });

    this.cardsField.addCards(cards);
  }

  private async cardsHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;
    await card.flipToFront();
    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image != card.image) {
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    }

    if (this.activeCard.image === card.image) {
      index--;
      if (index === 0) {
        this.finishGame();
      }
      x++;
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }

  finishGame() {
    this.endGame = new EndGame(time);
    this.element.appendChild(this.endGame.element);
    clearInterval(set);
    this.calc();
    console.log(calculate);
  }

  calc() {
    calculate = x * 100 - (minutes * 60 + seconds) * 10;

    if (calculate < 0) {
      calculate = 0;
    }
  }
}
