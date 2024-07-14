import { Component } from '../component/component';
import * as styles from './list.module.css';

export class List extends Component {
  constructor({ classNames = [], children = [] }) {
    super({ tagName: 'ul', classNames: [styles.list, ...classNames] });

    children.forEach((child) => {
      const li = new Component({ tagName: 'li' });
      li.append(child);
      this.append(li);
    });
  }
}
