import { Container, Loader, Paragraph } from '../../ui';
import * as styles from './processing.module.css';

export class Processing extends Container {
  constructor() {
    super({ classNames: [styles.processing] });

    this.append(
      new Paragraph({ text: 'Обработка результатов', classNames: [styles.text] }),
      new Loader({ classNames: [styles.loader] }),
      new Paragraph({
        text: 'Определение стиля мышления..................................................................',
        classNames: [styles['small-text']],
      })
    );
  }
}
