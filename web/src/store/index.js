import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';

import createRootReducer from '../reducers';

export const history = createHistory();

const configureStore = () => {
  const rootReducer = createRootReducer();
  const initialStore = {};
  const middleWares = [];

  middleWares.push(thunk);
  middleWares.push(routerMiddleware(history));

  if (process.env.NODE_ENV !== 'production') {
    const logger = createLogger();
    middleWares.push(logger);
  }

  return createStore(rootReducer, initialStore, applyMiddleware(...middleWares));
};

export default configureStore;
