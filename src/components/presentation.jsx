import React from "react"
import Header from './header'
import styles from './presentation.module.scss'
import classnames from 'classnames'

const Presentation = () => (
  <div className={classnames(styles.first_section, 'section hero is-fullheight')}>
    <Header/>
    <div className="hero-body">
      <div className={styles.overlay}/>
      <div className="container has-text-centered">
        <h3 className={classnames(styles.a_title, 'title is-3')}>Hi, my name is</h3>
        <h1 className={classnames(styles.a_title, styles.is_name, 'title')}>Helmer Dávila</h1>
        <h3 className={classnames(styles.a_title, 'title is-4')}>Software Engineer and Fullstack Web Developer</h3>
        <h2 className={classnames(styles.a_title, 'title is-2')}>
          <span>and I build</span>
        </h2>
      </div>
    </div>    
  </div>
);

export default Presentation