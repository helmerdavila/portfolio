import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Presentation from '../components/presentation'
import Projects from '../components/Projects/projects'
import WhatIDo from '../components/WhatIDo/whatido'
import MyStack from '../components/MyStack/mystack'
import FreeProjects from '../components/FreeProjects/freeprojects'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Portfolio"
      keywords={['helmer davila', 'fullstack', 'developer', 'react']}
    />
    <Presentation />
    <section id="about_me" className="section">
      <div className="container">
        <h1 className="title is-1 has-text-centered">About me</h1>
        <p>
          Hi, my name is Helmer Dávila, and I am from Peru. I am a JS/PHP/Ruby
          Developer using secure and stable frameworks for quick development, I
          write backend code in Javascript (Node JS, Express, Adonis JS), PHP
          (Laravel/Zend/Codeigniter), Ruby (Rails) and frontend code in
          Javascript (Vue/Angular/React), HTML, CSS (SCSS/Stylus).
        </p>
      </div>
    </section>
    <WhatIDo />
    <MyStack />
    <Projects />
    <FreeProjects />
  </Layout>
)

export default IndexPage
