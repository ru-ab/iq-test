import { ColorTest, Header, RadioTest } from '../../components';
import { Container, Image, Paragraph, ProgressBar } from '../../ui';
import * as styles from './test-page.module.css';
import BrainImage from '../../assets/images/brain.png';
import { testState } from '../../state/test.state';

export class TestPage extends Container {
  constructor() {
    super({ classNames: [styles.page] });

    this.progressBar = new ProgressBar({ classNames: [styles['progress-bar']] });
    this.container = new Container({
      classNames: [styles.container],
    });

    this.append(
      new Header({
        children: [
          new Container({
            classNames: [styles.title],
            children: [
              new Image({ image: BrainImage, classNames: [styles.brain] }),
              new Paragraph({ text: 'тест на определение IQ', classNames: [styles.text] }),
            ],
          }),
        ],
      }),
      this.container
    );

    this.createTest(testState.getCurrentTest());

    testState.on('next', (test) => {
      this.createTest(test);
    });
  }

  createTest(test) {
    this.container.removeChildren();
    this.container.append(this.progressBar, this.createTestComponent(test));
    this.progressBar.setValue(testState.getProgress());
  }

  createTestComponent(test) {
    switch (test.type) {
      case 'radio': {
        return new RadioTest({ test });
      }
      case 'color': {
        return new ColorTest({ test });
      }
      default: {
        throw new Error('Unknown test type!');
      }
    }
  }
}
