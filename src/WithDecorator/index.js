import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class WithDecorator extends Component {
  onIncrement = () => {
    this.props.store.increment();
  };

  onDecrement = () => {
    this.props.store.decrement();
  };

  render() {
    console.log('hey');
    return (
      <div>
        {this.props.store.count}

        <button onClick={this.onIncrement} type="button">
          Increment
        </button>
        <button onClick={this.onDecrement} type="button">
          Decrement
        </button>
      </div>
    );
  }
}

export default WithDecorator;
