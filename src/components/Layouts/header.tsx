import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { withScroll } from 'react-window-decorators';
import classNames from 'classnames';
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll';
import { ProfileContext } from '../../pages';
import { faDownload, faHSquare } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import { Link, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
// @ts-ignore
import DarkModeToggle from 'react-dark-mode-toggle';

const Header = (props: { scrollPositionY: number }) => {
  const context = useContext(ProfileContext);
  const navbarClass = classNames(
    'fixed flex flex-row w-screen h-16 px-5 md:px-8 justify-between z-20 transition duration-200 ease-in-out',
    {
      'bg-white shadow-xl': props.scrollPositionY > 0 && context.isLightTheme,
      'bg-gray-800': props.scrollPositionY > 0 && !context.isLightTheme,
    },
  );
  const navbarLinkClass = classNames('mx-3 cursor-pointer transition duration-200 ease-in-out hidden md:block', {
    'text-white': props.scrollPositionY === 0 || (props.scrollPositionY > 0 && !context.isLightTheme),
    'text-dark': props.scrollPositionY > 0 && context.isLightTheme,
  });
  const { languages, originalPath } = useI18next();
  const { t } = useTranslation();

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
        <LinkScroll to="who_am_i" spy={true} className={navbarLinkClass} smooth>
          {t('who_am_i')}
        </LinkScroll>
        <LinkScroll to="about_me" spy={true} className={navbarLinkClass} smooth>
          {t('about_me')}
        </LinkScroll>
        <LinkScroll to="what_i_do" spy={true} className={navbarLinkClass} smooth>
          {t('what_i_do')}
        </LinkScroll>
        <LinkScroll to="my_stack" spy={true} className={navbarLinkClass} smooth>
          {t('my_stack')}
        </LinkScroll>
        <LinkScroll to="projects" spy={true} className={navbarLinkClass} smooth>
          {t('projects')}
        </LinkScroll>
      </div>
      <div className="flex flex-row items-center">
        <ul className="flex flex-row justify-between">
          {languages.map((lng) => (
            <li key={lng}>
              <Link
                to={originalPath}
                className={classNames('mr-3 uppercase', {
                  'text-white': props.scrollPositionY === 0 || !context.isLightTheme,
                  'text-black': props.scrollPositionY > 0 && context.isLightTheme,
                })}
                language={lng}
              >
                {lng}
              </Link>
            </li>
          ))}
        </ul>
        <DarkModeToggle size={50} onChange={context.toggleTheme} checked={!context.isLightTheme} />
        <a
          href={t('cv_link')}
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
          <span className="ml-2">{t('download_cv')}</span>
        </a>
      </div>
    </nav>
  );
};

export default withScroll(Header);
