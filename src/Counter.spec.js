import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { click } from './test_support/click';
import { Counter, ConnectedCounter } from './Counter';

const mockStore = configureStore();

describe('Counter', () => {

  it('renders the value', () => {
    const counter = mount(<Counter value={8} />);
    expect(counter.find('[data-qa="counter-value"]')).toHaveText('8');
  });

});

describe('ConnectedCounter', () => {

  let store, counter;

  beforeEach(() => {
    store = mockStore(10);
    counter = mount(<Provider store={store}><ConnectedCounter /></Provider>);
  });

  it('renders a counter with value from Redux', () => {
      expect(counter.find('[data-qa="counter-value"]')).toHaveText('10');
  });

  describe('when increment button is clicked', () => {

    beforeEach(() => {
      click(counter.find('[data-qa="counter-value-inc"]'));
    });

    it('dispatches INCREMENT action', () => {
      expect(store.getActions()).toContainEqual({ type: 'INCREMENT' });
    });

  });

});
