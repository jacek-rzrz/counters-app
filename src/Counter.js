import React from 'react';
import { connect } from 'react-redux';

export class Counter extends React.Component {

  render() {
    const value = this.props.value;
    const handleIncrementClick = this.props.handleIncrementClick;
    return (<div>
        <span data-qa="counter-value">{value}</span>
        <button onClick={handleIncrementClick} data-qa="counter-value-inc">+</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    value: state
  };
};

const mapDispatchToProps = dispatch => {

  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' })
  };
};


export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
