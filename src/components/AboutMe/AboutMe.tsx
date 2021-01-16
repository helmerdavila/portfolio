import React, { useContext } from 'react';
import classNames from 'classnames';
import { ProfileContext } from '../../pages';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const AboutMe = (): JSX.Element => {
  const context = useContext(ProfileContext);
  const textColor = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  const { t } = useTranslation();

  return (
    <section
      id="about_me"
      className={classNames('p-10', { 'bg-white': context.isLightTheme, 'bg-gray-800': !context.isLightTheme })}
    >
      <div className="container mx-auto">
        <h1 className={classNames('text-5xl text-center font-semibold', textColor)}>{t('about_me')}</h1>
        <p className={classNames(textColor)}>{t('about_me_description')}</p>
      </div>
    </section>
  );
};

export default AboutMe;
