import { Component } from '../component/component';
import * as styles from './button.module.css';

export class Button extends Component {
  constructor({ text = '' }) {
    super({ tagName: 'button', classNames: [styles.button] });

    this.element.textContent = text;
  }
}
