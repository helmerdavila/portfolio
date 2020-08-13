import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Presentation from '../components/Presentation/presentation'
import Projects from '../components/Projects/projects'
import WhatIDo from '../components/WhatIDo/whatido'
import MyStack from '../components/MyStack/mystack'
import FreeProjects from '../components/FreeProjects/freeprojects'
import MyBook from '../components/MyBook/MyBook'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Fullstack Web Developer"
      keywords={[
        'helmer davila',
        'fullstack',
        'developer',
        'react',
        'vue',
        'angular',
        'react native',
      ]}
    />
    <Presentation />
    <section id="about_me" className="p-10">
      <div className="container mx-auto">
        <h1 className="text-5xl text-center font-semibold">About me</h1>
        <p>
          Hi, my name is Helmer Davila, and I am from Peru. I am a JS/PHP
          Developer and I have worked with framework and frameworkless projects.
          My coding languages for the backend are Javascript - Typescript (Node
          JS, Express, NestJs), PHP (Laravel/Zend/Codeigniter). For frontend
          work I code in Javascript (Vue/Angular/React/React Native/Ionic),
          HTML, CSS (SCSS/Stylus).
        </p>
      </div>
    </section>
    <WhatIDo />
    <MyStack />
    <Projects />
    <MyBook />
    <FreeProjects />
  </Layout>
)

export default IndexPage
