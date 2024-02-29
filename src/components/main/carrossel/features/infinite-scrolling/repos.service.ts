import { Endpoints } from '@octokit/types';
import { Octokit } from 'octokit';

export async function getRepos(page: number) {

    const ocktokit = new Octokit({ auth: process.env.GH_CREDENTIALS });

    const repos: Endpoints["GET /users/{username}/repos"]["response"] = await ocktokit.request("GET /users/{username}/repos", {
        per_page: 10,
        username: "henrique307",
        page,
    })

    return repos.data

}