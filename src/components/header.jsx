import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHSquare, faDownload } from '@fortawesome/free-solid-svg-icons'

const Header = ({ siteTitle }) => (
  <nav className="navbar is-fixed-top">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item"><FontAwesomeIcon icon={faHSquare}/></Link>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <a href="#" className="navbar-item">Who am I</a>
        <a href="#" className="navbar-item">About me</a>
        <a href="#" className="navbar-item">What I do</a>
        <a href="#" className="navbar-item">My stack</a>
        <a href="#" className="navbar-item">My projects</a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-primary">
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
