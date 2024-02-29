import Slider from "react-slick";

import "./tecnologias.component.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function MetodologiaComponent() {
  const options = {
    arrows: false,
    className: "tecnologias-container",
    autoplay: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const techIcons: { name: string; url: string }[] = [
    {
      name: "mongodb",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
    },
    {
      name: "selenium",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    },
    {
      name: "react",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      name: "typescript",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    },
    {
      name: "nestjs",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    },
    {
      name: "nodejs",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "git",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "nextjs",
      url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
  ];

  return (
    <Slider {...options}>
      {techIcons.map((techIcon, i) => {
        return (
          <img
            key={i}
            alt={techIcon.name}
            title={techIcon.name}
            className="tech-icon"
            src={techIcon.url}
          />
        );
      })}
    </Slider>
  );
}
