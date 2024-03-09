import "./aprensentacao.css";

export function AprensentacaoComponent() {
  return (
    <section className="apresentacao" id="quemSou">
      <div className="apresentacao_perfil"> </div>
      <p className="texto apresentacao_resumo">
        Olá! Meu nome é Henrique Florencio, trabalho com desenvovimento de
        software em geral, englobando desenvolvimento web e automações, trabalho
        com API's diversas, paginas web, bancos de dados MySQL e MongoDB, assim
        como automações para web e processos em geral para facilitar operações
        repetitivas do dia-a-dia, contando também com experiência no
        desenvolvimento de chatbots e integrações com telegram, nesta página,
        elaboro um pouco mais sobre as ferramentas que domino e meus projetos ja
        desenvolvidos.
      </p>
      <div className="icon-container">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/henrique-florencio-b04b5b198/"
        >
          <img
            title="Entre em contado via LinkedIn!"
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain-wordmark.svg"
          />
        </a>
        <a target="_blank" href="https://github.com/henrique307">
          <img
            title="Mais projetos no meu github!"
            className="icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
          />
        </a>
      </div>
    </section>
  );
}
