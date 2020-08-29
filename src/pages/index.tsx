import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Presentation from '../components/Presentation/presentation';
import Projects from '../components/Projects/projects';
import WhatIDo from '../components/WhatIDo/whatido';
import MyStack from '../components/MyStack/mystack';
import FreeProjects from '../components/FreeProjects/freeprojects';
import MyBook from '../components/MyBook/MyBook';
import AboutMe from '../components/AboutMe/AboutMe';
import PersonalProjects from '../components/PersonalProjects/personalprojects';

export const ProfileContext = React.createContext<{ isLightTheme: boolean; toggleTheme: () => void }>({
  isLightTheme: true,
  toggleTheme: () => {},
});

class ProfileContextProvider extends Component<unknown, unknown> {
  state = {
    isLightTheme: true,
  };

  onToggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };

  render() {
    return (
      <ProfileContext.Provider value={{ isLightTheme: this.state.isLightTheme, toggleTheme: this.onToggleTheme }}>
        {this.props.children}
      </ProfileContext.Provider>
    );
  }
}

const IndexPage = () => (
  <Layout>
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
  </Layout>
);

export default function App() {
  return (
    <ProfileContextProvider>
      <IndexPage />
    </ProfileContextProvider>
  );
}
