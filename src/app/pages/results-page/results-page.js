import { CallButton, Header } from '../../components';
import { Container, Image, Paragraph } from '../../ui';
import * as styles from './results-page.module.css';
import BrainImage from '../../assets/images/brain.png';
import LightningImage from '../../assets/images/lightning.png';

export class ResultsPage extends Container {
  constructor() {
    super({ classNames: [styles.page] });

    this.timerComponent = new Paragraph({
      classNames: [styles.timer],
    });

    this.callResults = new Container({ classNames: [styles.results] });

    this.callButton = new CallButton({
      classNames: [styles.button],
      onClick: async () => {
        try {
          this.callResults.removeChildren();
          this.callButton.setDisabled(true);
          const response = await fetch('https://swapi.dev/api/people/1/');
          const data = await response.json();

          this.callResults.append(
            new Paragraph({ text: 'Имя' }),
            new Paragraph({ text: data.name }),
            new Paragraph({ text: 'День рождения' }),
            new Paragraph({ text: data.birth_year }),
            new Paragraph({ text: 'Пол' }),
            new Paragraph({ text: data.gender }),
            new Paragraph({ text: 'Цвет волос' }),
            new Paragraph({ text: data.hair_color }),
            new Paragraph({ text: 'Цвет глаз' }),
            new Paragraph({ text: data.eye_color }),
            new Paragraph({ text: 'Рост' }),
            new Paragraph({ text: data.height }),
            new Paragraph({ text: 'Вес' }),
            new Paragraph({ text: data.mass }),
            new Paragraph({ text: 'Цвет кожи' }),
            new Paragraph({ text: data.skin_color }),
            new Paragraph({ text: 'Дата редактирования' }),
            new Paragraph({ text: new Date(data.edited).toLocaleString('ru-RU') }),
            new Paragraph({ text: 'Дата создания' }),
            new Paragraph({ text: new Date(data.created).toLocaleString('ru-RU') })
          );

          clearInterval(this.intervalId);
        } catch (error) {
          this.callButton.setDisabled(false);
          this.callResults.append(
            new Paragraph({ text: error.message, classNames: [styles['results-error']] })
          );
        }
      },
    });

    this.append(
      new Header({
        children: [
          new Container({
            classNames: [styles.title],
            children: [
              new Image({ image: BrainImage, classNames: [styles.brain] }),
              new Paragraph({ text: 'готово!', classNames: [styles.text] }),
            ],
          }),
        ],
      }),
      new Container({
        classNames: [styles.container],
        children: [
          new Image({ image: LightningImage, classNames: [styles.lightning1] }),
          new Image({ image: LightningImage, classNames: [styles.lightning2] }),
          new Paragraph({ text: 'Ваш результат рассчитан:', classNames: [styles.text1] }),
          new Paragraph({
            html: '<span>Вы относитесь к 3%</span> респондентов, чей уровень интеллекта более чем на 15 пунктов отличается от среднего в большую или меньшую сторону! ',
            classNames: [styles.text2],
          }),
          new Paragraph({ text: 'Скорее получите свой результат!', classNames: [styles.text3] }),
          new Paragraph({
            text: 'В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона',
            classNames: [styles.text4],
          }),
          new Paragraph({
            text: 'Звоните скорее, запись доступна всего',
            classNames: [styles.text5],
          }),
          this.timerComponent,
          this.callButton,
          this.callResults,
          new Paragraph({
            classNames: [styles.footer],
            text: 'TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 ANI IMPLINITI,',
          }),
        ],
      })
    );
  }

  onEnter() {
    clearInterval(this.intervalId);
    this.timerComponent.setHtml('<span>10:00</span> МИНУТ');
    this.callButton.setDisabled(false);
    this.callResults.removeChildren();

    const end = new Date().setMinutes(new Date().getMinutes() + 10);
    const intl = new Intl.DateTimeFormat('ru-RU', { minute: 'numeric', second: 'numeric' });
    this.intervalId = setInterval(() => {
      const delta = end - new Date();
      if (delta < 0) {
        this.timerComponent.setHtml(`<span>00:00</span> МИНУТ`);
        clearInterval(this.intervalId);
        this.callButton.setDisabled(true);
        return;
      }
      const time = intl.format(delta);
      this.timerComponent.setHtml(`<span>${time}</span> МИНУТ`);
    }, 999);
  }
}
