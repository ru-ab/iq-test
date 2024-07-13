import { Component } from '../component/component';

export class Paragraph extends Component {
  constructor({ text = '', html = '', classNames }) {
    super({ tagName: 'p', classNames });

    if (text) {
      this.element.textContent = text;
    } else {
      this.element.innerHTML = html;
    }
  }
}
