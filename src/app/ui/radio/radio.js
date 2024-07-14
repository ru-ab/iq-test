import { Component } from '../component/component';
import * as styles from './radio.module.css';

export class Radio extends Component {
  constructor({ name, label, onClick, size, classNames = [] }) {
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

    if (size === 'small') {
      this.addClassNames([styles.small]);
    }

    this.append(inputComponent, spanComponent);
  }
}
