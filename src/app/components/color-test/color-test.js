import { testState } from '../../state/test.state';
import { Button, Container, Paragraph } from '../../ui';
import { ColorSelect } from '../../ui/color-select/color-select';
import * as styles from './color-test.module.css';

export class ColorTest extends Container {
  constructor({ test }) {
    super({ classNames: [styles['color-test']] });

    let selectedAnswer;

    const nextButton = new Button({
      text: 'далее',
      disabled: true,
      onClick: () => testState.nextTest(selectedAnswer),
      classNames: [styles.button],
    });

    const boxes = test.answers.map(
      (answer) =>
        new ColorSelect({
          name: test.id,
          color: answer.label,
          onClick: () => {
            selectedAnswer = answer;
            nextButton.setDisabled(false);
          },
        })
    );

    this.append(
      new Paragraph({ text: test.question, classNames: [styles.question] }),
      new Container({ classNames: [styles.answers], children: boxes }),
      nextButton
    );
  }
}
