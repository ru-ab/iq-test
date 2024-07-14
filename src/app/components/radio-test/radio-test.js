import { testState } from '../../state/test.state';
import { Button, Container, Paragraph, Radio } from '../../ui';
import * as styles from './radio-test.module.css';

export class RadioTest extends Container {
  constructor({ test }) {
    super({ classNames: [styles['radio-test']] });

    let selectedAnswer;

    const nextButton = new Button({
      text: 'далее',
      disabled: true,
      onClick: () => testState.nextTest(selectedAnswer),
      classNames: [styles.button],
    });

    const radios = test.answers.map(
      (answer) =>
        new Radio({
          label: answer.label,
          name: test.id,
          size: test.answers.length > 5 ? 'small' : null,
          onClick: () => {
            selectedAnswer = answer;
            nextButton.setDisabled(false);
          },
        })
    );

    this.append(
      new Paragraph({ text: test.question, classNames: [styles.question] }),
      new Container({ classNames: [styles.answers], children: [...radios] }),
      nextButton
    );
  }
}
