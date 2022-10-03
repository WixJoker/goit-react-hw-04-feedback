import React, { useState } from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';
import { Global } from '@emotion/react';
import { GlobalStyles } from '../App/GlobalStyles.styled';
import { Container } from '../App/Container.styled';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = state;

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return parseInt((good / countTotalFeedback()) * 100);
  };

  const clickOnBtnFeedback = event => {
    const target = event.currentTarget.name;
    return setState({ ...state, ...{ [target]: state[target] + 1 } });
  };

  const stateKeys = Object.keys(state);
  return (
    <>
      <Global styles={GlobalStyles} />
      <Container>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={clickOnBtnFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePesnt={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    </>
  );
};

export default App;
