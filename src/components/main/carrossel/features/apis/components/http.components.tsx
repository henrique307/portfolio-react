import { MouseEventHandler } from "react";
import "./http.components.css";

function GetComponent() {
  return (
    <form className="http-component-container">
      <section className="info-text-container">
        <span className="info-text">
          Esta rota trás todos os itens na planilha caso um id não tenha sido
          informado no campo id
        </span>
      </section>
      <section className="input-container">
        <input
          placeholder="id"
          className="http-component-input"
          type="number"
        />
      </section>
      <button onClick={enviaValores}>Eviar valores!</button>
    </form>
  );
}

function PostComponent() {
  return (
    <form className="http-component-container">
      <section className="info-text-container">
        <span className="info-text">
          Esta rota cadastra um usuário na planilha
        </span>
      </section>
      <section className="input-container">
        <input
          placeholder="nome"
          className="http-component-input"
          type="text"
        />
        <input
          placeholder="email"
          className="http-component-input"
          type="email"
        />
        <input
          placeholder="recado"
          className="http-component-input"
          type="text"
        />
      </section>
      <button onClick={enviaValores}>Eviar valores!</button>
    </form>
  );
}

function PatchComponent() {
  return (
    <form className="http-component-container">
      <section className="info-text-container">
        <span className="info-text">
          Esta rota altera um dos valores da planilha, nem todos os campos
          precisam ser preenchidos
        </span>
      </section>
      <section className="input-container">
        <input
          placeholder="nome"
          className="http-component-input"
          type="text"
        />
        <input
          placeholder="email"
          className="http-component-input"
          type="email"
        />
        <input
          placeholder="recado"
          className="http-component-input"
          type="text"
        />
      </section>
      <button onClick={enviaValores}>Eviar valores!</button>
    </form>
  );
}

function DeleteComponent() {
  return (
    <form className="http-component-container">
      <section className="info-text-container">
        <span className="info-text">
          Esta rota deleta um usuário da planilha
        </span>
      </section>
      <section className="input-container">
        <input
          placeholder="id"
          className="http-component-input"
          type="number"
        />
      </section>
      <button onClick={enviaValores}>Eviar valores!</button>
    </form>
  );
}

function AuthComponent() {
  return (
    <form className="http-component-container">
      <section className="info-text-container">
        <span className="info-text">
          Para testar a API primeiramente é necessário autenticar-se com o token
          devolvido nesta rota
        </span>
      </section>
      <section className="input-container">
        <input
          placeholder="nome"
          className="http-component-input"
          type="text"
        />
        <input
          placeholder="email"
          className="http-component-input"
          type="email"
        />
      </section>
      <button onClick={enviaValores}>Eviar valores!</button>
    </form>
  );
}

function enviaValores(mouseEvent: React.MouseEvent) {
  mouseEvent.preventDefault()
  console.log(mouseEvent);
}

export default [
  AuthComponent,
  GetComponent,
  PostComponent,
  PatchComponent,
  DeleteComponent,
];
