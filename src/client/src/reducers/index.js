// @flow
import { combineReducers } from 'redux';

import auth from './auth';
import rdLoginReducer from './loginReducer';
//import loaddata from './loaddata';

const rootReducer = combineReducers({
  auth,
  rdLoginReducer
  //loaddata
});

export default rootReducer;
