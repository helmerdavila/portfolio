import React from 'react'
import classNames from 'classnames'
import styles from './whatido.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome } from '@fortawesome/free-brands-svg-icons'
import { faCode, faServer, faMobile } from '@fortawesome/free-solid-svg-icons'

const WhatIDo = () => (
  <section id="what_i_do" className={classNames(styles.what_i_do, 'section')}>
    <div className="container">
      <h1 className={classNames(styles.title, 'title is-1 has-text-centered')}>
        What I do
      </h1>
      <div className="columns">
        <div className="column">
          <div className={styles.service}>
            <span className={styles.the_icon}>
              <FontAwesomeIcon icon={faMobile} size="3x" />
            </span>
            <div className="content">
              <h3>Mobile</h3>
              <p>
                Use of the frameworks like React Native & Ionic to create
                screens and navigation similar to native behavior. Deployment
                process for both stores (Play Store and App Store).
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className={styles.service}>
            <span className={styles.the_icon}>
              <FontAwesomeIcon icon={faChrome} size="3x" />
            </span>
            <div className="content">
              <h3>Frontend</h3>
              <p>
                Use of the languages like HTML(5), CSS(3) and JavaScript to
                create useful UI in different projects. Building sites from
                scratch, with or without frameworks.
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className={styles.service}>
            <span className={styles.the_icon}>
              <FontAwesomeIcon icon={faCode} size="3x" />
            </span>
            <div className="content">
              <h3>Backend</h3>
              <p>
                Code the requirements and restrictions for the business, using
                backend frameworks with good scalability option and quick
                development of new features.
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className={styles.service}>
            <span className={styles.the_icon}>
              <FontAwesomeIcon icon={faServer} size="3x" />
            </span>
            <div className="content">
              <h3>SysOps</h3>
              <p>
                Deploy new updates with pipelines, setting test and production
                environments. Use of logging tools, checking where and when the
                code failed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default WhatIDo
