import React from 'react'
import classNames from 'classnames'
import styles from './mystack.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faAws, faDocker, faNodeJs, faPhp, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'

const MyStack = () => (
  <section id="my_stack" className="section">
    <div className="container">
      <h1
        className="title is-1 has-text-centered title_my_stack"
        style={{ marginBottom: '1em' }}
      >
        My stack
      </h1>
      <div className="level">
        <div className={classNames(styles.level_item_stack, 'level-item')}>
          <div className={styles.icon_container}>
            <FontAwesomeIcon icon={faPhp} size="3x" />
            <FontAwesomeIcon icon={faNodeJs} size="3x" />
          </div>
          <h4 className="title is-4">PHP | NodeJS</h4>
          <span>Backend</span>
        </div>
        <div className={classNames(styles.level_item_stack, 'level-item')}>
          <div className={styles.icon_container}>
            <FontAwesomeIcon icon={faReact} size="3x" />
            <FontAwesomeIcon icon={faAngular} size="3x" />
            <FontAwesomeIcon icon={faVuejs} size="3x" />
          </div>
          <h4 className="title is-4">VueJs | Angular | React</h4>
          <span>Frontend</span>
        </div>
        <div className={classNames(styles.level_item_stack, 'level-item')}>
          <div className={styles.icon_container}>
            <FontAwesomeIcon icon={faAws} size="3x" />
            <FontAwesomeIcon icon={faDocker} size="3x" />
          </div>
          <h4 className="title is-4">AWS</h4>
          <span>Servers | Container Management</span>
        </div>
      </div>
    </div>
  </section>
)

export default MyStack
