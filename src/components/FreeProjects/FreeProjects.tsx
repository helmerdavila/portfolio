import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import useTranslations from '../UseTranslations';
import { StaticImage } from 'gatsby-plugin-image';
import { v4 as uuidv4 } from 'uuid';

export interface ISlide {
  id: number;
  name: string;
  subtitle: string;
  url: string;
  codeUrl: string;
  backend: string | null;
  frontend: string | null;
  image: ReactElement;
}

export const Slide = ({ slide }: { slide: ISlide }) => {
  const backend = slide.backend ? (
    <div className="px-1 py-2">
      <span className="text-sm p-1 rounded-l bg-gray-200 text-black dark:bg-gray-800 dark:text-white">Backend</span>
      <span className="text-sm p-1 rounded-r bg-black text-white dark:bg-gray-400 dark:text-black">
        {slide.backend}
      </span>
    </div>
  ) : null;

  const frontend = slide.frontend ? (
    <div className="px-1 py-2">
      <span className="text-sm p-1 rounded-l bg-gray-200 text-black dark:bg-gray-800 dark:text-white">Frontend</span>
      <span className="text-sm p-1 rounded-r bg-black text-white dark:bg-gray-400 dark:text-black">
        {slide.frontend}
      </span>
    </div>
  ) : null;

  return (
    <div className="bg-white dark:bg-gray-800" key={slide.id}>
      <figure className="relative">
        {slide.image}
        <a
          href={slide.url}
          target="_blank"
          className="absolute bottom-0 right-0 mb-3 mr-3 p-3 flex justify-center items-center rounded-full font-semibold w-16 h-16 bg-white text-black dark:bg-gray-900 dark:text-white"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" fixedWidth />
        </a>
        <a
          href={slide.codeUrl}
          target="_blank"
          className="absolute bottom-0 left-0 mb-3 ml-3 p-3 flex justify-center items-center rounded-full font-semibold w-16 h-16 bg-white text-black dark:bg-gray-900 dark:text-white"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faCode} size="2x" fixedWidth />
        </a>
      </figure>
      <div className="flex flex-col justify-center border text-center h-48 border-gray-400 dark:border-gray-900">
        <h3 className="text-3xl font-semibold text-black dark:text-white">{slide.name}</h3>
        <h4 className="text-xl text-black dark:text-white">{slide.subtitle}</h4>
        <div className="flex flex-wrap justify-center mt-3">
          {backend}
          {frontend}
        </div>
      </div>
    </div>
  );
};

const FreeProjects = (): ReactElement => {
  const { roomie_description, battleship_description, code_samples } = useTranslations();

  const slides: ISlide[] = [
    {
      id: 1,
      name: 'Roomie',
      subtitle: roomie_description,
      url: 'http://roomie.helmerdavila.com/',
      codeUrl: 'https://github.com/helmerdavila/payment-roomie',
      backend: null,
      frontend: 'Vue',
      image: (
        <StaticImage
          src="../../images/roomie_mockup.png"
          className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
          layout="fullWidth"
          alt="Roomie"
        />
      ),
    },
    {
      id: 2,
      name: 'Battleship',
      subtitle: battleship_description,
      url: 'http://battleship.helmerdavila.com/',
      codeUrl: 'https://github.com/helmerdavila/battleship',
      backend: null,
      frontend: 'React',
      image: (
        <StaticImage
          src="../../images/battleship_mockup.png"
          className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
          layout="fullWidth"
          alt="Battleship"
        />
      ),
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slidesMapped = slides.map((slide) => <Slide key={uuidv4()} slide={slide} />);

  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto 2xl:max-w-7xl py-10">
        <h2 className="text-5xl font-semibold text-center pb-4 text-dark text-white">{code_samples}</h2>
        <Slider {...sliderSettings}>{slidesMapped}</Slider>
      </div>
    </section>
  );
};

export default FreeProjects;
