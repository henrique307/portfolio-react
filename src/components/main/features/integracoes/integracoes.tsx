// import telegram from "./assets/telegram.svg";
import { skills } from "./utils/skill";
import "./integracoes.css";
import { TextField } from "@mui/material";

export function IntegracoesComponent() {
  return (
    <section className="project" id="oQueFaco">
      <div className="project-title-container">
        <h2 className="project-title">O que faço</h2>
      </div>
      <p className="project-description">
        Trabalho com desenvolvimento web e automações, visando facilitar e
        agilizar qualquer tarefa repetitiva, seja utilizando uma API,
        integração, chatbot ou interface!
      </p>
      <p className="project-description">
        Estas são algumas das minhas principais skills!
      </p>
      <div className="feature-container">
        <section className="integracoes-container">
          <ul className="list">
            {skills.map((skill) => {
              return (
                <div className="row">
                  <div className="col s12 m7">
                    <div className="card">
                      <div className="card-image">
                        <img src={skill.url} />
                        <span className="card-title">{skill.name}</span>
                      </div>
                      <div className="card-content">
                        <p>
                         {skill.description}
                        </p>
                      </div>
                      <div className="card-action">
                        <a href={skill.details}>Saiba mais</a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ul>
        </section>
      </div>
    </section>
  );
}
