import { combineReducers } from 'redux';
import auth from './authReducer';
import account from './accountReducer';


export default combineReducers({
  auth,
  account,
});
