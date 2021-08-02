import React from 'react';
import SEO from '../components/seo';
import Presentation from '../components/Presentation/presentation';
import Projects from '../components/Projects/projects';
import WhatIDo from '../components/WhatIDo/whatido';
import MyStack from '../components/MyStack/mystack';
import FreeProjects from '../components/FreeProjects/freeprojects';
import MyBook from '../components/MyBook/MyBook';
import AboutMe from '../components/AboutMe/AboutMe';
import PersonalProjects from '../components/PersonalProjects/personalprojects';
import Footer from '../components/Layouts/footer';

const IndexPage = () => (
  <>
    <SEO
      title="Fullstack Web Developer"
      keywords={['helmer davila', 'fullstack', 'developer', 'react', 'vue', 'angular', 'react native']}
      description="My technical blog"
    />
    <Presentation />
    <AboutMe />
    <WhatIDo />
    <MyStack />
    <PersonalProjects />
    <Projects />
    <MyBook />
    <FreeProjects />
    <Footer />
  </>
);

export default IndexPage;
