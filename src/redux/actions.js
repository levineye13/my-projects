import { SET_USER, SET_PROJECTS } from './actionTypes';

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
