import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import classnames from 'classnames'
import styles from './footer.module.scss'

const Footer = () => (
  <footer className={classnames(styles.footer, 'footer')}>
    <div className="container">
      <div className="content has-text-centered">
        <a className={styles.rounded_link} href="https://www.linkedin.com/in/helmerdavila/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} fixedWidth/>
        </a>
        <a className={styles.rounded_link} href="https://www.github.com/helmerdavila" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} fixedWidth/>
        </a>
        <p>
          <span>© {new Date().getFullYear()}</span> -- <span>Helmer Dávila</span> -- <span>Powered by Gatsby.</span>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer