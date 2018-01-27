import { combineReducers } from 'redux';

import file from './file';

const createRootReducer = () => combineReducers({ file });

export default createRootReducer;
