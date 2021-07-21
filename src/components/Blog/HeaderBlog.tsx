import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { withScroll } from 'react-window-decorators';
import classNames from 'classnames';
import { animateScroll as scroll } from 'react-scroll';
import { ProfileContext } from '../../pages';
import { faHSquare } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
// @ts-ignore
import DarkModeToggle from 'react-dark-mode-toggle';

const HeaderBlog = (props: { scrollPositionY: number }) => {
  const context = useContext(ProfileContext);
  const navbarClass = classNames(
    'fixed flex flex-row w-screen h-16 px-5 md:px-8 justify-between z-20 transition duration-200 ease-in-out bg-white',
    {
      'shadow-xl': props.scrollPositionY > 0 && context.isLightTheme,
      'bg-gray-800': props.scrollPositionY > 0 && !context.isLightTheme,
    },
  );
  const { languages, originalPath } = useI18next();

  return (
    <nav className={navbarClass}>
      <div className="flex flex-row items-center">
        <div onClick={scroll.scrollToTop} className={classNames('mr-3 text-black')}>
          <FontAwesomeIcon icon={faHSquare} size="2x" />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row justify-between">
          {languages.map((lng) => (
            <li key={lng}>
              <Link to={originalPath} className={classNames('mr-3 uppercase text-black')} language={lng}>
                {lng}
              </Link>
            </li>
          ))}
        </ul>
        <DarkModeToggle size={50} onChange={context.toggleTheme} checked={!context.isLightTheme} />
      </div>
    </nav>
  );
};

export default withScroll(HeaderBlog);

