import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import {
  httpComponents,
  HttpComponentTemplate,
} from "./components/http.components";
import "./apis.component.css";
import { useAuthContext } from "./utils/auth.context";

export function ApisComponent() {
  const { authToken } = useAuthContext();

  return (
    <section className="swagger">
      <span className="swagger-text">
        Documentação da API disponível{" "}
        <a
          className="swagger-text-link"
          target="_blank"
          href="https://portfolioapi-production.up.railway.app/api/swagger"
        >
          neste Link
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
      <span className={!!authToken ? "autenticado" : "nao-autenticado"}>
        {authToken ? "Autenticado!" : "Não autenticado"}
      </span>

      <Tabs>
        <TabList>
          <Tab>Auth</Tab>
          <Tab>Get</Tab>
          <Tab>Post</Tab>
          <Tab>Patch</Tab>
          <Tab>Delete</Tab>
        </TabList>

          {httpComponents.map((component, key) => {
            return (
              <TabPanel key={key}>{HttpComponentTemplate(component)}</TabPanel>
            );
          })}
      </Tabs>

      <section></section>
    </section>
  );
}
