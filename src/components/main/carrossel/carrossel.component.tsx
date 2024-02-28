import { Projeto } from "./item-carrossel/utils/projeto.interface";
import { PokeListComponent } from "./features/infinite-scrolling/web.component";
import { ApisComponent } from "./features/apis/apis.component";
import { IntegracoesComponent } from "./features/integracoes/integracoes.component";
import { ItemCarrosselComponent } from "./item-carrossel/item-carrossel.component";
import Slider from "react-slick";
import "./carrossel.component.css";
import React from "react";
import { AuthProvider } from "./features/apis/utils/auth.context";

export function CarrosselComponent() {
  const projetos: Projeto[] = [
    {
      titulo: "Aplicações Web",
      descricao:
        "Experiente na criação de aplicações web consumindo APIs externas (PokeAPI nesse caso) apresentando os dados de forma concisa e utilizando as melhores práticas de desenvolvimento",
      classe: "infiniteScrolling",
      componente: PokeListComponent,
    },
    {
      titulo: "APIs",
      descricao:
        "Experiente na criações de APIs documentadas com Swagger, com sistema de autenticação e integração com automações variadas",
      classe: "APIs",
      componente: ApisComponent,
    },
    {
      titulo: "Diversas opções de desenvolvimento!",
      descricao:
        "Experiente no desenvolvimento de diversos tipos de projetos, sempre buscando a maior satisfação do cliente!",
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
    draggable: false,
  };

  return (
    <AuthProvider>
      <Slider {...options}>
        {projetos.map((projeto) => {
          return (
            <ItemCarrosselComponent
              key={projeto.classe}
              CurrentProject={projeto}
            />
          );
        })}
      </Slider>
    </AuthProvider>
  );
}
