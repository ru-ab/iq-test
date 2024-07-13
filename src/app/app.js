import { router } from './router/router';
import { MainPage } from './pages';
import { Component } from './ui';
import './app.css';

export class App extends Component {
  constructor() {
    super({ tagName: 'div' });
  }

  async init() {
    this.addRoutes();
    router.navigate('/main');
  }

  addRoutes() {
    router.setDefaultRoute('/main');
    router.addRoute('/main', new MainPage());
  }
}
