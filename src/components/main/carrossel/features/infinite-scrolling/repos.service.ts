import { Endpoints } from '@octokit/types';
import { Octokit } from 'octokit';

export async function getRepos(page: number) {

    const ocktokit = new Octokit({ auth: "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" });

    const repos: Endpoints["GET /users/{username}/repos"]["response"] = await ocktokit.request("GET /users/{username}/repos", {
        per_page: 10,
        username: "henrique307",
        page,
    })

    return repos.data

}