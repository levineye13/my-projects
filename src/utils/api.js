class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkValitidyRequest(responce) {
    if (responce.ok) {
      return responce.json();
    }
    return Promise.reject(new Error(`Ошибка: ${responce.status}`));
  }

  async getGithubUserInfo() {
    const responce = await fetch(`${this._baseUrl}levineye13`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = this._checkValitidyRequest(responce);

    return json;
  }

  async getGithubProjects() {
    const responce = await fetch(`${this._baseUrl}levineye13/repos`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = this._checkValitidyRequest(responce);

    return json;
  }
}

const api = new Api({
  baseUrl: 'https://api.github.com/users/',
});

export { api };
