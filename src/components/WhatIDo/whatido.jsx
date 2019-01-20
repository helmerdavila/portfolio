import React from 'react'
import classNames from 'classnames'
import styles from './whatido.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome } from '@fortawesome/free-brands-svg-icons'
import { faCode, faServer } from '@fortawesome/free-solid-svg-icons'

const WhatIDo = () => (
  <section id="what_i_do" className={classNames(styles.what_i_do, 'section')}>
    <div className="container">
      <h1 className={classNames(styles.title, 'title is-1 has-text-centered')}>What I do</h1>
      <div className="columns">
        <div className="column">
          <div className={styles.service}>
              <span className={styles.the_icon}>
                <FontAwesomeIcon icon={faChrome} size="3x"/>
              </span>
            <div className="content">
              <h3>Frontend Development</h3>
              <p>I code for the browser using languages like HTML(5), CSS(3) and JavaScript. Building sites from scratch, with or without frameworks. I've worked with hibrid mobile apps too.</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className={styles.service}>
              <span className={styles.the_icon}>
                <FontAwesomeIcon icon={faCode} size="3x"/>
              </span>
            <div className="content">
              <h3>Backend Development</h3>
              <p>Code the requirements and restrictions for the business, using backend frameworks with good scalability option and quick development of new features.</p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className={styles.service}>
              <span className={styles.the_icon}>
                <FontAwesomeIcon icon={faServer} size="3x"/>
              </span>
            <div className="content">
              <h3>Server managment</h3>
              <p>Upload new changes in apps with tools for automated deployments. Setting testing and production environments, avoiding security mistakes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WhatIDo