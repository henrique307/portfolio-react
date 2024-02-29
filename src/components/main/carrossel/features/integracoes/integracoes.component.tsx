import telegram from "./assets/telegram.svg";
import "./integracoes.component.css";

export function IntegracoesComponent() {
  return (
    <section className="integracoes-container">
      <ul className="list">
        <li className="list-item">
          <img src={telegram} className="list-item-img" alt="telegram" />
          <span className="list-item-span">
            Criação de chatbots no telegram, com pagamento PIX de baixa
            automática
          </span>
        </li>
        <li className="list-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" className="list-item-img" />
          <span className="list-item-span">
            Testes end-to-end web automatizados com Selenium webdriver
          </span>
        </li>
        <li className="list-item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg" className="list-item-img" />
          <span className="list-item-span">
            Utilização do trello, para atualizações em tempo real do andamento
            do projeto
          </span>
        </li>
      </ul>
    </section>
  );
}
