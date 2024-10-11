export interface GithubRepo {
  fullName: string;
  name: string;
  owner: string;
}

export type ListGithubReposResponse = GithubRepo[];
