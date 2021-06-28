import { handleError } from './errorHandler';

const GitHubApi = (instance) => {
  const getUser = async (token) => {
    try {
      instance.defaults.headers.common['Authorization'] = `token ${token}`;
      const res = await instance.get('/user');
      return res.data;
    } catch (err) {
      handleError(err);
    }
  };

  const getRepositories = async (token) => {
    try {
      instance.defaults.headers.common['Authorization'] = `token ${token}`;
      const res = await instance.get('/user/repos');
      return res.data;
    } catch (err) {
      handleError(err);
    }
  };

  return {
    getUser,
    getRepositories,
  };
};

export { GitHubApi };
