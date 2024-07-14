import { Component, Svg } from '../../ui';
import CallSvg from './icons/call.svg';
import * as styles from './call-button.module.css';

export class CallButton extends Component {
  constructor({ onClick, classNames = [] }) {
    super({ tagName: 'button', classNames: [styles.button, ...classNames] });

    this.append(new Svg({ svg: CallSvg }));
    this.element.appendChild(document.createTextNode('Позвонить и прослушать результат'));

    if (onClick) {
      this.element.addEventListener('click', onClick);
    }
  }

  setDisabled(disabled) {
    this.element.disabled = disabled;
  }
}
