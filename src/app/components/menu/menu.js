import { ButtonIcon, Container, Link, List } from '../../ui';
import * as styles from './menu.module.css';
import CrossIcon from './icons/cross.svg';
import { router } from '../../router/router';

export class Menu extends Container {
  constructor() {
    super({ classNames: [styles.menu, styles.hidden] });

    const crossButton = new ButtonIcon({
      svg: CrossIcon,
      classNames: [styles.button],
      onClick: () => this.close(),
    });
    this.append(crossButton);

    const menuList = new List({
      classNames: [styles['menu-list']],
      children: [
        new Link({
          classNames: [styles.link],
          onClick: (event) => {
            event.preventDefault();
            router.navigate('/');
            this.close();
          },
          children: ['Главная'],
        }),
        new Link({
          classNames: [styles.link],
          onClick: (event) => {
            event.preventDefault();
            router.navigate('/');
            this.close();
          },
          children: ['Информация о тесте'],
        }),
        new Link({
          classNames: [styles.link, styles.yellow],
          onClick: (event) => {
            event.preventDefault();
            router.navigate('/test');
            this.close();
          },
          children: ['пройти тест'],
        }),
      ],
    });
    this.append(menuList);
  }

  open() {
    document.body.style.setProperty('overflow', 'hidden');
    this.removeClassName(styles.hidden);
  }

  close() {
    document.body.style.removeProperty('overflow');
    this.addClassNames([styles.hidden]);
  }
}
