import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Blog</h1>
    <p>Coming soon</p>
    <Link to="/about">About</Link> <br />
  </Layout>
)

export default IndexPage
