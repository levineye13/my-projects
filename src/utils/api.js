import { GITHUB_API_BASE_URL, HTTP_METHODS } from './constants';

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkRequest(responce) {
    if (responce.ok) {
      return responce.json();
    }
    return Promise.reject(new Error(`Ошибка: ${responce.status}`));
  }

  async getUser() {
    const responce = await fetch(`${this._baseUrl}/user`, {
      method: HTTP_METHODS.GET,
      headers: this._headers,
    });
    const json = this._checkRequest(responce);

    return json;
  }

  async getRepositories() {
    const responce = await fetch(`${this._baseUrl}/user/repos`, {
      method: HTTP_METHODS.GET,
      headers: this._headers,
    });
    const json = this._checkRequest(responce);

    return json;
  }
}

const api = new Api({
  baseUrl: GITHUB_API_BASE_URL,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export { api };
