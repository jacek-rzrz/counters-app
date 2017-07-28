import React from 'react';
import { connect } from 'react-redux';

export class Counter extends React.Component {

    render() {
        const value = this.props.value;
        const handleIncrementClick = this.props.handleIncrementClick;
        const handleDecrementClick = this.props.handleDecrementClick;
        const handleResetClick = this.props.handleResetClick;
        return (
            <div>
              <span data-qa="counter-value">{value}</span>
              <button onClick={handleIncrementClick} data-qa="counter-value-inc"> + </button>
              <button onClick={handleDecrementClick} data-qa="counter-value-dec"> - </button>
              <button onClick={handleResetClick} data-qa="counter-value-reset">Reset</button>
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
      handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
      handleDecrementClick: () => dispatch({ type: 'DECREMENT' }),
      handleResetClick: () => dispatch({ type: 'RESET' }),
  };
};


export const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
