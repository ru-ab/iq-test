import { router } from './router/router';
import { MainPage, ResultsPage, TestPage } from './pages';
import { Component } from './ui';
import './app.css';

export class App extends Component {
  constructor() {
    super({ tagName: 'div' });
  }

  async init() {
    this.addRoutes();

    const { pathname } = window.location;
    if (pathname === '/test') {
      router.navigate('/test');
      return;
    }

    router.navigate('/');
  }

  addRoutes() {
    router.setDefaultRoute('/');
    router.addRoute('/', new MainPage());
    router.addRoute('/test', new TestPage());
    router.addRoute('/results', new ResultsPage());
  }
}
