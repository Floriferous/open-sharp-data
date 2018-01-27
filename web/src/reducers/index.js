import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import file from './file';
import chart from './chart';

const createRootReducer = () => combineReducers({ file, chart, router: routerReducer });

export default createRootReducer;
