import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import file from './file';

const createRootReducer = () => combineReducers({ file, router: routerReducer });

export default createRootReducer;
