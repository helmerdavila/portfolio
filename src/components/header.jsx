import { Link } from 'gatsby'
import React from 'react'
import styles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHSquare, faDownload } from '@fortawesome/free-solid-svg-icons'
import { withScroll } from 'react-window-decorators'
import classnames from 'classnames'

class Header extends React.Component {
  render() {
    const navbarLinkClass = classnames(this.props.scrollPositionY === 0 ? styles.link_navbar_unscrolled : styles.link_navbar_scrolled, 'navbar-item');
    const iconColor = this.props.scrollPositionY === 0 ? 'white' : 'black';
    const navbarClass = classnames(this.props.scrollPositionY > 0 ? styles.navbar_scrolled : null, 'navbar is-fixed-top');

    return (
      <nav className={classnames(navbarClass)}>
        <div className="navbar-brand">
          <Link to="/" className="navbar-item"><FontAwesomeIcon icon={faHSquare} size="2x" color={iconColor}/></Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <a href="#" className={navbarLinkClass}>Who am I</a>
            <a href="#" className={navbarLinkClass}>About me</a>
            <a href="#" className={navbarLinkClass}>What I do</a>
            <a href="#" className={navbarLinkClass}>My stack</a>
            <a href="#" className={navbarLinkClass}>My projects</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className={classnames(this.props.scrollPositionY === 0 ? 'is-inverted is-outlined' : 'is-primary', 'button is-primary')}>
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
