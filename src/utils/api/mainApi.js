import { handleError } from './errorHandler';

const MainApi = (instance) => {
  const getToken = async () => {
    try {
      const res = await instance.get('/user');
      return res.data;
    } catch (err) {
      handleError(err);
    }
  };

  return {
    getToken,
  };
};

export { MainApi };
