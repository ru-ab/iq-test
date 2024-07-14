import { Component } from '../component/component';
import * as styles from './loader.module.css';

export class Loader extends Component {
  constructor({ classNames = [], children = [] }) {
    super({ tagName: 'div', classNames: [styles.loader, ...classNames] });

    this.append(...children);
  }
}
