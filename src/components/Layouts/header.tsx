import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// @ts-ignore
import { withScroll } from 'react-window-decorators';
import classNames from 'classnames';
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll';
import { ProfileContext } from '../../pages';
import { faDownload, faHSquare } from '@fortawesome/pro-duotone-svg-icons';
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
          Who am I
        </LinkScroll>
        <LinkScroll to="about_me" spy={true} className={navbarLinkClass} smooth>
          About me
        </LinkScroll>
        <LinkScroll to="what_i_do" spy={true} className={navbarLinkClass} smooth>
          What I do
        </LinkScroll>
        <LinkScroll to="my_stack" spy={true} className={navbarLinkClass} smooth>
          My stack
        </LinkScroll>
        <LinkScroll to="projects" spy={true} className={navbarLinkClass} smooth>
          Projects
        </LinkScroll>
      </div>
      <div className="flex flex-row items-center">
        <DarkModeToggle size={50} onChange={context.toggleTheme} checked={!context.isLightTheme} />
        <a
          href="https://www.dropbox.com/s/xubgx2iei31njza/Helmer_CV.pdf?dl=0"
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
          <span className="ml-2">Download CV</span>
        </a>
      </div>
    </nav>
  );
};

export default withScroll(Header);
