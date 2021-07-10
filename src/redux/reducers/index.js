import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { projectReducer } from './projectReducer';
import { translationReducer } from './translationReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  projects: projectReducer,
  language: translationReducer,
});
