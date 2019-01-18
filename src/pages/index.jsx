import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Presentation from '../components/presentation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faPhp, faCss3Alt, faAws } from '@fortawesome/free-brands-svg-icons'
import { faGem } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss'
import classnames from "classnames"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Presentation />
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">About me</h1>
        <p>
          Hi, my name is Helmer Dávila, and I am from Peru. I am a JS/PHP/Ruby
          Developer using secure and stable frameworks for quick development, I
          write backend code in Javascript (Node JS, Express, Adonis JS), PHP
          (Laravel/Zend/Codeigniter), Ruby (Rails) and frontend code in Javascript
          (Vue/Angular/React), HTML, CSS (SCSS/Stylus).
        </p>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered title_my_stack" style={{marginBottom: '1em'}}>My stack</h1>
        <div className="level">
          <div className={classnames(styles.level_item_stack, 'level-item')}>
            <div className={styles.icon_container}>
              <FontAwesomeIcon icon={faJsSquare} size="3x"/>
            </div>
            <h4 className="title is-4">Javascript</h4>
            <span>Backend / Frontend</span>
          </div>
          <div className={classnames(styles.level_item_stack, 'level-item')}>
            <div className={styles.icon_container}>
              <FontAwesomeIcon icon={faPhp} size="3x"/>
            </div>
            <h4 className="title is-4">PHP</h4>
            <span>Backend</span>
          </div>
          <div className={classnames(styles.level_item_stack, 'level-item')}>
            <div className={styles.icon_container}>
              <FontAwesomeIcon icon={faCss3Alt} size="3x"/>
            </div>
            <h4 className="title is-4">HTML + CSS</h4>
            <span>Frontend</span>
          </div>
          <div className={classnames(styles.level_item_stack, 'level-item')}>
            <div className={styles.icon_container}>
              <FontAwesomeIcon icon={faGem} size="3x"/>
            </div>
            <h4 className="title is-4">Ruby</h4>
            <span>Backend</span>
          </div>
          <div className={classnames(styles.level_item_stack, 'level-item')}>
            <div className={styles.icon_container}>
              <FontAwesomeIcon icon={faAws} size="3x"/>
            </div>
            <h4 className="title is-4">AWS</h4>
            <span>Servers</span>
          </div>
        </div>
      </div>
    </section>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
