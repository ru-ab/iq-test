import { Header } from '../../components';
import { Container, Image, Paragraph } from '../../ui';
import * as styles from './test-page.module.css';
import BrainImage from '../../assets/images/brain.png';

export class TestPage extends Container {
  constructor() {
    super({ classNames: [styles.page] });

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
      })
    );
  }
}
