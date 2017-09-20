import { combineReducers } from 'redux';
import usersReducer from './users';
import devicesReducer from './devices';

const rootReducer = combineReducers({
  users: usersReducer,
  devices: devicesReducer
});

export default rootReducer;
