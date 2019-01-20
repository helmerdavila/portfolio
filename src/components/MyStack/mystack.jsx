import React from 'react'
import classNames from 'classnames'
import styles from './mystack.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faCss3Alt, faJsSquare, faPhp } from '@fortawesome/free-brands-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons'

const MyStack = () => (
  <section id="my_stack" className="section">
    <div className="container">
      <h1 className="title is-1 has-text-centered title_my_stack" style={{marginBottom: '1em'}}>My stack</h1>
      <div className="level">
        <div className={classNames(styles.level_item_stack, 'level-item')}>
          <div className={styles.icon_container}>
            <FontAwesomeIcon icon={faJsSquare} size="3x"/>
          </div>
          <h4 className="title is-4">Javascript</h4>
          <span>Backend / Frontend</span>
        </div>
        <div className={classNames(styles.level_item_stack, 'level-item')}>
          <div className={styles.icon_container}>
            <FontAwesomeIcon icon={faPhp} size="3x"/>
          </div>
          <h4 className="title is-4">PHP</h4>
          <span>Backend</span>
        </div>
        <div className={classNames(styles.level_item_stack, 'level-item')}>
          <div className={styles.icon_container}>
            <FontAwesomeIcon icon={faCss3Alt} size="3x"/>
          </div>
          <h4 className="title is-4">HTML + CSS</h4>
          <span>Frontend</span>
        </div>
        <div className={classNames(styles.level_item_stack, 'level-item')}>
          <div className={styles.icon_container}>
            <FontAwesomeIcon icon={faGem} size="3x"/>
          </div>
          <h4 className="title is-4">Ruby</h4>
          <span>Backend</span>
        </div>
        <div className={classNames(styles.level_item_stack, 'level-item')}>
          <div className={styles.icon_container}>
            <FontAwesomeIcon icon={faAws} size="3x"/>
          </div>
          <h4 className="title is-4">AWS</h4>
          <span>Servers</span>
        </div>
      </div>
    </div>
  </section>
)

export default MyStack