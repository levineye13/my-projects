import { SET_LANGUAGE, SET_USER, GET_TOKEN, SET_PROJECTS } from './actionTypes';

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});

export const setUser =
  ({ api, token }) =>
  async (dispatch) => {
    const user = await api.getUser(token);

    dispatch({
      type: SET_USER,
      payload: {
        name: user.name,
        email: user.email,
        avatarUrl: user.avatar_url,
      },
    });
  };

export const getToken =
  ({ api, callback }) =>
  async (dispatch) => {
    let token = null;

    try {
      const res = await api.getToken();
      token = res.token;
    } catch (err) {
      console.error(err);
    }

    dispatch({
      type: GET_TOKEN,
      payload: token,
    });

    if (typeof callback === 'function') {
      callback(token);
    }
  };

export const setProjects =
  ({ api, token, reposToDisplay }) =>
  async (dispatch) => {
    const repos = await api.getRepositories(token);

    const displayedProjects = repos.filter((item) =>
      reposToDisplay.includes(item.name)
    );

    dispatch({
      type: SET_PROJECTS,
      payload: [...displayedProjects],
    });
  };
