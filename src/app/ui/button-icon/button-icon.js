import { Component } from '../component/component';
import * as styles from './button-icon.module.css';

export class ButtonIcon extends Component {
  constructor({ svg }) {
    super({ tagName: 'button', classNames: [styles.button] });

    this.element.innerHTML = svg;
  }
}
