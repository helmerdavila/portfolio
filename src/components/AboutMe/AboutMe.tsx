import React, { ReactElement, useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../Layout';
import useTranslations from '../UseTranslations';

const AboutMe = (): ReactElement => {
  const context = useContext(ThemeContext);
  const textColor = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  const { about_me, about_me_description } = useTranslations();

  return (
    <section
      id="about_me"
      className={classNames('p-10', { 'bg-white': context.isLightTheme, 'bg-gray-800': !context.isLightTheme })}
    >
      <div className="container mx-auto 2xl:max-w-7xl">
        <h1 className={classNames('text-5xl text-center font-semibold', textColor)}>{about_me}</h1>
        <p className={classNames(textColor)}>{about_me_description}</p>
      </div>
    </section>
  );
};

export default AboutMe;
