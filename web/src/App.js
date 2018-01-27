import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import HomeView from './views/HomeView';
import DataView from './views/DataView';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/data" component={DataView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
