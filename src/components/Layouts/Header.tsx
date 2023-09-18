import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withScroll } from 'react-window-decorators';
import classNames from 'classnames';
import { animateScroll as scroll } from 'react-scroll';
import { faDownload, faHSquare, faMoon, faSun } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import useTranslations from '../UseTranslations';
import { ThemeContext } from '../Layout';
import { Link } from 'gatsby';

interface Props {
  scrollPositionY: number;
}

export const HeaderComponent = (props: Props) => {
  const context = useContext(ThemeContext);
  const isLightTheme = context.isLightTheme === 'light';
  const navbarClass = classNames(
    'fixed flex flex-row w-screen h-16 px-5 md:px-8 justify-between z-20 transition duration-200 ease-in-out',
    {
      'bg-white dark:bg-gray-800 shadow-xl': props.scrollPositionY > 0,
    },
  );
  const { cv_link, download_cv } = useTranslations();
  const stylesText = {
    'text-white': props.scrollPositionY === 0 || !isLightTheme,
    'text-black dark:text-white': props.scrollPositionY > 0 && isLightTheme,
  };
  const stylesLink = classNames('mr-3 uppercase', stylesText);

  return (
    <nav className={navbarClass}>
      <div className="flex flex-row items-center">
        <div onClick={scroll.scrollToTop} className={classNames('mr-3', stylesText)}>
          <FontAwesomeIcon icon={faHSquare} size="2x" />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row justify-between">
          <li key="en">
            <Link to="/" className={stylesLink}>
              EN
            </Link>
          </li>
          <li key="es">
            <Link to="/es" className={stylesLink}>
              ES
            </Link>
          </li>
          <li key="fr">
            <Link to="/fr" className={stylesLink}>
              FR
            </Link>
          </li>
          <li key="pt">
            <Link to="/pt" className={stylesLink}>
              PT
            </Link>
          </li>
        </ul>
        <button className={classNames('cursor-pointer w-10 h-full', stylesText)} onClick={context.toggleTheme}>
          {context.isLightTheme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
        <a
          href={cv_link}
          target="_blank"
          rel="noreferrer"
          className={classNames(
            'border text-white ml-3 px-3 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition duration-200 ease-in-out',
            {
              'border-white': props.scrollPositionY === 0 && isLightTheme,
              'border-black dark:border-gray-900 bg-black dark:bg-gray-900': props.scrollPositionY > 0,
            },
          )}
        >
          <FontAwesomeIcon icon={faDownload} />
          <span className="hidden md:inline-block ml-2">{download_cv}</span>
        </a>
      </div>
    </nav>
  );
};

export default withScroll(HeaderComponent);
