import { Component } from '../component/component';

export class Image extends Component {
  constructor({ image, classNames }) {
    super({ tagName: 'img', classNames });

    this.element.src = image;
  }
}
