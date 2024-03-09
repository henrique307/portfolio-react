import { useState } from "react";
import { ObserverComponent } from "./components/observer/observer";
import { Endpoints } from "@octokit/types";
import content from "./utils/content.json";
import "./reposList.css";
import { PhotoComponent } from "./components/photo/photo";

export function RepoListComponent() {
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState<typeof content.photos>([]);
  
  async function addPageToList(page: number) {
    const photosPerPage = 12;
    const currentPage = content.photos.slice(
      (page - 1) * photosPerPage,
      photosPerPage * page
    );
    
    console.log(currentPage)

    if(!currentPage.length) setLoading(false)
      
      setPhotos([...photos, ...currentPage]);
    }
    
    function recievePage(page: number) {
    addPageToList(page);
  }

  return (
    <section className="project" id="aplicacoesWeb">
      <div className="project-title-container">
        <h2 className="project-title">Aplicações Web</h2>
      </div>
      <p className="project-description">
        Tratamento de imagens e galerias para melhor apresentção ao usuário, aplicando as
        melhores práticas de desenvolvimento visando sempre a melhor experiencia!
      </p>
      <div className="feature-container">
        <section className="infinite-scrolling-container">
          <ul className="images-list">
            {photos.map((photo, i) => {
              return <PhotoComponent photo={photo} i={i} />;
            })}
          </ul>
          <ObserverComponent display={loading} recievePage={recievePage} />
        </section>
      </div>
    </section>
  );
}
