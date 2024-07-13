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
    router.navigate('/');
  }

  addRoutes() {
    router.setDefaultRoute('/');
    router.addRoute('/', new MainPage());
  }
}
