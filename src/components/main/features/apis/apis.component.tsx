import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { HttpComponentTemplate } from "./components/http.components";
import "./apis.component.css";
import { useAuthContext } from "../../../utils/auth.context";
import { httpComponents } from "./components/interface/httpComponentProps.interface";

// {
//   titulo: "APIs",
//   descricao:
//     "Experiente na criações de APIs documentadas com Swagger, com sistema de autenticação e integração com automações variadas",
//   classe: "APIs",
//   componente: ApisComponent,
// },

export function ApisComponent() {
  const { authToken } = useAuthContext();

  return (
    <section className="project" id="apis">
      <div className="project-title-container">
        <h2 className="project-title">APIs</h2>
      </div>
      <p className="project-description">
        Experiente na criações de APIs documentadas com Swagger, com sistema de
        autenticação e integração com automações variadas
      </p>
      <div className="feature-container">
        <section className="swagger">
          <span className="swagger-text">
            Documentação da API disponível{" "}
            <a
              className="swagger-text-link"
              target="_blank"
              href="https://portfolioapi-production.up.railway.app/api/swagger"
            >
              aqui
            </a>
          </span>
          <span className="swagger-text">
            Planilha sendo alterada em tempo real{" "}
            <a
              className="swagger-text-link"
              target="_blank"
              href="https://docs.google.com/spreadsheets/d/1XaNeCEZYG9A0GJtdCvM2RqTKlbJqjNiAI267TZN-RYU"
            >
              aqui
            </a>
          </span>
          <span className={`auth-warning ${!!authToken ? "autenticado" : "nao-autenticado"}`}>
            {authToken ? "Autenticado!" : "Não autenticado"}
          </span>
          <Tabs defaultIndex={0}>
            <TabList>
              {httpComponents.map((component, key) => {
                return (
                  <Tab key={key}>
                    {component.componentLabel}
                  </Tab>
                );
              })}
            </TabList>
            {httpComponents.map((component, key) => {
              return (
                <TabPanel key={key}>
                  {HttpComponentTemplate(component)}
                </TabPanel>
              );
            })}
          </Tabs>
        </section>
      </div>
    </section>
  );
}
