import { Component } from '../component/component';
import * as styles from './button.module.css';

export class Button extends Component {
  constructor({ text = '', onClick, classNames = [] }) {
    super({ tagName: 'button', classNames: [styles.button, ...classNames] });

    if (onClick) {
      this.element.addEventListener('click', onClick);
    }

    this.element.textContent = text;
  }
}
