import { Header } from '../../components';
import { Component } from '../../ui';

export class MainPage extends Component {
  constructor() {
    super({ tagName: 'div' });

    const header = new Header();
    this.append(header);
  }
}
