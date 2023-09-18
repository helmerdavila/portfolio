import React, { ReactElement } from 'react';
import useTranslations from '../UseTranslations';

const AboutMe = (): ReactElement => {
  const { about_me, about_me_description } = useTranslations();

  return (
    <section id="about_me" className="py-10 bg-white dark:bg-gray-800">
      <div className="container mx-auto 2xl:max-w-7xl">
        <h1 className="text-5xl text-center font-semibold text-black dark:text-white">{about_me}</h1>
        <p className="text-black dark:text-white">{about_me_description}</p>
      </div>
    </section>
  );
};

export default AboutMe;
