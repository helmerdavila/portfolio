import React, { useContext } from 'react';
import Header from '../Layouts/Header';
import classNames from 'classnames';
import useTranslations from '../UseTranslations';
import { ThemeContext } from '../Layout';
import { TypeAnimation } from 'react-type-animation';
import * as PresentationStyles from './Presentation.module.css';

const Presentation = (): JSX.Element => {
  const context = useContext(ThemeContext);
  const {
    hi_my_name_is,
    software_engineer,
    and_i_build,
    ecommerce_websites,
    landing_pages,
    web_applications,
    mobile_applications,
  } = useTranslations();
  const overlayClass = context.isLightTheme ? PresentationStyles.Overlay : PresentationStyles.OverlayNight;

  return (
    <section className={PresentationStyles.FirstSectionBackgroundImage}>
      <Header />
      <div id="who_am_i" className="min-h-screen flex justify-center items-center">
        <div className={classNames(overlayClass)} />
        <div className="text-center z-10">
          <h3 className="text-3xl font-bold text-white">{hi_my_name_is}</h3>
          <h1 className="text-6xl font-bold text-white">Helmer Dávila</h1>
          <h3 className="text-3xl font-bold text-white">{software_engineer}</h3>
          <h2 className="text-5xl font-bold inline-block text-white">
            <span>{and_i_build}</span>
            <TypeAnimation
              cursor={true}
              sequence={[ecommerce_websites, 2000, landing_pages, 2000, web_applications, 2000, mobile_applications]}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
