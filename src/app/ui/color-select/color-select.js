import { Component } from '../component/component';
import * as styles from './color-select.module.css';

export class ColorSelect extends Component {
  constructor({ classNames = [], onClick, color, name }) {
    super({ tagName: 'input', classNames: [styles.box, ...classNames] });

    if (onClick) {
      this.element.addEventListener('click', onClick);
    }

    this.element.name = name;
    this.element.type = 'radio';
    this.element.style.setProperty('background', color);
  }
}
