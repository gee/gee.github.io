import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <img src="/public/images/profile.jpg" alt="" width="300" align="right"></img>
    <h1>About</h1>
    <p>Hi there! I'm Peter.</p>
    <p>I wrote my first line of code when I was eight, and I've loved it ever since. Since then I've created games, desktop apps, databases, macros, websites, web crawlers, trading algorithms–whatever piques my curiosity, really. I'm fascinated by interesting problems, and I enjoy writing code to solve them. I recently graduated with a Bachelor of Science in Computer Science from the <Link to="https://unwsp.edu/">University of Northwestern – St. Paul</Link>.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
