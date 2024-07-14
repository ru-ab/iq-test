import { router } from './router/router';
import { MainPage, TestPage } from './pages';
import { Component } from './ui';
import './app.css';

export class App extends Component {
  constructor() {
    super({ tagName: 'div' });
  }

  async init() {
    this.addRoutes();
    router.navigate('/test');
  }

  addRoutes() {
    router.setDefaultRoute('/');
    router.addRoute('/', new MainPage());
    router.addRoute('/test', new TestPage());
  }
}
