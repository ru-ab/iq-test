import { Component, ButtonIcon } from '../../ui';
import { Menu } from '../menu/menu';
import * as styles from './header.module.css';
import MenuIcon from './icons/menu.svg';

export class Header extends Component {
  constructor({ children = [] }) {
    super({ tagName: 'header', classNames: [styles.header] });

    const menu = new Menu();

    const menuButton = new ButtonIcon({
      svg: MenuIcon,
      classNames: [styles.button],
      onClick: () => menu.open(),
    });
    this.append(menuButton, menu, ...children);
  }
}
