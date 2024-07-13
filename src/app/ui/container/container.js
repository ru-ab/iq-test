import { Component } from '../component/component';

export class Container extends Component {
  constructor({ classNames, children = [] }) {
    super({ tagName: 'div', classNames });

    this.append(...children);
  }
}
