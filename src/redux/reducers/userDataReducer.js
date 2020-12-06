import { SET_USER_DATA } from './../actionTypes';

const initialState = {
  name: 'name',
  email: 'email',
  avatar_url: '',
};

export const userDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...action.payload };

    default:
      return state;
  }
};
