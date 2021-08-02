import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withScroll } from 'react-window-decorators';
import classNames from 'classnames';
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll';
import { ProfileContext } from '../../pages';
import { faDownload, faHSquare } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import DarkModeToggle from 'react-dark-mode-toggle';
import useTranslations from '../UseTranslations';

const Header = (props: { scrollPositionY: number }) => {
  const context = useContext(ProfileContext);
  const navbarClass = classNames(
    'fixed flex flex-row w-screen h-16 px-5 md:px-8 justify-between z-20 transition duration-200 ease-in-out',
    {
      'bg-white shadow-xl': props.scrollPositionY > 0 && context.isLightTheme,
      'bg-gray-800': props.scrollPositionY > 0 && !context.isLightTheme,
    },
  );
  const { cv_link, download_cv } = useTranslations();

  return (
    <nav className={navbarClass}>
      <div className="flex flex-row items-center">
        <div
          onClick={scroll.scrollToTop}
          className={classNames('mr-3', {
            'text-white': props.scrollPositionY === 0 || !context.isLightTheme,
            'text-black': props.scrollPositionY > 0 && context.isLightTheme,
          })}
        >
          <FontAwesomeIcon icon={faHSquare} size="2x" />
        </div>
      </div>
      <div className="flex flex-row items-center">
        {/*<ul className="flex flex-row justify-between">*/}
        {/*  {languages.map((lng) => (*/}
        {/*    <li key={lng}>*/}
        {/*      <Link*/}
        {/*        to={originalPath}*/}
        {/*        className={classNames('mr-3 uppercase', {*/}
        {/*          'text-white': props.scrollPositionY === 0 || !context.isLightTheme,*/}
        {/*          'text-black': props.scrollPositionY > 0 && context.isLightTheme,*/}
        {/*        })}*/}
        {/*        language={lng}*/}
        {/*      >*/}
        {/*        {lng}*/}
        {/*      </Link>*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
        <DarkModeToggle size={50} onChange={context.toggleTheme} checked={!context.isLightTheme} />
        <a
          href={cv_link}
          target="_blank"
          rel="noreferrer"
          className={classNames(
            'border text-white ml-3 px-3 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition duration-200 ease-in-out',
            {
              'border-white': props.scrollPositionY === 0 && context.isLightTheme,
              'border-black bg-black': props.scrollPositionY > 0 && context.isLightTheme,
              'bg-gray-900 text-white border-gray-900': props.scrollPositionY > 0 && !context.isLightTheme,
            },
          )}
        >
          <FontAwesomeIcon icon={faDownload} />
          <span className="ml-2">{download_cv}</span>
        </a>
      </div>
    </nav>
  );
};

export default withScroll(Header);
