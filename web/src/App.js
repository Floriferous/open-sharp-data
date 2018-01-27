import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import HomeView from './views/HomeView';
import DataView from './views/DataView';

export const HOME_VIEW_LINK = '/';
export const DATA_VIEW_LINK = '/data';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={HOME_VIEW_LINK} component={HomeView} />
      <Route exact path={DATA_VIEW_LINK} component={DataView} />
    </Switch>
  </BrowserRouter>
);

export default App;
