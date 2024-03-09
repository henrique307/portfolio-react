import { AprensentacaoComponent } from "./aprensentacao/aprensentacao";
import { TecnologiasComponent } from "./features/tecnologias/tecnologias";
import { FeaturesComponent } from "./features/features"
import "./main.component.css";

export function MainComponent() {
  return (
    <main className="app-center">
      <AprensentacaoComponent />
      <FeaturesComponent />
    </main>
  );
}