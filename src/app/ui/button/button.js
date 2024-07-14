import { Component } from '../component/component';
import * as styles from './button.module.css';

export class Button extends Component {
  constructor({ text = '', classNames = [] }) {
    super({ tagName: 'button', classNames: [styles.button, ...classNames] });

    this.element.textContent = text;
  }
}
