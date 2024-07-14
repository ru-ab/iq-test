export class Component {
  constructor({ tagName, classNames }) {
    this.element = document.createElement(tagName);
    this.addClassNames(classNames);
  }

  render() {
    return this.element;
  }

  append(...components) {
    components.forEach((component) =>
      this.element.appendChild(
        typeof component === 'string' ? document.createTextNode(component) : component.render()
      )
    );
  }

  removeChildren() {
    while (this.element.firstChild) {
      this.element.removeChild(this.element.firstChild);
    }
  }

  removeChild(component) {
    this.element.removeChild(component.element);
  }

  addClassNames(classNames) {
    if (!Array.isArray(classNames)) {
      return;
    }

    this.element.classList.add(...classNames);
  }

  removeClassName(className) {
    this.element.classList.remove(className);
  }

  onEnter() {}
}
