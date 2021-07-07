import { SET_USER, GET_TOKEN } from '../actionTypes';

const initialState = {
  name: 'name',
  email: 'email',
  avatarUrl: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };

    case GET_TOKEN:
      return { ...state, token: action.payload };

    default:
      return state;
  }
};
