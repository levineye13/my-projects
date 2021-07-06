import { SET_PROJECTS } from '../actionTypes';

const initialState = [];

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return [...state, ...action.payload];

    default:
      return state;
  }
};
