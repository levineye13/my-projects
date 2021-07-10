import { SET_LANGUAGE } from '../actionTypes';

const initialLanguage = 'ru';

export const translationReducer = (state = initialLanguage, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.payload;

    default:
      return state;
  }
};
