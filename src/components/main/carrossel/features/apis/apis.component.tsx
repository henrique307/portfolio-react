import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import httpComponents from "./components/http.components";
import "./apis.component.css";

export function ApisComponent() {
  // constructor(private readonly apiHandle: ApiHandle) {}

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
          href="https://portfolioapi-production.up.railway.app/api/swagger"
        >
          aqui
        </a>
      </span>

      <Tabs>
        <TabList>
          <Tab>Auth</Tab>
          <Tab>Get</Tab>
          <Tab>Post</Tab>
          <Tab>Patch</Tab>
          <Tab>Delete</Tab>
        </TabList>

        {httpComponents.map((component) => {
          return <TabPanel>{component()}</TabPanel>;
        })}
      </Tabs>

      
    </section>
  );
}
