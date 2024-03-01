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
        console.log("ola");
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
      <img
        className="github-stats"
        src="https://github-readme-stats.vercel.app/api?username=henrique307&show_icons=true&layout=compact&custom_title=%20Github%20Stats&theme=graywhite&include_all_commits=true&hide=contribs"
      />
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
