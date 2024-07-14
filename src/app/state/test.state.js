import { tests } from './tests';

class TestState {
  constructor() {
    this.observers = {};
    this.tests = tests;
    this.answers = [];
    this.currentTest = 0;
  }

  nextTest(answer) {
    this.answers.push({ test: this.getCurrentTest(), answer });
    this.currentTest += 1;

    if (this.currentTest < this.tests.length) {
      this.dispatch('next', this.getCurrentTest());
    } else {
      this.dispatch('finish');
    }
  }

  getCurrentTest() {
    return this.tests[this.currentTest];
  }

  getCurrentTestIndex() {
    return this.currentTest;
  }

  getProgress() {
    return this.currentTest / this.tests.length;
  }

  on(eventType, fn) {
    if (!this.observers[eventType]) {
      this.observers[eventType] = [];
    }

    this.observers[eventType].push(fn);
  }

  dispatch(eventType, data) {
    if (!this.observers[eventType]) {
      return;
    }

    this.observers[eventType].forEach((fn) => fn(data));
  }
}

export const testState = new TestState();
