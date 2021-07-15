import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AmbreaImage from '../Images/AmbreaImage';
import BipolarImage from '../Images/BipolarImage';
import BitelineImage from '../Images/BitelineImage';
import FitnesspassImage from '../Images/FitnesspassImage';
import FitnesspassMobileImage from '../Images/FitnesspassMobileImage';
import SpoontopImage from '../Images/SpoontopImage';
import VicunaImage from '../Images/VicunaImage';
import { ISlide } from '../../interfaces';
import classNames from 'classnames';
import { ProfileContext } from '../../pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Projects = (): JSX.Element => {
  const slidesNative: ISlide[] = [
    {
      id: 1,
      name: 'Biteline',
      url: 'https://biteline.net',
      backend: 'NodeJS, ExpressJS',
      frontend: 'Ionic',
      image: <BitelineImage />,
    },
    {
      id: 2,
      name: 'Fitnesspass (App)',
      url: 'https://apps.apple.com/us/app/fitness-pass/id1442657269',
      backend: 'NodeJS, ExpressJS',
      frontend: 'React Native',
      image: <FitnesspassMobileImage />,
    },
  ];
  const slidesDesktop: ISlide[] = [
    {
      id: 1,
      name: 'Ambrea',
      url: 'https://ambrea.helmerdavila.com/menu/#/dia/1/turno/dia',
      backend: 'Laravel',
      frontend: 'Vue, Vuex',
      image: <AmbreaImage />,
    },
    {
      id: 2,
      name: 'Bipolar',
      url: 'https://bipolar.com.pe',
      backend: 'Laravel',
      frontend: 'React',
      image: <BipolarImage />,
    },
    {
      id: 3,
      name: 'Fitnesspass',
      url: 'https://fitnesspass.pe',
      backend: 'Express',
      frontend: 'React',
      image: <FitnesspassImage />,
    },
    {
      id: 4,
      name: 'Spoontop',
      url: 'http://spoontop.com',
      backend: 'Laravel',
      frontend: 'Angular, Ionic',
      image: <SpoontopImage />,
    },
    {
      id: 5,
      name: 'Vicuña Beer',
      url: 'https://vicuna.cervezacandelaria.com',
      backend: 'Laravel',
      frontend: 'JS, CSS',
      image: <VicunaImage />,
    },
  ];
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
    const context = useContext(ProfileContext);
    const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
    const borderColors = { 'border-gray-900': !context.isLightTheme, 'border-gray-400': context.isLightTheme };
    const lightLabelColor = {
      'bg-gray-200 text-black': context.isLightTheme,
      'bg-gray-700 text-white': !context.isLightTheme,
    };
    const darkLabelColor = {
      'bg-black text-white': context.isLightTheme,
      'bg-gray-400 text-black': !context.isLightTheme,
    };

    return (
      <div
        className={classNames({
          'bg-white': context.isLightTheme,
          'bg-gray-800': !context.isLightTheme,
        })}
        key={slide.id}
      >
        <div className="relative">
          <figure className="image">
            {slide.image}
            <div
              className={classNames({
                'image-overlay': context.isLightTheme,
                'image-overlay-night': !context.isLightTheme,
              })}
            />
            <a
              href={slide.url}
              target="_blank"
              className={classNames(
                'absolute bottom-0 right-0 mb-3 mr-3 p-3 flex justify-center items-center rounded-full font-semibold w-16 h-16',
                { 'bg-white text-black': context.isLightTheme, 'bg-gray-900 text-white': !context.isLightTheme },
              )}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" fixedWidth />
            </a>
          </figure>
        </div>
        <div className={classNames('flex flex-col justify-center border-l border-r text-center h-40', borderColors)}>
          <h3 className={classNames('text-3xl font-semibold text-center', textColor)}>{slide.name}</h3>
          <div className="flex justify-center mt-3 flex-wrap">
            <div className="px-1 py-2">
              <span className={classNames('text-sm p-1 rounded-l', lightLabelColor)}>Backend</span>
              <span className={classNames('text-sm p-1 rounded-r', darkLabelColor)}>{slide.backend}</span>
            </div>
            <div className="px-1 py-2">
              <span className={classNames('bg-gray-200 text-sm p-1 rounded-l', lightLabelColor)}>Frontend</span>
              <span className={classNames('text-sm p-1 rounded-r', darkLabelColor)}>{slide.frontend}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const slidesMobile = slidesNative.map((slide) => SlideCard(slide));
  const slidesMapped = slidesDesktop.map((slide) => SlideCard(slide));
  const context = useContext(ProfileContext);
  const { t } = useTranslation();
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  return (
    <section
      id="projects"
      className={classNames('py-10', { 'bg-gray-200': context.isLightTheme, 'bg-gray-900': !context.isLightTheme })}
    >
      <div className="container mx-auto">
        <h1 className={classNames('text-5xl text-center font-semibold mb-3', textColor)}>
          {t('mobile_and_web_projects')}
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
