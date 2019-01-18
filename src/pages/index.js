import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Presentation from '../components/presentation'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Presentation/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
