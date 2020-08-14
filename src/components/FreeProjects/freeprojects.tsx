import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactibookImage from '../Images/ReactibookImage';
import RoomieImage from '../Images/RoomieImage';
import BattleshipImage from '../Images/BattleshipImage';
import classNames from 'classnames';
import { ProfileContext } from '../../pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faExternalLinkAlt } from '@fortawesome/pro-duotone-svg-icons';

const FreeProjects = () => {
  const context = useContext(ProfileContext);

  const slides = [
    {
      id: 1,
      name: 'Reactibook',
      subtitle: 'Facebook Mini-clone',
      url: 'http://reactibook.helmerdavila.com/',
      codeUrl: 'https://github.com/helmerdavila/reactibook',
      backend: 'Firebase',
      frontend: 'React',
      image: <ReactibookImage />,
    },
    {
      id: 2,
      name: 'Roomie',
      subtitle: 'Roomie payment calculator',
      url: 'http://roomie.helmerdavila.com/',
      codeUrl: 'https://github.com/helmerdavila/payment-roomie',
      backend: null,
      frontend: 'Vue',
      image: <RoomieImage />,
    },
    {
      id: 2,
      name: 'Battleship',
      subtitle: 'Simple game demo',
      url: 'http://battleship.helmerdavila.com/',
      codeUrl: 'https://github.com/helmerdavila/battleship',
      backend: null,
      frontend: 'React',
      image: <BattleshipImage />,
    },
  ];
  const sliderSettings = {
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

  const slidesMapped = slides.map((slide) => {
    const lightLabelColor = {
      'bg-gray-200 text-black': context.isLightTheme,
      'bg-gray-700 text-white': !context.isLightTheme,
    };
    const darkLabelColor = {
      'bg-black text-white': context.isLightTheme,
      'bg-gray-400 text-black': !context.isLightTheme,
    };
    const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
    const borderColors = { 'border-gray-900': !context.isLightTheme, 'border-gray-400': context.isLightTheme };

    const backend = slide.backend ? (
      <div className="px-1 py-2">
        <span className={classNames('text-sm p-1 rounded-l', lightLabelColor)}>Backend</span>
        <span className={classNames('text-sm p-1 rounded-r', darkLabelColor)}>{slide.backend}</span>
      </div>
    ) : null;

    const frontend = slide.frontend ? (
      <div className="px-1 py-2">
        <span className={classNames('text-sm p-1 rounded-l', lightLabelColor)}>Frontend</span>
        <span className={classNames('text-sm p-1 rounded-r', darkLabelColor)}>{slide.frontend}</span>
      </div>
    ) : null;

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
            <a
              href={slide.codeUrl}
              target="_blank"
              className={classNames(
                'absolute bottom-0 left-0 mb-3 ml-3 p-3 flex justify-center items-center rounded-full font-semibold w-16 h-16',
                { 'bg-white text-black': context.isLightTheme, 'bg-gray-900 text-white': !context.isLightTheme },
              )}
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faCode} size="2x" fixedWidth />
            </a>
          </figure>
        </div>
        <div className={classNames('flex flex-col justify-center border text-center h-48', borderColors)}>
          <h3 className={classNames('text-3xl font-semibold', textColor)}>{slide.name}</h3>
          <h4 className={classNames('text-xl', textColor)}>{slide.subtitle}</h4>
          <div className="flex flex-wrap justify-center mt-3">
            {backend}
            {frontend}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className={classNames({ 'bg-gray-200': context.isLightTheme, 'bg-gray-900': !context.isLightTheme })}>
      <div className="container mx-auto py-10">
        <h2
          className={classNames('text-5xl font-semibold text-center pb-4', {
            'text-dark': context.isLightTheme,
            'text-white': !context.isLightTheme,
          })}
        >
          Code Samples
        </h2>
        <Slider {...sliderSettings}>{slidesMapped}</Slider>
      </div>
    </section>
  );
};

export default FreeProjects;
