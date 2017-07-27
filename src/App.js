import React, { Component } from 'react';
import { ConnectedCounter } from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';

const reducer = (state = 1, action) => {

    if(action.type === 'INCREMENT') {
        return state+1;
    }

    if(action.type === 'DECREMENT') {
        return state-1;
    }

    if(action.type === 'RESET') {
        return 0;
    }

    return state;
};


class App extends Component {

  constructor(props) {
    super(props);
    this.store = createStore(reducer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to the Counters App</h1>
          </div>
          <ConnectedCounter />
        </div>
      </Provider>
    );
  }
}

export default App;
