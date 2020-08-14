import React, { useContext } from 'react';
import classNames from 'classnames';
import { ProfileContext } from '../../pages';

const AboutMe = () => {
  const context = useContext(ProfileContext);
  const textColor = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };

  return (
    <section
      id="about_me"
      className={classNames('p-10', { 'bg-white': context.isLightTheme, 'bg-gray-800': !context.isLightTheme })}
    >
      <div className="container mx-auto">
        <h1 className={classNames('text-5xl text-center font-semibold', textColor)}>About me</h1>
        <p className={classNames(textColor)}>
          Hi, my name is Helmer Davila, and I am from Peru. I am a JS/PHP Developer and I have worked with framework and
          frameworkless projects. My coding languages for the backend are Javascript - Typescript (Node JS, Express,
          NestJs), PHP (Laravel/Zend/Codeigniter). For frontend work I code in Javascript (Vue/Angular/React/React
          Native/Ionic), HTML, CSS (SCSS/Stylus).
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
