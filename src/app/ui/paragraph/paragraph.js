import { Component } from '../component/component';

export class Paragraph extends Component {
  constructor({ text = '', classNames }) {
    super({ tagName: 'p', classNames });

    this.element.textContent = text;
  }
}
