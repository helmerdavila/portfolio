import React, { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import useTranslations from '../UseTranslations';
import { StaticImage } from 'gatsby-plugin-image';

interface IApp {
  id: string;
  title: string;
  description_key: string;
  apple?: string;
  android?: string;
  image: ReactElement;
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
};

const apps: IApp[] = [
  {
    id: uuidv4(),
    title: 'Httpixel',
    description_key: 'personal_projects_httpixel',
    apple: 'https://apps.apple.com/pa/app/httpixel/id1520739884',
    android: 'https://play.google.com/store/apps/details?id=com.taskalia.httpixel',
    image: (
      <StaticImage
        className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
        src="../../images/portfolio-httpixel.png"
        layout="fullWidth"
        alt="Httpixel"
        quality={70}
      />
    ),
  },
  {
    id: uuidv4(),
    title: 'Pills247',
    description_key: 'personal_projects_pills',
    apple: 'https://apps.apple.com/qa/app/pills247/id1517724316',
    image: (
      <StaticImage
        className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
        src="../../images/portfolio-pills.png"
        layout="fullWidth"
        alt="Biteline"
        quality={70}
      />
    ),
  },
];

const PersonalProjects = (): ReactElement => {
  const translations = useTranslations();
  const AppCards = apps.map((app) => <AppCard key={app.id} app={app} translations={translations} />);

  return (
    <section id="projects" className="py-10 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto 2xl:max-w-7xl">
        <h1 className="text-5xl text-center font-semibold mb-3 text-black dark:text-white">{translations.projects}</h1>
        <Slider {...sliderSettings}>{AppCards}</Slider>
      </div>
    </section>
  );
};

export const AppCard = (props: { app: IApp; translations: Record<string, string> }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-1 p-10">{props.app.image}</div>
      <div className="flex-1 p-6">
        <h2 className="text-4xl font-semibold text-black dark:text-white">{props.app.title}</h2>
        <p className="block mb-3 leading-loose text-black dark:text-white">
          {props.translations[props.app.description_key]}
        </p>
        <div className="flex">
          {props.app.apple ? <StoreButton title="AppStore" icon={faAppStore} link={props.app.apple} /> : null}
          {props.app.android ? <StoreButton title="Playstore" icon={faGooglePlay} link={props.app.android} /> : null}
        </div>
      </div>
    </div>
  );
};

export const StoreButton = (props: { title: string; icon: IconProp; link: string }) => {
  return (
    <a
      href={props.link}
      target="_blank"
      data-testid="store-button-target"
      rel="noopener noreferrer"
      className="inline-flex rounded-full px-5 py-3 items-center mr-2 bg-black text-white dark:bg-gray-700 dark:text-white"
    >
      <FontAwesomeIcon icon={props.icon} size="2x" />
      <span className="ml-3 font-semibold">{props.title}</span>
    </a>
  );
};

export default PersonalProjects;
