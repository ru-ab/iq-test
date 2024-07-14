import { Component } from '../component/component';

export class Link extends Component {
  constructor({ href, classNames, onClick, children = [] }) {
    super({ tagName: 'a', classNames });

    this.element.href = href || '#';

    if (onClick) {
      this.element.addEventListener('click', onClick);
    }

    this.append(...children);
  }
}
