import { testState } from '../../state/test.state';
import { Button, ButtonSelect, Container, Image, Paragraph } from '../../ui';
import * as styles from './button-test.module.css';

export class ButtonTest extends Container {
  constructor({ test }) {
    super({ classNames: [styles.test] });

    let selectedAnswer;

    const nextButton = new Button({
      text: 'далее',
      disabled: true,
      onClick: () => testState.nextTest(selectedAnswer),
      classNames: [styles.button],
    });

    const buttons = test.answers.map(
      (answer) =>
        new ButtonSelect({
          label: answer.label,
          name: test.id,
          onClick: () => {
            selectedAnswer = answer;
            nextButton.setDisabled(false);
          },
        })
    );

    this.append(
      new Paragraph({ text: test.question, classNames: [styles.question] }),
      new Image({ image: test.image }),
      new Container({ classNames: [styles.answers], children: buttons }),
      nextButton
    );
  }
}
