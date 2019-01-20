import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Presentation from '../components/presentation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faPhp, faCss3Alt, faAws, faChrome } from '@fortawesome/free-brands-svg-icons'
import { faGem, faCode, faServer } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss'
import classnames from "classnames"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Presentation />
    <section id="about_me" className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered" style={{marginBottom: '1em'}}>About me</h1>
        <p>
          Hi, my name is Helmer Dávila, and I am from Peru. I am a JS/PHP/Ruby
          Developer using secure and stable frameworks for quick development, I
          write backend code in Javascript (Node JS, Express, Adonis JS), PHP
          (Laravel/Zend/Codeigniter), Ruby (Rails) and frontend code in Javascript
          (Vue/Angular/React), HTML, CSS (SCSS/Stylus).
        </p>
      </div>
    </section>
    <section id="what_i_do" className={classnames(styles.what_i_do, 'section')}>
      <div className="container">
        <h1 className={classnames(styles.title, 'title is-1 has-text-centered')}>What I do</h1>
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
    <section id="my_stack" className="section">
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
  </Layout>
)

export default IndexPage
