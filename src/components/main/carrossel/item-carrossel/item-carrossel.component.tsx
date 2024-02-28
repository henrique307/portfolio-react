import { Projeto } from "./utils/projeto.interface";
import './item-carrossel.component.css'

interface ItemCarrosselComponentProps {
  CurrentProject: Projeto;
  key: string
}

export function ItemCarrosselComponent({
  CurrentProject,
  key
}: ItemCarrosselComponentProps) {
  return (
    <section className="projeto">
      <h2 className="projeto-title">{CurrentProject.titulo}</h2>
      <p className="projeto-description">{CurrentProject.descricao}</p>
      <div className="feature-container">
        {CurrentProject.componente()}
      </div>
    </section>
  );
}
