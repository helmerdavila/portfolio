import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import useTranslations from '../UseTranslations';
import { ThemeContext } from '../Layout';
import { StaticImage } from 'gatsby-plugin-image';

const MyBook = (): JSX.Element => {
  const context = useContext(ThemeContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  const { ctbook_description, ctbook_readsample } = useTranslations();

  return (
    <div
      className={classNames('py-10', {
        'bg-white': context.isLightTheme,
        'bg-gray-800': !context.isLightTheme,
      })}
    >
      <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="flex-1 p-10">
          <StaticImage
            src="../../images/ctbook.png"
            className="filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
            layout="fullWidth"
            alt="Ctbook"
          />
        </div>
        <div className="flex-1 p-6">
          <h2 className={classNames('text-5xl font-semibold', textColor)}>CTBook</h2>
          <p className={classNames('block mb-3 leading-loose', textColor)}>{ctbook_description}</p>
          <a
            href="https://leanpub.com/ctbook/read_sample"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames('inline-block rounded-full px-5 py-3', {
              'bg-black text-white': context.isLightTheme,
              'bg-gray-900 text-white': !context.isLightTheme,
            })}
          >
            <FontAwesomeIcon icon={faBook} />
            <span className="ml-3 font-semibold">{ctbook_readsample}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyBook;
