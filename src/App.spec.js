import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import { AppTestView } from './test_support/AppTestView';

describe('Counters App', () => {

  let appTestView;

  beforeEach(() => {
    const screen = mount(<App />);
    appTestView = new AppTestView(screen);
  });

  it('renders a counter with initial value 1', () => {
    expect(appTestView.getCounterValue()).toHaveText('1');
  });

  describe('when a plus button is clicked', () => {

    it('increments the counter value', () => {
      appTestView.clickIncrementCounter();

      expect(appTestView.getCounterValue()).toHaveText('2');
    });

  });

});
