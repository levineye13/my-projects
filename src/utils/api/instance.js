import axios from 'axios';

import { GITHUB_API_BASE_URL, MAIN_API_BASE_URL } from '../constants';

const mainApiInstance = axios.create({
  baseURL: MAIN_API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  validateStatus: (status) => status >= 200 && status < 300,
});

const githubApiInstance = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
  validateStatus: (status) => status >= 200 && status < 300,
});

export { mainApiInstance, githubApiInstance };
