import { Component, ButtonIcon } from '../../ui';
import * as styles from './header.module.css';
import MenuIcon from './icons/menu.svg';

export class Header extends Component {
  constructor() {
    super({ tagName: 'header', classNames: [styles.header] });

    const menuButton = new ButtonIcon({ svg: MenuIcon });
    this.append(menuButton);
  }
}
