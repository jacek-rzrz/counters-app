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

    describe('when a minus button is clicked', () => {

        it('Decrements the counter value', () => {
            appTestView.clickDecrementCounter();

            expect(appTestView.getCounterValue()).toHaveText('0');
        });

    });

    describe('when the reset button is clicked', () => {

        it('resets the counter value', () => {
            appTestView.clickResetCounter();

            expect(appTestView.getCounterValue()).toHaveText('0');
        });

    });

});
