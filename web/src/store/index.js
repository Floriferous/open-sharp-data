import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import createRootReducer from '../reducers';

const configureStore = () => {
  const rootReducer = createRootReducer();
  const initialStore = {};
  const middleWares = [thunk];

  return createStore(rootReducer, initialStore, applyMiddleware(...middleWares));
};

export default configureStore;
