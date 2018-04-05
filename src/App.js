import React, { Component } from 'react';

import WithoutDecorator from './WithoutDecorator';
import WithDecorator from './WithDecorator';

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
          <WithDecorator />
        </div>
      </div>
    );
  }
}

export default App;
