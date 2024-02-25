import excel from "./assets/excel.svg";
import powerpoint from "./assets/powerpoint.svg";
import docs from "./assets/docs.svg";
import './integracoes.component.css'

export function IntegracoesComponent() {
  return (
    <section className="integracoes-container">
      <img src={excel} className="icon" alt="" />
      <img src={docs} className="icon" alt="" />
      <img src={powerpoint} className="icon" alt="" />
      <img
        className="icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg"
      />
    </section>
  );
}
