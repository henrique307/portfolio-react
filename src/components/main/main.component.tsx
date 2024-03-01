import { CarrosselComponent } from "./carrossel/carrossel.component";
import { AprensentacaoComponent } from "./aprensentacao/aprensentacao.component";
import { TecnologiasComponent } from "./tecnologias/tecnologias.component";
import './main.component.css'

export function MainComponent() {
  return (
    <main className="app-center">
      <AprensentacaoComponent />
      <TecnologiasComponent />
      <CarrosselComponent />
    </main>
  );
}