import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Presentation from '../components/presentation'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Presentation />
    <div className="section">
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
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
