import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faHSquare } from '@fortawesome/free-solid-svg-icons'
import { withScroll } from 'react-window-decorators'
import classnames from 'classnames'
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll'

class Header extends React.Component {
  render() {
    const iconColor = this.props.scrollPositionY === 0 ? 'white' : 'black'
    const navbarClass = classnames(
      this.props.scrollPositionY > 0 ? 'navbar-scrolled shadow-xl' : null,
      'fixed flex flex-row w-screen h-16 px-5 md:px-8 justify-between z-10 transition duration-200 ease-in-out'
    )
    const navbarLinkClass = classnames(
      this.props.scrollPositionY === 0
        ? 'navbar-link-unscrolled'
        : 'navbar-link-scrolled',
      'mx-3 cursor-pointer transition duration-200 ease-in-out hidden md:block'
    )

    return (
      <nav className={navbarClass}>
        <div className="flex flex-row items-center">
          <div onClick={scroll.scrollToTop} className="mr-3">
            <FontAwesomeIcon icon={faHSquare} size="2x" color={iconColor} />
          </div>
          <LinkScroll
            to="who_am_i"
            spy={true}
            className={navbarLinkClass}
            smooth
          >
            Who am I
          </LinkScroll>
          <LinkScroll
            to="about_me"
            spy={true}
            className={navbarLinkClass}
            smooth
          >
            About me
          </LinkScroll>
          <LinkScroll
            to="what_i_do"
            spy={true}
            className={navbarLinkClass}
            smooth
          >
            What I do
          </LinkScroll>
          <LinkScroll
            to="my_stack"
            spy={true}
            className={navbarLinkClass}
            smooth
          >
            My stack
          </LinkScroll>
          <LinkScroll
            to="projects"
            spy={true}
            className={navbarLinkClass}
            smooth
          >
            Projects
          </LinkScroll>
        </div>
        <div className="flex flex-row items-center">
          <a
            href="https://www.dropbox.com/s/xubgx2iei31njza/Helmer_CV.pdf?dl=0"
            className={classnames(
              this.props.scrollPositionY === 0
                ? 'border-white'
                : 'border-black bg-black',
              'border text-white px-3 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition duration-200 ease-in-out'
            )}
          >
            <FontAwesomeIcon icon={faDownload} />
            <span className="ml-2">Download CV</span>
          </a>
        </div>
      </nav>
    )
  }
}

export default withScroll(Header)
