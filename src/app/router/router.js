class Router {
  constructor() {
    window.addEventListener('popstate', () => {
      this.navigate(window.location.pathname);
    });

    this.routes = [];
    this.root = document.createElement('div');
    document.body.append(this.root);
  }

  addRoute(path, component) {
    this.routes.push({ path, component });
  }

  setDefaultRoute(path) {
    this.defaultRouteName = path;
  }

  navigate(path) {
    let route = this.routes.find((r) => r.path === path);
    if (!route) {
      route = this.routes.find((r) => r.path === this.defaultRouteName) || this.routes[0];
    }

    this.cleanRoot();
    window.history.pushState({}, '', route.path);
    this.root.appendChild(route.component.render());
  }

  back() {
    window.history.back();
  }

  cleanRoot() {
    while (this.root.firstChild) {
      this.root.removeChild(this.root.firstChild);
    }
  }
}

export const router = new Router();
