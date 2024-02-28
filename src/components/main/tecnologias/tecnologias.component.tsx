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

  return (
    <Slider {...options}>
      <img
        alt="Mongodb"
        title="Mongodb"
        className="tech-icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
      />
      <img
        alt="Selenium"
        title="Selenium"
        className="tech-icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg"
      />
      <img
        alt="Reactjs"
        title="ReactJS"
        className="tech-icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
      />
      <img
        alt="Typescript"
        title="Typescript"
        className="tech-icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
      />
      <img
        alt="NestJS"
        title="NestJS"
        className="tech-icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg"
      />
      <img
        alt="NodeJS"
        title="NodeJS"
        className="tech-icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
      />
      <img
        alt="Git"
        title="Git"
        className="tech-icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
      />
      <img
        alt="NextJS"
        title="NextJS"
        className="tech-icon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
      />
    </Slider>
  );
}
