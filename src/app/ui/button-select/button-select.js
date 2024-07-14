import { Component } from '../component/component';
import * as styles from './button-select.module.css';

export class ButtonSelect extends Component {
  constructor({ name, label, onClick, classNames = [] }) {
    super({ tagName: 'label', classNames: [styles.label, ...classNames] });

    const uuid = crypto.randomUUID();
    this.element.htmlFor = uuid;

    const inputComponent = new Component({ tagName: 'input', classNames: [styles.input] });
    inputComponent.element.id = uuid;
    inputComponent.element.type = 'radio';
    inputComponent.element.name = name;

    const spanComponent = new Component({ tagName: 'span', classNames: [styles.text] });
    spanComponent.element.textContent = label;

    if (onClick) {
      this.element.addEventListener('click', onClick);
    }

    this.append(inputComponent, spanComponent);
  }
}
