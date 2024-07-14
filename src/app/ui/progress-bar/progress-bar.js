import { Container } from '../container/container';
import * as styles from './progress-bar.module.css';

export class ProgressBar extends Container {
  constructor({ classNames = [] }) {
    super({ classNames: [styles.container, ...classNames] });

    this.progress = new Container({ classNames: [styles.bar] });

    this.append(this.progress);
  }

  setValue(value) {
    this.progress.element.style.width = `${value * parseInt(this.element.getBoundingClientRect().width, 10)}px`;
  }
}
