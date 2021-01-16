import React, { useContext } from 'react';
import classNames from 'classnames';
import { ProfileContext } from '../../pages';
import ImageHttpixel from '../Images/ImageHttpixel';
import ImagePills from '../Images/ImagePills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { v4 as uuidv4 } from 'uuid';
import { useTranslation } from 'gatsby-plugin-react-i18next';

interface IApp {
  id: string;
  title: string;
  description_key: string;
  apple?: string;
  android?: string;
  image: JSX.Element;
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
    image: <ImageHttpixel />,
  },
  {
    id: uuidv4(),
    title: 'Pills247',
    description_key: 'personal_projects_pills',
    apple: 'https://apps.apple.com/qa/app/pills247/id1517724316',
    image: <ImagePills />,
  },
];

const PersonalProjects = (): JSX.Element => {
  const context = useContext(ProfileContext);
  const { t } = useTranslation();
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  const AppCards = apps.map((app) => <AppCard key={app.id} app={app} />);

  return (
    <section
      id="projects"
      className={classNames('py-10', { 'bg-gray-200': context.isLightTheme, 'bg-gray-900': !context.isLightTheme })}
    >
      <div className="container mx-auto">
        <h1 className={classNames('text-5xl text-center font-semibold mb-3', textColor)}>{t('projects')}</h1>
        <Slider {...sliderSettings}>{AppCards}</Slider>
      </div>
    </section>
  );
};

const AppCard = (props: { app: IApp }) => {
  const context = useContext(ProfileContext);
  const { t } = useTranslation();
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-1 p-10">{props.app.image}</div>
      <div className="flex-1 p-6">
        <h2 className={classNames('text-4xl font-semibold', textColor)}>{props.app.title}</h2>
        <p className={classNames('block mb-3 leading-loose', textColor)}>{t(props.app.description_key)}</p>
        <div className="flex">
          {props.app.apple ? <StoreButton title="AppStore" icon={faAppStore} link={props.app.apple} /> : null}
          {props.app.android ? <StoreButton title="Playstore" icon={faGooglePlay} link={props.app.android} /> : null}
        </div>
      </div>
    </div>
  );
};

const StoreButton = (props: { title: string; icon: IconProp; link: string }) => {
  const context = useContext(ProfileContext);

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames('inline-flex rounded-full px-5 py-3 items-center mr-2', {
        'bg-black text-white': context.isLightTheme,
        'bg-gray-700 text-white': !context.isLightTheme,
      })}
    >
      <FontAwesomeIcon icon={props.icon} size="2x" />
      <span className="ml-3 font-semibold">{props.title}</span>
    </a>
  );
};

export default PersonalProjects;
