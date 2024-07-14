import { Component } from '../component/component';
import * as styles from './button-icon.module.css';

export class ButtonIcon extends Component {
  constructor({ svg, onClick, classNames = [] }) {
    super({ tagName: 'button', classNames: [styles.button, ...classNames] });

    if (onClick) {
      this.element.addEventListener('click', onClick);
    }

    this.element.innerHTML = svg;
  }
}
