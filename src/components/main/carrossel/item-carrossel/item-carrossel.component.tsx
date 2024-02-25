import { Projeto } from "./utils/projeto.interface";
import './item-carrossel.component.css'

interface ItemCarrosselComponentProps {
  CurrentProject: Projeto;
}

export function ItemCarrosselComponent({
  CurrentProject,
}: ItemCarrosselComponentProps) {
  return (
    <div className="projeto">
      <h2 className="projeto-title">{CurrentProject.titulo}</h2>
      <p className="projeto-description">{CurrentProject.descricao}</p>
      <section className="feature-container">
        {CurrentProject.componente()}
      </section>
    </div>
  );
}
