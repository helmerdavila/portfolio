import React from 'react'
import styles from './mybook.module.scss'
import CtbookImage from '../Images/Ctbook'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const MyBook = () => (
  <div className={classNames(styles.section_book, 'container')}>
    <div className="columns">
      <div className="column">
        <figure className={classNames(styles.image, 'image')}>
          <CtbookImage />
          <div className={styles.image_overlay} />
        </figure>
      </div>
      <div className="column">
        <h2 className="title">CTBook</h2>
        <p className={styles.description}>
          When I first started my career as a developer I saw that there was a
          gap between technology and business, I’ve collected all doubts that
          non-tech people have about tech startups, that’s how CTBOOK (CTO+Book)
          born. So, if you are starting in the tech startup world (or you know
          somebody who does), I recommend you this book, it’s written in the
          most simple language possible, avoiding any technical knowledge.
        </p>
        <a
          href="https://leanpub.com/ctbook/read_sample"
          target="_blank"
          className="button is-primary"
        >
          <FontAwesomeIcon icon={faBook} />
          <span className={styles.button_text}>Read sample</span>
        </a>
      </div>
    </div>
  </div>
)

export default MyBook
