import { Header, MoreButton } from '../../components';
import { Component, Container, Paragraph, Image, Button, Svg } from '../../ui';
import * as styles from './main-page.module.css';
import BrainImage from './images/brain.png';
import QuotationSvg from './icons/quotation-mark.svg';

export class MainPage extends Component {
  constructor() {
    super({ tagName: 'div', classNames: [styles.page] });

    this.append(new Header());
    this.append(
      new Container({
        classNames: [styles['stars-section']],
        children: [
          new Paragraph({ text: 'Пройдите точный и быстрый', classNames: [styles.text1] }),
          new Paragraph({ text: 'тест на определение IQ', classNames: [styles.text2] }),
          new Image({ image: BrainImage, classNames: [styles.brain] }),
          new Button({ text: 'пРойти тест' }),
          new Container({
            children: [
              new Paragraph({
                text: 'И получите рекомендации \n по развитию своего интеллекта',
                classNames: [styles.text3],
              }),
              new Paragraph({
                text: 'и улучшению финансового благосостояния и личной жизни',
                classNames: [styles.text4],
              }),
            ],
          }),
          new MoreButton({ classNames: [styles.more] }),
        ],
      }),
      new Container({
        classNames: [styles['quotation-section']],
        children: [
          new Svg({ svg: QuotationSvg, classNames: [styles['quotation-start']] }),
          new Paragraph({
            text: 'Профессиональный\n IQ-тест позволяет не только определить коэффициент вашего интеллекта,\n но и выработать список рекомендаций для повышения этого показателя. ',
            classNames: [styles.text1],
          }),
          new Svg({ svg: QuotationSvg, classNames: [styles['quotation-end']] }),
        ],
      })
    );
  }
}
