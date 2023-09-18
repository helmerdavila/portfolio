import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ISlide } from '../../interfaces';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import useTranslations from '../UseTranslations';
import { StaticImage } from 'gatsby-plugin-image';

export const slidesNative: ISlide[] = [
  {
    id: 1,
    name: 'Biteline',
    url: 'https://biteline.net',
    backend: 'NodeJS, ExpressJS',
    frontend: 'Ionic',
    image: (
      <StaticImage
        src="../../images/biteline_mobile.jpg"
        layout="fullWidth"
        alt="Biteline"
        className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
      />
    ),
  },
  {
    id: 2,
    name: 'Fitnesspass (App)',
    url: 'https://apps.apple.com/us/app/fitness-pass/id1442657269',
    backend: 'NodeJS, ExpressJS',
    frontend: 'React Native',
    image: (
      <StaticImage
        src="../../images/fitnesspass_mobile.jpg"
        layout="fullWidth"
        alt="Biteline"
        className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
      />
    ),
  },
];

export const slidesDesktop: ISlide[] = [
  {
    id: 1,
    name: 'Ambrea',
    url: 'https://ambrea.helmerdavila.com/menu/#/dia/1/turno/dia',
    backend: 'Laravel',
    frontend: 'Vue, Vuex',
    image: (
      <StaticImage
        src="../../images/ambrea_mockup.png"
        layout="fullWidth"
        alt="Biteline"
        className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
      />
    ),
  },
  {
    id: 2,
    name: 'Bipolar',
    url: 'https://bipolar.com.pe',
    backend: 'Laravel',
    frontend: 'React',
    image: (
      <StaticImage
        src="../../images/bipolar_mockup.png"
        layout="fullWidth"
        alt="Biteline"
        className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
      />
    ),
  },
  {
    id: 3,
    name: 'Fitnesspass',
    url: 'https://fitnesspass.pe',
    backend: 'Express',
    frontend: 'React',
    image: (
      <StaticImage
        src="../../images/fitnesspass_mockup.png"
        layout="fullWidth"
        alt="Biteline"
        className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
      />
    ),
  },
];

const Projects = (): ReactElement => {
  const sliderDesktopSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
  const sliderMobileSettings = {
    ...sliderDesktopSettings,
    slidesToShow: 2,
  };

  const SlideCard = (slide: ISlide) => {
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
        </figure>
        <div className="flex flex-col justify-center border-l border-r text-center h-40 border-gray-400 dark:border-gray-900">
          <h3 className="text-3xl font-semibold text-center text-black dark:text-white">{slide.name}</h3>
          <div className="flex justify-center mt-3 flex-wrap">
            <div className="px-1 py-2">
              <span className="text-sm p-1 rounded-l bg-gray-200 text-black dark:bg-gray-700 dark:text-white">
                Backend
              </span>
              <span className="text-sm p-1 rounded-r bg-black text-white dark:text-black dark:bg-gray-400">
                {slide.backend}
              </span>
            </div>
            <div className="px-1 py-2">
              <span
                className={classNames('bg-gray-200 text-sm p-1 rounded-l text-black dark:bg-gray-700 dark:text-white')}
              >
                Frontend
              </span>
              <span className="text-sm p-1 rounded-r bg-black text-white dark:text-black dark:bg-gray-400">
                {slide.frontend}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const slidesMobile = slidesNative.map((slide) => SlideCard(slide));
  const slidesMapped = slidesDesktop.map((slide) => SlideCard(slide));
  const { mobile_and_web_projects } = useTranslations();

  return (
    <section id="projects" className="py-10 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto 2xl:max-w-7xl">
        <h1 className="text-5xl text-center font-semibold mb-3 text-black dark:text-white">
          {mobile_and_web_projects}
        </h1>
        <div className="py-4">
          <Slider {...sliderMobileSettings}>{slidesMobile}</Slider>
        </div>
        <div className="py-4">
          <Slider {...sliderDesktopSettings}>{slidesMapped}</Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
