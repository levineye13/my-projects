import { SET_USER } from '../actionTypes';

const initialState = {
  name: 'name',
  email: 'email',
  avatarUrl: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
