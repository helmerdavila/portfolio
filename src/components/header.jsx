import React from 'react'
import styles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHSquare, faDownload } from '@fortawesome/free-solid-svg-icons'
import { withScroll } from 'react-window-decorators'
import classnames from 'classnames'
import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll'

class Header extends React.Component {
  render() {
    const navbarLinkClass = classnames(this.props.scrollPositionY === 0 ? styles.link_navbar_unscrolled : styles.link_navbar_scrolled, 'navbar-item');
    const iconColor = this.props.scrollPositionY === 0 ? 'white' : 'black';
    const navbarClass = classnames(this.props.scrollPositionY > 0 ? styles.navbar_scrolled : null, 'navbar is-fixed-top');

    return (
      <nav className={classnames(navbarClass)}>
        <div className="navbar-brand">
          <div onClick={scroll.scrollToTop} className={classnames(styles.home_button, 'navbar-item')}><FontAwesomeIcon icon={faHSquare} size="2x" color={iconColor}/></div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <LinkScroll to="who_am_i" spy={true} className={navbarLinkClass} smooth>Who am I</LinkScroll>
            <LinkScroll to="about_me" spy={true} className={navbarLinkClass} smooth>About me</LinkScroll>
            <LinkScroll to="what_i_do" spy={true} className={navbarLinkClass} smooth>What I do</LinkScroll>
            <LinkScroll to="my_stack" spy={true} className={navbarLinkClass} smooth>My stack</LinkScroll>
            <LinkScroll to="projects" spy={true} className={navbarLinkClass} smooth>Projects</LinkScroll>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a href="https://www.dropbox.com/s/xubgx2iei31njza/Helmer_CV.pdf?dl=0" className={classnames(this.props.scrollPositionY === 0 ? 'is-inverted is-outlined' : 'is-primary', 'button is-primary')}>
                    <span className="icon"><FontAwesomeIcon icon={faDownload}/></span>
                    <span>Download CV</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withScroll(Header)
