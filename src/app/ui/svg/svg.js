import { Component } from '../component/component';

export class Svg extends Component {
  constructor({ svg, classNames }) {
    super({ tagName: 'div', classNames });

    this.element.innerHTML = svg;
  }
}
