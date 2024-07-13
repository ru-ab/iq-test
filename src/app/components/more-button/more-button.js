import { Component, Paragraph, Svg } from '../../ui';
import ArrowUpIcon from './arrow-up.svg';
import * as styles from './more-button.module.css';

export class MoreButton extends Component {
  constructor({ classNames = [] }) {
    super({ tagName: 'button', classNames: [styles['more-button'], ...classNames] });

    this.append(new Svg({ svg: ArrowUpIcon }));
    this.append(new Paragraph({ text: 'Подробнее', classNames: [styles.text] }));
  }
}
