import { useState } from "react";
import { ObserverComponent } from "./observer/observer.component";
import { getRepos } from "./repos.service";
import { Endpoints } from "@octokit/types";
import "./web.component.css";

export function RepoListComponent() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] =
    useState<Endpoints["GET /users/{username}/repos"]["response"]["data"]>();

  async function addPageToList(page: number) {
    await getRepos(page).then((res) => {
      if (res.length) {
        console.log("ola")
        setRepos([...(repos ?? []), ...res]);
      } else {
        setLoading(false);
      }
    });
  }

  function recievePage(page: number) {
    addPageToList(page);
  }

  return (
    <section className="infinite-scrolling-container">
      <ul className="repo-list">
        {repos?.map((repo, i) => {
          return (
            <li className="repo-card" key={i}>
              {/* <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${repo.language?.toLowerCase()}/${repo.language?.toLowerCase()}-original.svg`} /> */}
              <a className="repo-url" target="_blank" href={repo.html_url}>
                <span className="repo-name">{repo.name}</span>
              </a>
              <span className="repo-description">{repo.description}</span>
            </li>
          );
        })}
      </ul>
      <ObserverComponent display={loading} recievePage={recievePage} />
    </section>
  );
}
