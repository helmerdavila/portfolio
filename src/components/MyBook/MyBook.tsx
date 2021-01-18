import React, { useContext } from 'react';
import CtbookImage from '../Images/Ctbook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import { ProfileContext } from '../../pages';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const MyBook = (): JSX.Element => {
  const context = useContext(ProfileContext);
  const { t } = useTranslation();
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  return (
    <div
      className={classNames('py-10', {
        'bg-white': context.isLightTheme,
        'bg-gray-800': !context.isLightTheme,
      })}
    >
      <div className="container mx-auto flex flex-col sm:flex-row">
        <div className="flex-1 p-10">
          <CtbookImage />
        </div>
        <div className="flex-1 p-6">
          <h2 className={classNames('text-5xl font-semibold', textColor)}>CTBook</h2>
          <p className={classNames('block mb-3 leading-loose', textColor)}>{t('ctbook_description')}</p>
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
            <span className="ml-3 font-semibold">{t('ctbook_readsample')}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyBook;
