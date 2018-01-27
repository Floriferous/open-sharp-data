import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';

import HomeView from './views/HomeView';
import DataView from './views/DataView';
import createStore from './store';

export const HOME_VIEW_LINK = '/';
export const DATA_VIEW_LINK = '/data';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path={HOME_VIEW_LINK} component={HomeView} />
        <Route exact path={DATA_VIEW_LINK} component={DataView} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
