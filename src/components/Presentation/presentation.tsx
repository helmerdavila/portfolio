import React, { useContext } from 'react';
import Header from '../Layouts/Header';
import Typing from 'react-typing-animation';
import classNames from 'classnames';
import useTranslations from '../UseTranslations';
import { ThemeContext } from '../Layout';

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

  return (
    <div className="min-h-screen w-full first-section bg-black">
      <Header />
      <div id="who_am_i" className="min-h-screen flex justify-center items-center">
        <div className={classNames({ overlay: context.isLightTheme, 'overlay-night': !context.isLightTheme })} />
        <div className="text-center z-10">
          <h3 className="text-3xl font-bold text-white">{hi_my_name_is}</h3>
          <h1 className="text-6xl font-bold text-white">Helmer Dávila</h1>
          <h3 className="text-3xl font-bold text-white">{software_engineer}</h3>
          <h2 className="text-5xl font-bold inline-block text-white">
            <span>{and_i_build}</span>
            <Typing loop speed={50}>
              <span>{ecommerce_websites}</span>
              <Typing.Reset count={1} delay={1000} />
              <span>{landing_pages}</span>
              <Typing.Reset count={1} delay={2000} />
              <span>{web_applications}</span>
              <Typing.Reset count={1} delay={300} />
              <span>{mobile_applications}</span>
              <Typing.Reset delay={4000} />
            </Typing>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
