import { Projeto } from "./item-carrossel/utils/projeto.interface";
import { PokeListComponent } from "./features/infinite-scrolling/web.component";
import { ApisComponent } from "./features/apis/apis.component";
import { IntegracoesComponent } from "./features/integracoes/integracoes.component";
import { ItemCarrosselComponent } from "./item-carrossel/item-carrossel.component";
import Slider from "react-slick";
import "./carrossel.component.css";

export function CarrosselComponent() {
  const projetos: Projeto[] = [
    {
      titulo: "Aplicações Web",
      descricao:
        "Experiencia na criação de aplicações web consumindo APIs externas (PokeAPI nesse caso) apresentando os dados de forma concisa e utilizando as melhores práticas de desenvolvimento",
      classe: "infiniteScrolling",
      componente: PokeListComponent,
    },
    {
      titulo: "APIs",
      descricao:
        "Experiência na criações de APIs documentadas com Swagger, com sistema de autenticação e integração com automações variadas",
      classe: "APIs",
      componente: ApisComponent,
    },
    {
      titulo: "Integrações diversas e automações",
      descricao:
        "Experiência na criação de automações, integrando diversas ferramentas como Telegram, Excel, PowerPoint, Word, APIs externas, Email e testes end-to-end automáticos com selenium webdriver",
      classe: "integracoes",
      componente: IntegracoesComponent,
    },
  ];

  const options = {
    className: "carrossel_container",
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false
  };

  return (
    <Slider {...options}>
      {projetos.map((projeto, i) => {
        return <ItemCarrosselComponent key={i} CurrentProject={projeto} />;
      })}
    </Slider>
  );
}
