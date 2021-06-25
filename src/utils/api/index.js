import { mainApiInstance, githubApiInstance } from './instance';
import { MainApi } from './mainApi';
import { GitHubApi } from './gitHubApi';

const mainApi = MainApi(mainApiInstance);
const githubApi = GitHubApi(githubApiInstance);

export { mainApi, githubApi };
