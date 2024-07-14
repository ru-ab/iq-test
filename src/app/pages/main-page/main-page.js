import { Header, MoreButton } from '../../components';
import { Component, Container, Paragraph, Image, Button, Svg } from '../../ui';
import * as styles from './main-page.module.css';
import BrainImage from '../../assets/images/brain.png';
import BrainSectionsImage from './images/brain-sections.png';
import LightningImage from '../../assets/images/lightning.png';
import QuotationSvg from './icons/quotation-mark.svg';
import { router } from '../../router/router';

export class MainPage extends Component {
  constructor() {
    super({ tagName: 'div', classNames: [styles.page] });

    const navigateToTest = () => router.navigate('/test');

    this.append(new Header({}));
    this.append(
      new Container({
        classNames: [styles['stars-section']],
        children: [
          new Paragraph({ text: 'Пройдите точный и быстрый', classNames: [styles.text1] }),
          new Paragraph({ text: 'тест на определение IQ', classNames: [styles.text2] }),
          new Image({ image: BrainImage, classNames: [styles.brain] }),
          new Button({ text: 'пройти тест', onClick: navigateToTest }),
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
      }),
      new Container({
        classNames: [styles['white-section']],
        children: [
          new Paragraph({
            html: 'Также по результатам теста\n <strong>ВЫ ПОЛУЧИТЕ</strong> подробные <strong>СОВЕТЫ</strong> по определению наиболее перспективной <strong>ДЛЯ ВАШЕГО ТИПА интеллекта СФЕРЫ ДЕЯТЕЛЬНОСТИ,</strong>\n которая принесет вам скорейший финансовый результат.',
            classNames: [styles.text1],
          }),
          new Image({ image: BrainSectionsImage, classNames: [styles['brain-sections']] }),
          new Button({ text: 'пройти тест', onClick: navigateToTest }),
        ],
      }),
      new Container({
        classNames: [styles['lightning-section']],
        children: [
          new Image({ image: LightningImage, classNames: [styles.lightning1] }),
          new Image({ image: LightningImage, classNames: [styles.lightning2] }),
          new Paragraph({
            html: 'Прохождение теста займет у вас не более <span>12 минут</span>, а его результаты вы сможете <span>использовать всю жизнь.</span>',
            classNames: [styles.text1],
          }),
          new Paragraph({
            html: 'Профессиональная интерпретация и детально <strong>проработанные рекомендации</strong> позволят вам качественно <strong>изменить все аспекты своей жизни:</strong> от финансового до любовного.',
            classNames: [styles.text2],
          }),
          new Button({ text: 'пройти тест', classNames: [styles.button], onClick: navigateToTest }),
          new Paragraph({
            html: '© 2019',
            classNames: [styles.footer],
          }),
        ],
      })
    );
  }
}
