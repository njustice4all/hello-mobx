import React, { Component } from 'react';
import { observable } from 'mobx';

import WithoutDecorator from './WithoutDecorator';
import WithDecorator from './WithDecorator';

const appState = observable({
  count: 0,
});

appState.increment = function() {
  this.count++;
};

appState.decrement = function() {
  this.count--;
};

class App extends Component {
  render() {
    return (
      <div>
        <h1>Without Decorator</h1>
        <div>
          <WithoutDecorator />
        </div>
        <h1>With Decorator</h1>
        <div>
          <WithDecorator store={appState} />
        </div>
      </div>
    );
  }
}

export default App;
