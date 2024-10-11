import { Client } from "@/Client";
import { ListGithubReposResponse } from "./github.types";

export class GithubManager {
  constructor(private client: Client) {}

  async listRepos() {
    const { data } = await this.client.http.get<ListGithubReposResponse>(
      "/github.listRepos"
    );

    return data;
  }
}
