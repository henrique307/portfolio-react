import { AuthProvider } from "../../utils/auth.context";
import { ApisComponent } from "./apis/apis.component";
import { IntegracoesComponent } from "./integracoes/integracoes";
import { RepoListComponent } from "./reposList/reposList";
import { TecnologiasComponent } from "./tecnologias/tecnologias";
import "./features.css"

export function FeaturesComponent() {
  return (
    <section className="features">
      <IntegracoesComponent />
      <TecnologiasComponent />
      <AuthProvider>
        <ApisComponent/>
      </AuthProvider>
      <RepoListComponent />
    </section>
  );
}